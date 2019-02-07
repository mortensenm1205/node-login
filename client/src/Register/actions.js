import axios from 'axios';

export const sendNewUserSuccess = data => {
    return {
        type: "SEND_NEW_USER_SUCCESS", 
        data
    }
}

export const sendNewUserError = data => {
    return {
        type: "SEND_NEW_USER_ERROR",
        data
    }
}

export const sendNewUser = new_user => {
    const { email, password } = new_user;
    return dispatch => {
        axios.post('/user/create', { email, password})
            .then(res => dispatch(sendNewUserSuccess(res.data.user)))
            .catch(e => console.log(e.response))
            //Email is missing: e.response.data.e.errors.email.path
            //password is missing: e.response.data.e.errors.password.path
    }
}