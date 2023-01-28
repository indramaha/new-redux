const carState = {
    allCar : [],
    detailCar : {},
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
        default:
            return state
    }
}