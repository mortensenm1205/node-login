import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import Register from './Register';
import Login from './Login';
import { userData } from './User/actions';

class App extends Component {

  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }

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

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDistpachToProps = dispatch => {
  return {
    getUser: () => dispatch(userData())
  }
}

export default connect(mapStateToProps, mapDistpachToProps)(App);
