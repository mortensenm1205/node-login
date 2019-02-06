import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendNewUser } from './Register/actions';
import Register from './Register';

class App extends Component {

  state = {
    registerData: {
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
    this.setState({ registerData: { email: '', password: '' } })
    sendUser(registerData);
  }

  render() {
    const { registerData } = this.state;
    return (
      <div>
        <Register change={this.change} submit={this.submit} value={registerData} />
        {console.log(this.props)}
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
