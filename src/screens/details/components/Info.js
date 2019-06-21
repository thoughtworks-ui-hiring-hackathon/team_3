import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Info = ({ info }) => {
  let { title, overview } = info
  return (
    <div className="movie--info">
      <Row>
        <Col sm={6}>
          <h1>{title}</h1>
          <p>{overview}</p>
        </Col>
        <Col sm={6}>
          <h1>{title}</h1>
        </Col>
      </Row>
    </div>
  )
}

export default Info;