import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
    Register,
    RegisterTitle,
    RegisterForm,
    RegisterLabel,
    RegisterInput,
    RegisterErrorContainer,
    RegisterError,
    RegisterRedirect
 } from './css/';
import { createNewUser } from './ducks/actions';

class RegisterContainer extends Component {

    state = {
        registerData: {
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
        if (nextProps.errors.data !== prevState.errors) {
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
        const { registerData } = this.state;
        let objToSend = { ...registerData, [e.target.name]: e.target.value };
        this.setState({ registerData: objToSend })
    }

    submit = e => {
        const { registerData } = this.state;
        const { createUser, history } = this.props;
        e.preventDefault();
        // Need to clear the field values once user hits the submit btn
        this.setState({ registerData: { email: '', password: '' } })
        createUser(registerData, history);
    }

    render() {
        const { email, password } = this.state.registerData;
        const { errors } = this.state;
        return(
            <Register>
                <RegisterTitle>Create Account</RegisterTitle>
                <RegisterForm onSubmit={this.submit}>
                    <RegisterLabel>
                        Enter email:
                        <RegisterInput type="text" name="email" onChange={this.change} value={email} />
                    </RegisterLabel>
                    <RegisterLabel>
                        Create password:
                        <RegisterInput type="password" name="password" onChange={this.change} value={password} />
                    </RegisterLabel>
                    <button>Register</button>
                </RegisterForm>
                <RegisterErrorContainer>
                    {errors.data && errors.data.code === 'email' && <RegisterError>{errors.data.message}</RegisterError>}
                    {errors.data && errors.data.code === 'password' && <RegisterError>{errors.data.message}</RegisterError>}
                    {errors.data && errors.data.code === 'userExists' && <RegisterError>{errors.data.message}</RegisterError>}
                </RegisterErrorContainer>
                <RegisterRedirect>Already have an account? <Link to='/login'>Login</Link></RegisterRedirect>
            </Register>
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
        createUser: (user, history) => dispatch(createNewUser(user, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);