export const START_MOVIE_REQUEST = 'START_MOVIE_REQUEST'
export const MOVIE_REQUEST_SUCCEDDED = 'MOVIE_REQUEST_SUCCEDDED'
export const MOVIE_REQUEST_FAILED = 'MOVIE_REQUEST_FAILED'

const requestMovie = (movieId) => dispatch => {
	return dispatch({
		type : START_MOVIE_REQUEST,
		movieId
	})
}

const receiveMovie = (movieInfo) => dispatch => {
	return dispatch({
		type: MOVIE_REQUEST_SUCCEDDED,
		payload: movieInfo
	})
}

export function fetchMovie(movieId) {
  return function(dispatch) {
    dispatch(requestMovie(movieId))
    return fetch(`https://www.reddit.com/r/${movieId}.json`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveMovie(json))
      )
  }
}