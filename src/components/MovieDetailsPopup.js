import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import Info from '../screens/details/components/Info';
import {clearSelectedMovie} from "../actions/movies-actions";

export default class MovieDetailsPopup extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {selectedMovie, fetchMovie} = this.props;
        const {selectedMovie: prevSelectedMovie} = prevProps;
        if (selectedMovie != prevSelectedMovie) {
            fetchMovie(selectedMovie);
        }
    }

    render() {
        const {selectedMovie, clearSelectedMovie, info} = this.props;
        return (
            <>
                <Modal show={selectedMovie} onHide={clearSelectedMovie}>
                    <Modal.Body>
                        <Info info={info} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={clearSelectedMovie}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}