import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendNewUser } from './Register/actions';

class RegisterContainer extends Component {

    state = {
        registerData: {
            // Including the specific field names did help with reseting. 
            email: '',
            password: ''
        },
        errors: {}
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
        // Since user shares success and error data. 
        // I needed to write a condition that checks to see if the 
        // error object is there. 
        // if (error.hasOwnProperty('isError')) {
        //     var passwordError = error.data.code === 'password' ? <p>{error.data.message}</p> : null;
        //     var emailError = error.data.code === 'email' ? <p>{error.data.message}</p> : null;
        // }
        const { email, password } = this.state;
        return(
            <div>
                <form onSubmit={this.submit}>
                    <input type="text" name="email" onChange={this.change} value={email} />
                    <input type="text" name="password" onChange={this.change} value={password} />
                    <button>Register</button>
                </form>
                <div>
                    {/* {passwordError}
                    {emailError} */}
                    {console.log(this.props.user)}
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.user,
        errors: state.errors
    }
};

const mapDispatchToProps = dispatch => {
    return {
        sendUser: user => dispatch(sendNewUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);