import axios from "axios"
import { API } from "../../cons/endPoint"

export const listCar = (config) => dispatch => {
    axios
        .get(API.LIST_CAR, config)
        .then((ress) => {
            // console.log(ress)
            dispatch({
                type: "GET_ALL_CARS",
                payload: ress.data.cars
            })
        })
        .catch((err) => console.log(err.message))
}

export const detailCar = (id) => dispatch => {
    const token = localStorage.getItem("token")
    const config = {
        headers : {
            access_token: token,
        },
    }
    axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
        .then((ress) => {
            // console.log(ress)
            dispatch({
                type: "DETAIL_CAR",
                payload: ress.data,
            })
        })
        .catch((err) => {
            console.log(err)
        })
}