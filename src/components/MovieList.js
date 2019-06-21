import React from 'react';
import responseMock from '../mocks/trendingMovies';
import {IMG_BASE_URL} from '../consts';
import Movie from './Movie';
import {MOVIE_CATEGORY} from '../consts';

const MovieList = ({type}) => {
    const {results} = responseMock;
    return (
        <div className='movie-list'>
            <div className='title'>
                {MOVIE_CATEGORY[type]}
            </div>
            {results.length && results.map((currentResult) => {
                    return <Movie
                        title={currentResult.title}
                        image={`${IMG_BASE_URL}${currentResult.poster_path}`}
                        movieId={currentResult.id}
                        movieType={currentResult.genre_ids}
                        stars={currentResult.vote_average}
                    />
                }
            )}
        </div>
    )
};

export default MovieList;
