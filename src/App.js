import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// Styles
import 'bootstrap/dist/css/bootstrap.css';

import './scss/style.scss';


import Home from './screens/home';
import Details from './screens/details';

const App = () => {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/movie/:ID" component={Details}/>
				</Switch>
			</Router>
		</div>
	);
}
export default App;
