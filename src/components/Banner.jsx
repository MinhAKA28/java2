import IconRatingHalf from "../assets/rating-half.png";
import IconRating from "../assets/rating.png";
import ImgMovie from "../assets/temp-1.png";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="md:h-[750px] h-[1000px] w-full bg-banner bg-cover bg-center bg-no-repeat relative">
      {/* Overlay mờ nền */}
      <div className="w-full h-full bg-black/40 absolute top-0 left-0 z-0" />

      {/* Nội dung đè lên ảnh */}
      <div className="flex flex-col md:flex-row items-center justify-between absolute w-full px-4 md:px-10 z-10 top-1/2 -translate-y-1/2">
        {/* Phần chữ bên trái */}
        <div className="md:w-[50%] w-full">
          <div className="flex flex-col space-y-6 items-start">
            <p className="bg-gradient-to-r from-red-600 to-red-300 py-1 px-4 rounded-md font-medium text-sm">
              TV Show
            </p>

            <div className="flex flex-col space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Tiên Nghịch: Thần Lâm Chi Chiến
              </h1>

              {/* Rating sao */}
              <div className="flex items-center space-x-2">
                <img src={IconRating} alt="rating" className="w-6 h-6" />
                <img src={IconRating} alt="rating" className="w-6 h-6" />
                <img src={IconRating} alt="rating" className="w-6 h-6" />
                <img src={IconRating} alt="rating" className="w-6 h-6" />
                <img src={IconRatingHalf} alt="rating" className="w-6 h-6" />
              </div>

              {/* Mô tả */}
              <p className="text-white text-sm md:text-base pr-4">
                Hậu Cổ Thần chi địa, một số đại thành chủ Tu Ma Nội Hải vì mở rộng lãnh thổ...
                Trong đó có Vân Thiên Tông của Lý Mộ Uyển. Sau khi Lý Mộ Uyển bị trúng kỳ độc,
                Vương Lâm một thân một mình xâm nhập Tu Ma Nội Hải lấy Hoá Thần sơ kỳ tu vi để chiến đấu.
              </p>
            </div>

            {/* Nút hành động */}
            <div className="flex items-center space-x-4 pt-4">
              <button className="py-2 px-4 bg-black text-white border border-white rounded font-semibold hover:bg-white hover:text-black transition">
                Chi tiết
              </button>
              <button className="py-2 px-4 bg-red-600 text-white rounded font-semibold hover:bg-red-500 transition">
                Xem Phim
              </button>
            </div>
          </div>
        </div>

        {/* Ảnh phim bên phải */}
        <div className="md:w-[50%] w-full flex items-center justify-center mt-10 md:mt-0">
          <div className="w-[260px] h-[380px] relative group shadow-lg rounded overflow-hidden">
            {/* Nút Play khi hover */}
<button className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img src={IconPlay} alt="play" className="w-14 h-14" />
            </button>
            <img
              src={ImgMovie}
              alt="banner"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;