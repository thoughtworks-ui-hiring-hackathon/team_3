import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ image, title, movieType, stars, movieId }) => {
  return (
    <div className="movie-wrapper">
      <img className="movie-image" src={image} alt={title} />
      <h4 className="movie-name">{title}</h4>
      <div className="movie-type">{movieType}</div>
      <div className="movie-ratings">{stars}</div>
      <div className="movie-show-more">
        <Link to={`/movie/${movieId}`}>Show more</Link>
      </div>
    </div>
  );
};

export default Movie;
