import { isEmpty } from '../../../config/isEmpty';

export const userData = (state = {}, action) => {
    switch(action.type) {
        case "USER_SUCCESS": 
            return {
                ...state,
                isAuth: !isEmpty(action.data),
                data: action.data
            }
        default:
            return state;
    }
}

export const userErrorData = (state = {}, action) => {
    switch (action.type) {
        // I don't have to return state or bring in previous state
        // because i'm trying to keep these seperate. 
        case "USER_ERROR":
            return {
                isError: !(action.isError),
                data: action.data
            }
        default:
            return state;
    }
}