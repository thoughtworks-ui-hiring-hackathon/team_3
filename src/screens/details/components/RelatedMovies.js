import React from 'react'
import isEmpty from 'lodash/isEmpty'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/Carousel'

const RelatedMovies = ({ movieId }) => {
  const {loading, error, res} = useFetch({
    url: `https://api.themoviedb.org/3/movie/${movieId}/similar`,
    params: {
      page: 1
    }
  })

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

  if (!isEmpty(error)) {
    return (
      <p className="alert alert-danger">
      {JSON.stringify(error)}
      </p>
    )
  }

  let slides = [{
    image: '',
    title: 'slide 1'
  }, {
    image: '',
    title: 'slide 2'
  }]
  return (
    <div className="related-movies">
      Related movies {movieId}
      <Carousel slides={slides} />
    </div>
  )
}

export default RelatedMovies;