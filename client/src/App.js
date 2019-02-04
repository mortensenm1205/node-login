import React, { Component } from 'react';
import Register from './Register';

class App extends Component {

  state = {
    registerData: {}
  }

  change = e => {
    const { registerData } = this.state;
    let objToSend = { [e.target.name]: e.target.value };
    this.setState({ registerData: { ...registerData, ...objToSend } })
  }

  submit = e => {
    const { registerData } = this.state;
    e.preventDefault();
    e.target.reset();
    console.log(registerData);
  }

  render() {
    return (
      <div>
        <Register change={this.change} submit={this.submit} />
      </div>
    )
  }
}

export default App;
