const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./authRoutes.cjs');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);

app.listen(5000, () => {
  console.log('✅ Backend đang chạy tại http://localhost:5000');
});