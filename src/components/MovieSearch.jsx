import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieDetailContext";

const MovieSearch = ({ data }) => {
  const { handleVideoTrailer } = useContext(MovieContext);
  const [query, setQuery] = useState("");

  // Lọc phim theo từ khoá
  const filteredMovies = query.trim() === ""
    ? []
    : data.filter((item) =>
        (item.name || item.title || item.original_title)
          .toLowerCase()
          .includes(query.toLowerCase())
      );

  return (
    <div className="my-10 px-10 max-w-full">
      <h2 className="text-xl uppercase mb-4">Tìm kiếm phim</h2>
      
      {/* Ô nhập tìm kiếm */}
      <input
        type="text"
        className="w-full max-w-md border rounded px-4 py-2 mb-6"
        placeholder="Nhập tên phim..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Hiển thị kết quả nếu có */}
      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredMovies.map((item) => (
            <div
              key={item.id}
              className="bg-cover bg-no-repeat bg-center w-[200px] h-[300px] relative hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
              style={{
                backgroundImage: `url(${import.meta.env.VITE_IMG_URL}${item.poster_path})`,
              }}
              onClick={() => handleVideoTrailer(item.id)}
            >
              <div className="bg-black w-full h-full opacity-40 absolute top-0 left-0 z-0" />
              <div className="relative p-4 flex flex-col items-center justify-end h-full">
                <h3 className="text-md uppercase text-white text-center">
                  {item.name || item.title || item.original_title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      ) : query.trim() !== "" ? (
        <p className="text-gray-500 mt-4">Không tìm thấy phim nào khớp.</p>
      ) : null}
    </div>
  );
};

MovieSearch.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MovieSearch;