import React from 'react'
import { Row, Col } from 'react-bootstrap'
import isEmpty from 'lodash/isEmpty'

const Info = ({ info }) => {
  let { title, overview, genres } = info

  genres = isEmpty(genres) ? [] : genres
  let genresHtml = genres.map((genre) => (
    <span>{`${genre.name} `}</span>
  ))

  return (
    <div className="movie--info">
      <Row>
        <Col sm={6}>
          <h1>{title}</h1>
          <p>{overview}</p>
        </Col>
        <Col sm={6}>
          <section className="movie--card">
            <div className="">
              <strong>Genre</strong>
              <span>{genresHtml}</span>
            </div>
          </section>
        </Col>
      </Row>
    </div>
  )
}

export default Info;