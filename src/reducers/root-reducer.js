import {combineReducers} from 'redux';
import simpleReducer from './simple-reducer';
import movieReducer from './movie-reducer';

export default combineReducers({
	simpleReducer,
	movieReducer
});