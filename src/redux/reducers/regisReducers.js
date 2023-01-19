const regisState = {
    message:"",
}

const regisReducer = (state = regisState, action) => {
    switch (action.type) {
        case "REGISTER":
            return{
                ...regisState,
                message: action.payload
            }
    
        default:
            return state
    }
}

export default regisReducer