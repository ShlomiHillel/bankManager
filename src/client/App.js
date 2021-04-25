import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import PageNotFound from './Pages/PageNotFound'

import './App.css';


function App () {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
      <Route exact path='/'  component={ HomePage }/>
      {/* --------------default--------------------------------------------------- */}
      <Route component={ PageNotFound }/>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
