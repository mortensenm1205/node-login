import React, { Component } from 'react';

class RegisterContainer extends Component {
    render() {
        const { change, submit, value } = this.props;
        return(
            <form onSubmit={submit}>
                <input type="text" name="email" onChange={change} value={value.email} />
                <input type="text" name="password" onChange={change} value={value.password} />
                <button>Register</button>
            </form>
        )
    }
}

export default RegisterContainer;