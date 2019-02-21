export const userSuccess = data => {
    return {
        type: "USER_SUCCESS",
        isAuth: false,
        data
    }
}

export const userError = data => {
    return {
        type: "USER_ERROR",
        isError: false,
        data
    }
}