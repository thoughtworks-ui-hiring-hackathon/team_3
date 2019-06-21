import React from 'react';
import {connect} from 'react-redux';
import Banner from './components/Banner'
import {fetchMovie} from '../../actions/movie-actions';


class Details extends React.PureComponent {

  componentDidMount() {
    this.props.fetchMovie(320288);
  }

  render() {
    return (
      <>
        <h1>Movie Details</h1>
        <Banner />
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