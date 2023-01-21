const authState = {
    message: false,
}

export const authReducers = (state = authState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...authState,
                message: action.payload
            }
        case "LOGOUT":
            return{
                ...authState,
                message: action.payload
            }
        case "BERHASIL":
            return{
                ...authState,
                message: action.payload
            }
        default:
            return state;
    }
}