export const userData = (state = {}, action) => {
    switch(action.type) {
        case "SEND_NEW_USER_SUCCESS": 
            return {
                ...state,
                ...action.data
            }
        case "SEND_NEW_USER_ERROR":
            return {
                isError: !(action.isError),
                data: action.data
            }
        default:
            return state;
    }
}