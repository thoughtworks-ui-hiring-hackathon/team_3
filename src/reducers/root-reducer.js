import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'

import simpleReducer from './simple-reducer';
import movieReducer from './movie-reducer';
import movieTypeReducer from './movieType';

export default (history) => combineReducers({
  	router: connectRouter(history),
	simpleReducer,
	movieReducer,
	movieType: movieTypeReducer
})