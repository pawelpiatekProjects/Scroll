import React from 'react';
import {Route, Switch, withRouter} from "react-router";

import TopNav from './components/Navigation/TopNav/TopNav';
import Controlcontiner from './containers/Controlcontainer';
import WelcomePage from './containers/WelcomePage/WelcomePage';

import './App.css';

function App() {
  return (
    <div className="App">
        <TopNav/>
        <Switch>

            <Route path='/dashboard'  component={Controlcontiner}/>
            <Route path='/welcomePage'  component={WelcomePage}/>
        </Switch>

        <Controlcontiner/>
    </div>
  );
}

export default withRouter(App);
