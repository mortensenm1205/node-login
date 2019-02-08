import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendNewUser } from './Register/actions';
import Register from './Register';
import Login from './Login';

class App extends Component {

  state = {
    registerData: {
      // Including the specific field names did help with reseting. 
      email: '',
      password: ''
    }
  }

  change = e => {
    const { registerData } = this.state;
    let objToSend = { ...registerData, [e.target.name]: e.target.value };
    this.setState({ registerData: objToSend })
  }

  submit = e => {
    const { registerData } = this.state;
    const { sendUser } = this.props;
    e.preventDefault();
    // Need to clear the field values once user hits the submit btn
    this.setState({ registerData: { email: '', password: '' } })
    sendUser(registerData);
  }

  render() {
    const { registerData } = this.state;
    const { user } = this.props;
    return (
      <div>
        <Switch>
          <Route path='/register' render={
            rest => {
              return ( 
                <Register 
                  change={this.change} 
                  submit={this.submit} 
                  value={registerData} 
                  /* Since my reducer for user contains success and errors i have to pass in user as an error prop */
                  error={user} 
                  {...rest}
                />
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

const mapStateToProps = state => {
  return {
    user: state.userData
  }
};

const mapDispatchToProps = dispatch => {
  return {
    sendUser: user => dispatch(sendNewUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
