import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Search from './components/Search'
import Results from './components/Results'
import './explore.scss';

const Explore = () => {
  const [query, setQuery] = useState('');
  const handleFormSubmit = e => e.preventDefault();
  const handleOnChange = e => setQuery(e.target.value)
  return (
    <div id="explore" className="page">
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Search movies, actors, genre..." onChange={handleOnChange}
                  value={query}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            Movie Rating
          </Col>
        </Row>
        <Results query={query} />
      </Container>
    </div>
  );

}

export default Explore;
