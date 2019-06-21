import React from 'react';
import {connect} from 'react-redux';
import '../../scss/style.scss';
import { Link } from 'react-router-dom'

import {simpleAction} from '../../actions/simple-action';

class Home extends React.PureComponent {
	simpleAction = event => this.props.simpleAction();
	render() {
		return (
			<div className="page">
        Home page
				<Link to="/movie/2121">View movie</Link>
			</div>
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
