import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ image, title, movieType, stars, movieId }) => {
  return (
    <div className="movie-wrapper">
      <img className="image" src={image} />
      <div className="movie-name">{title}</div>
      <div className="movie-type">{movieType}</div>
      <div className="movie-ratings">{stars}</div>
      <div className="show-more">
        <Link to={`/movie/${movieId}`}>Show more</Link>
      </div>
    </div>
  );
};

export default Movie;
