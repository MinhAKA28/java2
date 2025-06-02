import { useState } from "react";

const AuthModal = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg p-8 w-full max-w-sm shadow-lg"
        onClick={(e) => e.stopPropagation()} // Ngăn sự kiện click lan ra ngoài
      >
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold"
        >
          &times;
        </button>

        {/* Tiêu đề */}
        <h2 className="text-center text-blue-700 font-semibold mb-6">
          đăng ký ngay
        </h2>

        {/* Form đăng nhập */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full px-4 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded font-semibold"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;