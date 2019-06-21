import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import configureStore from './store';
import './scss/_index.css';
import App from './app';
import Details from './screens/details';

ReactDOM.render(
	<Provider store={configureStore()}>
		<Router>
			<Route path="/" component={App}/>
			<Route path="/movie/:ID" component={Details}/>
		</Router>
	</Provider>,
	document.getElementById('root')
);