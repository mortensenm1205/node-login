import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from './ducks/actions';

class LoginContainer extends Component {

    state = {
        loginData: {
            // Including the specific field names did help with reseting. 
            email: '',
            password: ''
        },
        errors: {}
    }

    // This is to help set errors from props onto state, 
    // without relying solely on a conditional render like before.
    // Using lc methods and conditions is best practice to set props
    // to state.
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.errors !== prevState.errors) {
            return { errors: nextProps.errors }
        }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.errors !== this.state.errors) {
            this.setState({ errors: prevProps.errors })
        }
    }

    change = e => {
        const { loginData } = this.state;
        let objToSend = { ...loginData, [e.target.name]: e.target.value };
        this.setState({ loginData: objToSend })
    }

    submit = e => {
        const { loginData } = this.state;
        const { login, history } = this.props;
        e.preventDefault();
        // Need to clear the field values once user hits the submit btn
        this.setState({ loginData: { email: '', password: '' } })
        login(loginData, history);
    }

    render() {
        const { errors, loginData } = this.state;
        const { email, password } = loginData;
        return (
            <div>
                <p>Log in</p>
                <form onSubmit={this.submit}>
                    <input type="text" name="email" onChange={this.change} value={email} placeholder="Email" />
                    <input type="password" name="password" onChange={this.change} value={password} placeholder="Password" />
                    <button>Login</button>
                </form> 
                <div>
                    {errors.data && errors.data.code === "blankEmail" && <div>{errors.data.message}</div>}
                    {errors.data && errors.data.code === "blankPassword" && <div>{errors.data.message}</div>}
                    {errors.data && errors.data.code === "noFoundUser" && <div>{errors.data.message}</div>}
                    {errors.data && errors.data.code === "wrongPassword" && <div>{errors.data.message}</div>}
                </div>
                <p>Don't have an account? <Link to='/register'>Register</Link></p>
            </div>       
        )
    }
}


const mapStateToProps = state => {
    return {
        errors: state.errors
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: (user, history) => dispatch(loginUser(user, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);