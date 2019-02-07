import React, { Component } from 'react';

class RegisterContainer extends Component {
    render() {
        const { change, submit, value, error } = this.props;
        // Since user shares success and error data. 
        // I needed to write a condition that checks to see if the 
        // error object is there. 
        if (error.hasOwnProperty('isError')) {
            var passwordError = error.data.code === 'password' ? <p>{error.data.message}</p> : null;
            var emailError = error.data.code === 'email' ? <p>{error.data.message}</p> : null;
        }
        return(
            <div>
                <form onSubmit={submit}>
                    <input type="text" name="email" onChange={change} value={value.email} />
                    <input type="text" name="password" onChange={change} value={value.password} />
                    <button>Register</button>
                </form>
                <div>
                    {passwordError}
                    {emailError}
                </div>
            </div>
        )
    }
}

export default RegisterContainer;