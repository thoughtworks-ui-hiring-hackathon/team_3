import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import configureStore from './store';
import './scss/_index.css';
import App from './app';
import Movie from './screens/movie';

ReactDOM.render(
	<Provider store={configureStore()}>
		<Router>
			<Route path="/" component={App}/>
			<Route path="/movie/:ID" component={Movie}/>
		</Router>
	</Provider>,
	document.getElementById('root')
);