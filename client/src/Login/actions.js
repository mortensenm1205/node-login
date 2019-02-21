import axios from 'axios';
import { userError } from '../config/genActions';

export const loginUser = loginObj => dispatch => {
    axios.post('/user/login', loginObj)
        .then(res => console.log(res.data))
        .catch(e => dispatch(userError(e.response.data.e)))
}