import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './app/Home';
import Register from './app/Register';
import Login from './app/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/register' component={ Register } />
          <Route path='/login' component={ Login } />
        </Switch>
      </div>
    )
  }
}

export default App;
