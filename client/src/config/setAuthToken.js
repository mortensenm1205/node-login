import axios from 'axios';

export const setAuthToken = token => {
    if(token) {
        // This is creating a header called 'Authorization' 
        // that will be avaiable for all http request and 
        // setting it to our token. 
        // Here's something, this won't show up in our Headers req/res
        // within Chrome, so we won't actually know if this wont' through
        // the only way i tested it is accessing a private server route 
        // and seeing if i got a response.
        axios.defaults.headers.common['Authorization'] = token;
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

