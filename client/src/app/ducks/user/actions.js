import axios from 'axios';

export const userSuccess = data => {
    return {
        type: "USER_SUCCESS",
        isAuth: false,
        data
    }
}

export const userError = data => {
    return {
        type: "USER_ERROR",
        isError: false,
        data
    }
}

export const userData = () => dispatch => {
    axios.get('/user/')
        .then(res => dispatch(userSuccess(res.data)))
        .catch(e => console.error(e))
}