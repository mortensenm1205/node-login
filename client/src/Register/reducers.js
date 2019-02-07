export const userData = (state = {}, action) => {
    switch(action.type) {
        case "SEND_NEW_USER_SUCCESS": 
            return {
                ...action.data
            }
        // I don't have to return state or bring in previous state
        // because i'm trying to keep these seperate. 
        case "SEND_NEW_USER_ERROR":
            return {
                isError: !(action.isError),
                data: action.data
            }
        default:
            return state;
    }
}