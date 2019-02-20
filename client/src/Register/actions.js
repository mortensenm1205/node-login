import axios from 'axios';

export const sendNewUserSuccess = data => {
    return {
        type: "SEND_NEW_USER_SUCCESS", 
        isAuth: false,
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

export const sendNewUser = (new_user, history) => {
    const { email, password } = new_user;
    return dispatch => {
        axios.post('/user/create', { email, password})
            // My error handling is done via the server
            .then(res => {
                const { user } = res.data;
                console.log(user);
                // Saving to localStorage for later use.
                localStorage.setItem('jwt', 'Bearer ' + user.token)
                dispatch(sendNewUserSuccess(user));
                history.push('/');
            })
            .catch(e => dispatch(sendNewUserError(e.response.data.e)))
    }
}