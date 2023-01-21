const deleteState = {
    message: "",
}

export const deleteReducer = (state = deleteState, action) => {
    switch (action.type) {
        case "DELETE":
            return{
                ...deleteState,
                message: action.payload,
            }
        default:
            return state
    }
}