import axios from 'axios';
import { userError } from '../config/genActions'; 

export const createNewUser = (new_user, history) => dispatch => {
    axios.post('/user/create', new_user)
        // My error handling is done via the server
        .then(res => {
            // Saving to localStorage for later use.
            localStorage.setItem('jwt', 'Bearer ' + res.data.user.token)
            history.push('/');
        })
        .catch(e => dispatch(userError(e.response.data.e)))
}
