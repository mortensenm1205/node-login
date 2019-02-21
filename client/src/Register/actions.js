import axios from 'axios';
import { userError } from '../config/genActions'; 

export const createNewUser = (new_user, history) => {
    const { email, password } = new_user;
    return dispatch => {
        axios.post('/user/create', { email, password})
            // My error handling is done via the server
            .then(res => {
                const { user } = res.data;
                console.log(user);
                // Saving to localStorage for later use.
                localStorage.setItem('jwt', 'Bearer ' + user.token)
                history.push('/');
            })
            .catch(e => dispatch(userError(e.response.data.e)))
    }
}