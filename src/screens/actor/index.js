import React from 'react';
import {connect} from 'react-redux';
import {getActorDetails, getActorFilmography} from '../../actions/getActorDetails';
import ActorDetails from "../../components/ActorDetails";

class Home extends React.PureComponent {
	componentDidMount() {
		let { params } = this.props.match;
		this.props.getActorDetails(params.ID);
		this.props.getActorFilmography(params.ID);
	}

	render() {
		const {match, actorDetails} = this.props;
		return (
			<ActorDetails
				actorId={match.params.ID}
				{...actorDetails}
			/>
		);
	}
}

const mapStateToProps = state => {
	const {actorDetails} = state;
	return {
		actorDetails
	};
}

const mapDispatchToProps = dispatch => ({
	getActorDetails: (id) => dispatch(getActorDetails(id)),
	getActorFilmography: (id) => dispatch(getActorFilmography(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
