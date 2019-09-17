import React from 'react';
import {Route, Switch, withRouter} from "react-router";

import IntroPage from './components/IntroPage/ItroPage';
import ControlContainer from './containers/Tasks';
import WelcomePage from './containers/WelcomePage/WelcomePage';

import './App.css';

function App() {
    return (
        <div className="App">
            {/*<TopNav/>*/}
            <Switch>
                <Route path='/dashboard' component={ControlContainer}/>
                <Route path='/welcomePage' exact  component={WelcomePage}/>
                <Route path='/' component={IntroPage}/>
            </Switch>
        </div>
    );
}

export default withRouter(App);
