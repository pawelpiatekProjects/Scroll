import React from 'react';
import {Route, Switch, withRouter} from "react-router";

import Controlcontiner from './containers/Controlcontainer';

import './App.css';

function App() {
  return (
    <div className="App">
        <Controlcontiner/>
    </div>
  );
}

export default App;
