import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/register' component={ Register } />
          <Route path='/login' component={ Login } />
        </Switch>
      </div>
    )
  }
}

export default App;
