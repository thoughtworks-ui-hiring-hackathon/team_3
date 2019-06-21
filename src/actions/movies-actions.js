import axios from 'axios';
import { API_KEY } from '../config/api-keys';
import { MOVIE_CATEGORY_URL, MOVIE_CATEGORY } from '../consts';

export const SET_MOBILE_TYPE_RESPONSE = 'SET_MOBILE_TYPE_RESPONSE';

const setMobileResponse = (response, type) => dispatch => {
  return dispatch({
    type: SET_MOBILE_TYPE_RESPONSE,
    payload: {
      [type]: response
    }
  });
};

export const getMoviesByType = type => {
  return dispatch => {
    const url = MOVIE_CATEGORY_URL[type];
    return axios.get(`${url}${API_KEY}`).then(response => {
      dispatch(setMobileResponse(response.data, MOVIE_CATEGORY[type]));
    });
  };
};
