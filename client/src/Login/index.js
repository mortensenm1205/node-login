import React from 'react';

const LoginContainer = props => {
    return (
        <form>
            <input type="text" name="email" />
            <input type="text" name="password" />
            <button>Login</button>
        </form>        
    )
}


export default LoginContainer;