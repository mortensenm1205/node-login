import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/register' render={
            rest => {
              return ( 
                <Register {...rest} />
              )
            }
          }/>
          <Route path='/login' render={
            rest => {
              return (
                <Login {...rest} />
              )
            }
          }/>
        </Switch>
      </div>
    )
  }
}

export default App;
