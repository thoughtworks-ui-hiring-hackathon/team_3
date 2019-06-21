import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container'

import MovieList from '../../components/MovieList';
import { getMovieByType } from '../../actions/getMovie';
import { MOVIE_CATEGORY } from '../../consts';
import './home.scss';

class Home extends React.PureComponent {
  render() {
    const { getMovieByType, movieType } = this.props;
    return (
      <>
        <Container>
          <MovieList
            type={MOVIE_CATEGORY.LATEST}
            getMovieByType={getMovieByType}
            movieType={movieType}
          />
          <MovieList
            type={MOVIE_CATEGORY.TRENDING}
            getMovieByType={getMovieByType}
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
  getMovieByType: type => dispatch(getMovieByType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
