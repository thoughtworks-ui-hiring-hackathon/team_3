import React from 'react';
import {connect} from 'react-redux';
import '../../scss/style.scss';
import {simpleAction} from '../../actions/simple-action';
import MovieList from '../../components/MovieList';
import {MOVIE_CATEGORY} from '../../consts';

class Home extends React.PureComponent {
	simpleAction = event => this.props.simpleAction();
	render() {
		return (
			<MovieList type = {MOVIE_CATEGORY.LATEST}/>
		);
	}
}

const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
