import axios from 'axios';
import { userError } from '../config/genActions';

export const loginUser = (loginObj, history) => dispatch => {
    axios.post('/user/login', loginObj)
        .then(res => res.data.token ? history.push('/') : null)
        .catch(e => dispatch(userError(e.response.data.e)))
}