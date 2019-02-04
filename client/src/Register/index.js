import React, { Component } from 'react';

class RegisterContainer extends Component {
    render() {
        const { change, submit } = this.props;
        return(
            <form onSubmit={submit}>
                <input type="text" name="email" onChange={change} />
                <input type="text" name="password" onChange={change} />
                <button>Register</button>
            </form>
        )
    }
}

export default RegisterContainer;