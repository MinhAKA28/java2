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
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1200, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
  },
};

const MovieBlock = ({ title, data }) => {
  const { handleVideoTrailer } = useContext(MovieContext);

  const scrollId = title.toLowerCase().replace(/\s+/g, "");

  return (
    <div id={scrollId} className="my-10 px-10 max-w-full pb-4 relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <a
          href={`#${scrollId}`}
          className="text-sm text-white hover:underline"
        >
          Xem toàn bộ &rarr;
        </a>
      </div>

      <Carousel
        responsive={responsive}
        draggable={true}
        swipeable={true}
        className="carousel-container"
      >
        {data
          ?.filter((movie) => movie.poster_path)
          .map((movie) => (
            <div
              key={movie.id}
              className="rounded overflow-hidden bg-gray-900 shadow-md cursor-pointer mx-2"
              onClick={() => handleVideoTrailer(movie.id)}
            >
              <img
                src={`${import.meta.env.VITE_IMG_URL}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-2 text-white">
                <h3 className="text-sm font-semibold">
                  {movie.title || movie.name}
                </h3>
                <p className="text-xs text-gray-400 truncate">
                  {movie.original_title || ""}
                </p>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

MovieBlock.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default MovieBlock;