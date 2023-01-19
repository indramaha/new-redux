import axios from "axios"
import { API } from "../../cons/endPoint"

export const listCar = (config) => dispatch => {
    axios
        .get(API.LIST_CAR, config)
        .then((ress) => {
            // console.log(ress.data.cars)
            dispatch({
                type: "LISTCAR",
                payload: ress.data.cars
            })
        })
        .catch((err) => console.log(err.message))
}