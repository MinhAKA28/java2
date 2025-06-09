import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { FaSearch, FaUserCircle, FaBars } from "react-icons/fa";
import { MovieContext } from "../context/MovieDetailContext";
import AuthModal from "../components/AuthModal";

const Header = ({ onSearch }) => {
  const { handleVideoTrailer } = useContext(MovieContext);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=vi&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        }
      );
      const data = await res.json();
      setResults(data.results.slice(0, 6));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full text-white z-50 ">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="HMMT Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold tracking-wider">HMMT</span>
          </div>

          <div className="relative w-full max-w-sm hidden md:block">
            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Tìm kiếm phim, diễn viên"
              className="w-full px-4 pl-10 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            {query.trim() !== "" && results.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-gray-900 border border-gray-700 mt-1 rounded shadow-lg max-h-60 overflow-y-auto z-50">
                <ul>
                  {results.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 cursor-pointer"
                      onClick={() => {
                        handleVideoTrailer(item.id);
                        setQuery("");
                        setResults([]);
                      }}
                    >
                      <img
                        src={
                          item.poster_path
                            ? `${import.meta.env.VITE_IMG_URL}${item.poster_path}`
                            : "/default.jpg"
                        }
                        alt={item.title}
                        className="w-10 h-14 object-cover rounded"
                      />
                      <div>
                        <p className="font-semibold text-sm">{item.title}</p>
                        <p className="text-xs text-gray-400">
                          {item.release_date || "?"} – ⭐ {item.vote_average || "?"}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <nav className="hidden md:flex gap-4 text-sm uppercase font-medium text-gray-300">
            <a href="#chude" className="hover:text-yellow-400">Chủ Đề</a>
            <a href="#theloai" className="hover:text-yellow-400">Thể Loại</a>
            <a href="#phimhot" className="hover:text-yellow-400">Phim Hot</a>
            <a href="#phimdecu" className="hover:text-yellow-400">Phim Đề Cử</a>
            <a href="#dienvien" className="hover:text-yellow-400">Diễn Viên</a>
          </nav>

          <div
            className="hidden md:flex items-center gap-2 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <FaUserCircle className="text-2xl" />
            <span className="text-sm">Thành viên</span>
          </div>

          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black px-4 pb-4 space-y-2 text-gray-300">
            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Tìm kiếm phim, diễn viên"
              className="w-full px-4 pl-10 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
            />
            <a href="#chude" className="block hover:text-yellow-400">Chủ Đề</a>
            <a href="#theloai" className="block hover:text-yellow-400">Thể Loại</a>
            <a href="#phimhot" className="block hover:text-yellow-400">Phim Hot</a>
            <a href="#phimdecu" className="block hover:text-yellow-400">Phim Đề Cử</a>
            <a href="#dienvien" className="block hover:text-yellow-400">Diễn Viên</a>
            <div
              className="flex items-center gap-2 pt-2 border-t border-gray-700 mt-2 cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <FaUserCircle className="text-xl" />
              <span className="text-sm">Thành viên</span>
            </div>
          </div>
        )}
      </header>

      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;