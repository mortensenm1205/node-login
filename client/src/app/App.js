import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Form } from './css';
 
import Home from './Home';
import Register from './Register';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ Home } />
          {/* Using the stateless comp here, noticed i don't have a path prop. This is due to the stateless component containing the routes within. */}
          <Route component={ FormComps } />
        </Switch>
      </div>
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

export default App;
