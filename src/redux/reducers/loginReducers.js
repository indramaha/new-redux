const loginState = {
    message: "",
}

export const loginReducers = (state = loginState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...loginState,
                message: action.payload
            }
            
        default:
            return state;
    }
}