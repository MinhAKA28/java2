import PropTypes from "prop-types";
import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/carousel.css";

import { MovieContext } from "../context/MovieDetailContext";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const MovieList = ({ title, data }) => {
  const { handleVideoTrailer } = useContext(MovieContext);

  return (
    <div className="my-10 px-10 max-w-full pb-4">
      <h2 className="text-xl uppercase mb-4">{title}</h2>
      <Carousel responsive={responsive} draggable={true}   swipeable={true} className="carousel-container">
        {data
          ?.filter((movie) => movie.poster_path) // bỏ các phim không có ảnh
          .map((movie) => (
            <div
              key={movie.id}
              className="w-[200px] h-[300px] relative hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer overflow-hidden rounded"
              onClick={() => handleVideoTrailer(movie.id)}
            >
              <img
                src={`${import.meta.env.VITE_IMG_URL}${movie.poster_path}`}
                alt={movie.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="bg-black w-full h-full opacity-40 absolute top-0 left-0 z-10" />
              <div className="relative z-20 p-4 flex flex-col items-center justify-end h-full text-white">
                <h3 className="text-md uppercase text-center">
                  {movie.name || movie.title || movie.original_title}
                </h3>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
};

export default MovieList;