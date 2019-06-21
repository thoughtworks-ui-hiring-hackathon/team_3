import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container'

import MovieList from '../../components/MovieList';
import { getMoviesByType } from '../../actions/movies-actions';
import { MOVIE_CATEGORY } from '../../consts';
import './home.scss';

class Home extends React.PureComponent {
  render() {
    const { getMoviesByType, movieType } = this.props;
    return (
      <>
        <Container>
          <MovieList
            type={MOVIE_CATEGORY.LATEST}
            getMoviesByType={getMoviesByType}
            movieType={movieType}
          />
          <MovieList
            type={MOVIE_CATEGORY.TRENDING}
            getMoviesByType={getMoviesByType}
            movieType={movieType}
          />
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { movieType } = state;
  return {
    movieType
  };
};

const mapDispatchToProps = dispatch => ({
  getMoviesByType: type => dispatch(getMoviesByType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
