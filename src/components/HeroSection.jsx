import React, { useState } from "react";

const HeroSection = ({ onClick }) => {
  const [isFading, setIsFading] = useState(false);

  const handleFadeOut = () => {
    setIsFading(true);
    setTimeout(() => {
      onClick(); // Gọi callback từ App.jsx sau khi mờ xong
    }, 700); // thời gian khớp với duration-700
  };

  return (
    <div
      className={`bg-[url('/bg-login.png')] bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white px-4 py-12 transition-opacity duration-700 ease-in-out ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="bg-black bg-opacity-70 rounded-3xl p-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Xem Phim Miễn Phí Cực Nhanh, Chất Lượng Cao <br />
          Và Cập Nhật Liên Tục
        </h1>
        <button
          onClick={handleFadeOut}
          className="mt-4 bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition"
        >
          Xem Ngay →
        </button>
      </div>

      <div className="max-w-4xl mt-12 bg-black bg-opacity-60 p-6 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
          Giới thiệu về HMMT – Phim hay cả rổ - Nền tảng xem online miễn phí mới 2025
        </h2>
        <p className="text-gray-200 mb-4">
          <strong>HMMT</strong>, một nền tảng xem phim trực tuyến hoàn toàn miễn phí, đã không ngừng phát triển để đáp ứng nhu cầu giải trí của hàng triệu người dùng. Với giao diện dễ sử dụng và kho phim phong phú, <strong>RoPhim</strong> không chỉ thu hút người dùng nhờ vào việc <strong>xem phim miễn phí trực tuyến</strong>, mà còn nhờ vào chất lượng video đỉnh cao.
        </p>
        <h3 className="text-xl font-semibold text-white mt-6 mb-2">
          Trang web xem phim chất lượng HD 4K duy nhất tại Việt Nam
        </h3>
        <p className="text-gray-200">
          <strong>HMMT</strong> không chỉ dừng lại ở việc mang đến những bộ phim miễn phí, mà còn chú trọng vào chất lượng hình ảnh vượt trội, đặc biệt là những bộ phim <strong>HD</strong> và <strong>phim 4K</strong>. Điều này giúp người dùng cảm nhận được mọi chi tiết trong từng khung hình với độ sắc nét cao, không khác gì trải nghiệm rạp chiếu phim tại gia.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
