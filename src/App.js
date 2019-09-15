import React from 'react';
import {Route, Switch, withRouter} from "react-router";

import TopNav from './components/Navigation/TopNav/TopNav';
import Controlcontiner from './containers/Controlcontainer';

import './App.css';

function App() {
  return (
    <div className="App">
        <TopNav/>
        <Controlcontiner/>
    </div>
  );
}

export default App;
