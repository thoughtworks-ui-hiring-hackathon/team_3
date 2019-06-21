import React from 'react';
import {connect} from 'react-redux';
import '../../scss/style.scss';
import {simpleAction} from '../../actions/simple-action';

class Home extends React.PureComponent {
	simpleAction = event => this.props.simpleAction();
	render() {
		return (
			<div className="page">
        Home page
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
