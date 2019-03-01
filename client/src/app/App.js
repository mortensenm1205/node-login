import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { App, Form } from './css';
 
import Home from './Home';
import Register from './Register';
import Login from './Login';

class AppContainer extends Component {
  render() {
    return (
      <App>
        <Switch>
          <Route exact path='/' component={ Home } />
          {/* Using the stateless comp here, noticed i don't have a path prop. This is due to the stateless component containing the routes within. */}
          <Route component={ FormComps } />
        </Switch>
      </App>
    )
  }
}

/*
  Grouping this routes into a stateless component
  so that i may apply common style attributes between
  the two routed components with affecting the Switch comp.
*/
const FormComps = () => {
  return (
    <Form>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Form>
  )
}

export default AppContainer;
