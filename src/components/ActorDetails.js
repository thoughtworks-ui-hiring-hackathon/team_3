import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import { IMG_BASE_URL } from '../consts';

const ActorDetails = props => {
  const { actor, filmography } = props;

  return (
    <Container>
      {!isEmpty(actor) && (
        <div className="actor-wrapper">
          <Row>
            <Col sm={4}>
              <img
                className="image"
                src={`${IMG_BASE_URL}${actor.profile_path}`}
              />
            </Col>
            <Col sm={8}>
              <div className="description-wrapper">
                <div className="meter">Meter {actor.popularity}</div>
                <div>{actor.name}</div>
                <div>Date of Birth {actor.birthday}</div>
                <div>{actor.biography}</div>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
};

export default ActorDetails;
