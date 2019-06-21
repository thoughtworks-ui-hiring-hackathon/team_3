import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Movie = ({
  image,
  title,
  movieType,
  stars,
  movieId,
  setSelectedMovie
}) => {
  return (
    <div className="movie-wrapper">
      <img
        className="movie-image"
        src={image}
        onClick={() => setSelectedMovie(movieId)}
        alt={title}
      />
      <h4 className="movie-name">
      <span>{title}</span>
      <FaHeart />
      </h4>
      <div className="movie-ratings">{stars}</div>
      <div className="movie-show-more">
        <Link to={`/movie/${movieId}`}>Show more</Link>
      </div>
    </div>
  );
};

export default Movie;
