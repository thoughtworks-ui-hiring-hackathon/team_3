import React from 'react';
import {IMG_BASE_URL} from '../consts';
import Movie from './Movie';
import {MOVIE_CATEGORY_STRING} from '../consts';
import isEmpty from 'lodash';

class MovieList extends React.Component {
    componentDidMount() {
        const {type, movieType = {}, getMovieByType} = this.props;
        if (!movieType[type]) {
            getMovieByType(type);
        }
    }

    render () {
        const {type, movieType = {}}= this.props;

        const response = movieType[type] || {};

        if (isEmpty(response)) {
            return null;
        }
        const {results}= response;
        return (
            <div className='movie-list'>
                <div className='title'>
                    {MOVIE_CATEGORY_STRING[type]}
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
    }
};

export default MovieList;
