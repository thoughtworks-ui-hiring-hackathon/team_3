import React from 'react';

const Movie = ({image, title, movieType, stars}) => {
    return (
        <div className='movie-wrapper'>
            <img className='image' src={image} />
            <div className='movie-name'>
                {title}
            </div>
            <div className='movie-type'>
                {movieType}
            </div>
            <div className='movie-ratings'>
                {stars}
            </div>
            <div className='show-more'>
                Show More
            </div>
        </div>
    );
}

export default Movie;