import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './scss/style.scss';

import Header from './components/Header';

import Home from './screens/home';
import Details from './screens/details';
import ActorDetails from './screens/actor';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/movie/:ID" component={Details}/>
                    <Route path="/actor/:ID" component={ActorDetails}/>
                </Switch>
            </Router>
        </div>
    );
};
export default App;
