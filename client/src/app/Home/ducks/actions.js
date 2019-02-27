import { setAuthToken } from '../../../config/setAuthToken';

export const logoutUser = history => dispatch => {
    localStorage.removeItem('jwt');
    setAuthToken(false);
    history.push('/login');
}