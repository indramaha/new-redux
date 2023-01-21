const listCarState = {
    allCar : []
}

export const listCarReducers = (state = listCarState, action) => {
    switch (action.type) {
        case "LISTCAR":
            return {
                ...listCarState,
                allCar: action.payload
            }
        case "FILLTER":
            return {
                ...listCarState,
                allCar: action.payload
            }
        default:
            return state
    }
}