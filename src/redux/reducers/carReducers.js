const carState = {
    allCar : [],
    detailCar : {},
    message : "",
}

export const carReducers = (state = carState, action) => {
    switch (action.type) {
        case "GET_ALL_CARS":
            return {
                ...carState,
                allCar: action.payload
            }
        case "FILLTER":
            return {
                ...carState,
                allCar: action.payload
            }
        case "DETAIL_CAR":
            return{
                ...carState,
                detailCar: action.payload
            }
        case "ADD_CAR":
            return {
                ...carState,
                message: action.payload
            }
        case "DELETE":
            return{
                ...carState,
                message: action.payload,
            }
        case "EDIT_CAR":
            return {
                ...carState,
                message: action.payload,
            }
        default:
            return state
    }
}