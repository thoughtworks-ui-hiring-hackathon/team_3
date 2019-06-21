import React from 'react';
import {connect} from 'react-redux';
import '../../scss/style.scss';
import {getMovieByType} from '../../actions/getMovie';
import MovieList from '../../components/MovieList';
import {MOVIE_CATEGORY} from '../../consts';

class Home extends React.PureComponent {
	render() {
		const {getMovieByType} = this.props;
		return (
			<MovieList
				type = {MOVIE_CATEGORY.LATEST}
				getMovieByType={getMovieByType}
			/>
		);
	}
}

const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	getMovieByType: (type) => dispatch(getMovieByType(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
