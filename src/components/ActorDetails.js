import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {isEmpty} from 'lodash';
import {IMG_BASE_URL} from '../consts';

const ActorDetails = (props) => {

    const {actor, filmography} = props;

    return (
        <>
            {
                !isEmpty(actor) && <div className='actor-wrapper'>
                    <Row>
                        <Col sm={4}>
                            <img className="image" src={`${IMG_BASE_URL}${actor.profile_path}`}/>
                        </Col>
                        <Col sm={8}>
                            <div className='description-wrapper'>
                                <span className='meter'>Meter {actor.popularity}</span>
                                <span>{actor.name}</span>
                                <span>Date of Birth {actor.birthday}</span>
                                <span>{actor.biography}</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            }

        </>
    );
}

export default ActorDetails;