import React from 'react'
const Banner = ({ info }) => {
  let { poster_path } = info
  return (
    <div className="movie--banner">
      <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="banner" />
    </div>
  )
}

export default Banner;