import axios from 'axios';
import {API_KEY} from '../config/api-keys';
import {URL} from "../consts";

export const SET_ACTOR_DETAILS = 'SET_MOBILE_TYPE_RESPONSE';
export const SET_ACTOR_FILMOGRAPHY = 'SET_ACTOR_FILMOGRAPHY';

const setActorDetails = (data) => dispatch => {
    return dispatch ({
        type: SET_ACTOR_DETAILS,
        payload: data,
    })
}

export const getActorDetails = (type) => {
    return (dispatch) => {
        const url = URL.ACTOR_DETAILS;
        return axios.get(`${url}${API_KEY}`)
            .then((response) => {
                dispatch(setActorDetails(response.data))
            })
    }
}

const setActorFilmography = (data) => dispatch => {
    return dispatch ({
        type: SET_ACTOR_FILMOGRAPHY,
        payload: data,
    })
}

export const getActorFilmography = (type) => {
    return (dispatch) => {
        const url = URL.ACTOR_FILMOGRAPHY;
        return axios.get(`${url}${API_KEY}`)
            .then((response) => {
                dispatch(setActorFilmography(response.data))
            })
    }
}