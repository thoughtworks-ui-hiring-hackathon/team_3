import React from 'react';
import {connect} from 'react-redux';
import {getActorDetails, getActorFilmography} from '../../actions/getActorDetails';
import MovieList from '../../components/MovieList';
import {MOVIE_CATEGORY} from '../../consts';
import './home.scss'

class Home extends React.PureComponent {
	render() {
		const {getMovieByType, movieType} = this.props;
		return (
			<>
				<MovieList
					type = {MOVIE_CATEGORY.LATEST}
					getMovieByType={getMovieByType}
					movieType={movieType}
				/>
				<MovieList
					type = {MOVIE_CATEGORY.TRENDING}
					getMovieByType={getMovieByType}
					movieType={movieType}
				/>
			</>
		);
	}
}

const mapStateToProps = state => {
	const {movieType} = state;
	return {
		movieType
	};
}

const mapDispatchToProps = dispatch => ({
	getActorDetails: (id) => dispatch(getActorDetails(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
