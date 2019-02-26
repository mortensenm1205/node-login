import axios from 'axios';
import { setAuthToken } from '../../config/setAuthToken';
import { userError } from '../../User/actions'; 

export const createNewUser = (new_user, history) => dispatch => {
    axios.post('/user/create', new_user)
        // My error handling is done via the server
        .then(res => {
            const { token } = res.data; 
            // Saving to localStorage for later use.
            localStorage.setItem('jwt', token);
            setAuthToken(token);
            history.push('/');
        })
        .catch(e => dispatch(userError(e.response.data.e)))
}
