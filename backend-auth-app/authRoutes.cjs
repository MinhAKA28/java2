const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const users = []; // Danh sách người dùng lưu tạm

// Đăng ký
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const existing = users.find(u => u.username === username);
  if (existing) return res.status(400).send({ message: 'Tài khoản đã tồn tại!' });

  const hashed = await bcrypt.hash(password, 10);
  users.push({ username, password: hashed });
  res.send({ message: 'Đăng ký thành công!' });
});

// Đăng nhập
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).send({ message: 'Sai tài khoản!' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).send({ message: 'Sai mật khẩu!' });

  const token = jwt.sign({ username }, 'secretkey', { expiresIn: '1h' });
  res.send({ message: 'Đăng nhập thành công!', token });
});

module.exports = router;