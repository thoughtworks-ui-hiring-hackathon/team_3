import axios from 'axios';
import {API_KEY} from '../config/api-keys';

export const SET_ACTOR_DETAILS = 'SET_MOBILE_TYPE_RESPONSE';
export const SET_ACTOR_FILMOGRAPHY = 'SET_ACTOR_FILMOGRAPHY';

const setActorDetails = (data) => dispatch => {
    return dispatch ({
        type: SET_ACTOR_DETAILS,
        payload: {
            actor: data
        },
    })
}

export const getActorDetails = (personId) => {
    return (dispatch) => {
        const url = `https://api.themoviedb.org/3/person/${personId}/?language=en-US&api_key=`;
        return axios.get(`${url}${API_KEY}`)
            .then((response) => {
                dispatch(setActorDetails(response.data))
            })
    }
}

const setActorFilmography = (data) => dispatch => {
    return dispatch ({
        type: SET_ACTOR_FILMOGRAPHY,
        payload: {
            filmography: data
        },
    })
}

export const getActorFilmography = (personId) => {
    return (dispatch) => {
        const url = `https://api.themoviedb.org/3/person/${personId}/movie_credits/?language=en-US&api_key=`;
        return axios.get(`${url}${API_KEY}`)
            .then((response) => {
                dispatch(setActorFilmography(response.data))
            })
    }
}