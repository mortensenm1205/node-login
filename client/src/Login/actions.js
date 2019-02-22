import axios from 'axios';
import { setAuthToken } from '../config/setAuthToken';
import { userError } from '../User/actions';

export const loginUser = (loginObj, history) => dispatch => {
    axios.post('/user/login', loginObj)
        .then(res => {
            const { token } = res.data;
            // Saving to localStorage for later use.
            localStorage.setItem('jwt', token);
            setAuthToken(token);
            history.push('/');
        })
        .catch(e => dispatch(userError(e.response.data.e)))
}