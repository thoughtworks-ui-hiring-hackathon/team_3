const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

const MOVIE_CATEGORY = {
    LATEST: 'LATEST',
    TRENDING: 'TRENDING'
}

const MOVIE_CATEGORY_STRING = {
    LATEST: 'Latest',
    TRENDING: 'Trending'
}

const MOVIE_CATEGORY_URL = {
    LATEST: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&include_adult=false&api_key=',
    TRENDING: 'https://api.themoviedb.org/3/trending/movie/week?api_key='
}

export {
    IMG_BASE_URL,
    MOVIE_CATEGORY,
    MOVIE_CATEGORY_STRING,
    MOVIE_CATEGORY_URL
};