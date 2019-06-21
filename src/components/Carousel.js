import React from "react";
import Slider from "react-slick";
import isEmpty from 'lodash/isEmpty'

class Carousel extends React.Component {
  render() {
    let { slides } = this.props
    if (isEmpty(slides)) {
      return null;
    }

    let slidesHtml = slides.map((slide) => {
      let { id, title, genres, poster_path} = slide

      // Get genres
      genres = isEmpty(genres) ? [] : genres
      let genresHtml = genres.map((genre) => (
        <span key={genre.id}>{`${genre.name}, `}</span>
      ))

      return (
        <div key={id} className="carousel--slide">
          <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt={title} />
          <h3>{title}</h3>
          <p>{genresHtml}</p>
        </div>
      )
    })
    var settings = {
      dots: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
      <Slider className="carousel" {...settings}>
        {slidesHtml}
      </Slider>
    );
  }
}
export default Carousel;