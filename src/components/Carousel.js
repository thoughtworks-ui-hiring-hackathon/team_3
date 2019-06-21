import React from "react";
import Slider from "react-slick";
import isEmpty from 'lodash/isEmpty'

class Carousel extends React.Component {
  render() {
    let { slides } = this.props
    if (isEmpty(slides)) {
      return null;
    }

    let slidesHtml = slides.map(slide => {
      return (
        <div className="slide">
          {slide.title}
        </div>
      )
    })
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {slidesHtml}
      </Slider>
    );
  }
}
export default Carousel;