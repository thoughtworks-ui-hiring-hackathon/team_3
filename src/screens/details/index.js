import React from 'react';
import {connect} from 'react-redux';
import Banner from './components/Banner'
import {fetchMovie} from '../../actions/movie-actions';
import isEmpty from 'lodash/isEmpty'

class Details extends React.PureComponent {

  componentDidMount() {
    let { params } = this.props.match
    this.props.fetchMovie(params.ID);
  }

  render() {
    let { movieReducer } = this.props;
    let { isFetching, info, error} = movieReducer;

    if (isFetching) {
      return (
        <p>Loading...</p>
      )
    }

    if (!isEmpty(error)) {
      return (
        <p className="alert alert-danger">
        {JSON.stringify(error)}
        </p>
      )
    }

    return (
      <>
        <h1>Movie Details</h1>
        <Banner info={info} />
      </>
    )
  }
}


const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	fetchMovie: (movieId) => dispatch(fetchMovie(movieId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Details);