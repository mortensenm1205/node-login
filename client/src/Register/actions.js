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
        isError: false,
        data
    }
}

export const sendNewUser = new_user => {
    const { email, password } = new_user;
    return dispatch => {
        axios.post('/user/create', { email, password})
            // My error handling is done via the server
            .then(res => dispatch(sendNewUserSuccess(res.data.user)))
            .catch(e => dispatch(sendNewUserError(e.response.data.e)))
    }
}