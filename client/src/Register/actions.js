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
            .catch(e => {
                const { errors } = e.response.data.e;
                const { email, password } = errors;
                if(email === undefined) {
                    dispatch(sendNewUserError(password.message))
                }

                if(password === undefined) {
                    dispatch(sendNewUserError(email.message))
                }
            })
            //Email is missing: e.response.data.e.errors.email.path
            //password is missing: e.response.data.e.errors.password.path
    }
}