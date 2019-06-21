import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'

import simpleReducer from './simple-reducer';
import movieReducer from './movie-reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
	simpleReducer,
	movieReducer
})