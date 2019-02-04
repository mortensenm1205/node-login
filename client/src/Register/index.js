import React, { Component } from 'react';

class RegisterContainer extends Component {
    render() {
        return(
            <form>
                <input type="text" name="email" value="" />
                <input type="text" name="password" value="" />
                <button>Register</button>
            </form>
        )
    }
}

export default RegisterContainer;