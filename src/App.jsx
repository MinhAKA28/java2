import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header-with-default-img";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";
import { MovieProvider } from "./context/MovieDetailContext";
import MovieBlock from "./components/MovieBlock";
import HeroSection from "./components/HeroSection";

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [showHero, setShowHero] = useState(true);

  const handleSearch = async (value) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=vi&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    };
    if (value === "") return setSearchData([]);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setSearchData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async function () {
      const urls = [
        'https://api.themoviedb.org/3/movie/popular?language=vi&page=1',
        'https://api.themoviedb.org/3/movie/top_rated?language=vi',
      ];
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const fetchMovies = async (url) => {
        return await fetch(url, options).then((res) => res.json());
      };
      try {
        const [popularRes, topRatedRes] = await Promise.all(urls.map(fetchMovies));
        setTrendingMovies(popularRes.results);
        setTopRatedMovies(topRatedRes.results);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <MovieProvider>
      <div className="h-full bg-black text-white min-h-screen pb-10 relative">
        {showHero ? (
          <HeroSection onClick={() => setShowHero(false)} />
        ) : (
          <>
            <Header onSearch={handleSearch} />
            <Banner />

            {searchData.length === 0 && (
              <>
                <div id="phimhot">
                  <MovieBlock title="Phim Hot" data={trendingMovies.slice(0, 10)} />
                </div>
                <div id="phimdecu">
                  <MovieBlock title="Phim Đề Cử" data={topRatedMovies.slice(0, 10)} />
                </div>
              </>
            )}

            {searchData.length > 0 && <MovieSearch data={searchData} />}
          </>
        )}
      </div>
    </MovieProvider>
  );
}

export default App;
