import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import configureStore from './store';
import './scss/_index.css';
import App from './app';
import Details from './screens/details';

ReactDOM.render(
	<Provider store={configureStore()}>
		<Router>
			<Switch>
				<Route path="/movie/:ID" component={Details}/>
				<Route path="/" component={App}/>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById	('root')
);