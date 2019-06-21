import React from 'react';
import { IMG_BASE_URL } from '../consts';
import Movie from './Movie';
import { MOVIE_CATEGORY_STRING } from '../consts';
import { isEmpty } from 'lodash';
import Slider from 'react-slick';

var carouselSettings = {
  dots: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: false
};

class MovieList extends React.PureComponent {
  componentDidMount() {
    const { type, movieType = {}, getMoviesByType } = this.props;
    if (!movieType[type]) {
      getMoviesByType(type);
    }
  }

  render() {
    const { type, movieType = {} } = this.props;
    const response = movieType[type];
    if (isEmpty(response)) {
      return null;
    }
    const { results } = response;
    let movieCollection = results.map(currentResult => {
      return (
        <Movie
          key={currentResult.id}
          title={currentResult.title}
          image={`${IMG_BASE_URL}${currentResult.poster_path}`}
          movieId={currentResult.id}
          movieType={currentResult.genre_ids}
          stars={currentResult.vote_average}
        />
      );
    });

    let slider = (
      <Slider className="carousel" {...carouselSettings}>
        {movieCollection}
      </Slider>
    )

    return (
      <div className="movie-list">
        <h2 className="movie-title">
          {MOVIE_CATEGORY_STRING[type]}
        </h2>
        <div className="movie-collection">
          {slider}
        </div>
      </div>
    );
  }
}

export default MovieList;
