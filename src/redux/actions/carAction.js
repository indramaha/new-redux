import axios from "axios"
import { API } from "../../cons/endPoint"

export const handleListCar = (config) => dispatch => {
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

export const handleDetailCar = (id) => dispatch => {
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

export const handleFillter = (category) => dispatch => {
    const token = localStorage.getItem("token")
    const config = {
        headers : {
            access_token: token,
        },
    }
    axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=${category}`, config)
        .then((ress) => {
            // console.log(ress.data.cars)
            dispatch({
                type: "FILLTER",
                payload: ress.data.cars
            })
        })
        .catch((err) => console.log(err.message))
}

export const handleAddCar = (formData) => dispatch => {
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            access_token: token,
        },
    }
    axios
        .post(API.ADD_CAR,formData, config)
        .then((ress) => {
            console.log(ress)
            dispatch({
                type: "ADD_CAR",
                payload: ress.statusText,
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

export const handleEditCar = (id, formdata) => dispatch => {
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            access_token: token,
        },
    }
    axios
        .put(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, formdata, config)
        .then((ress) => {
            console.log(ress.statusText);
            dispatch({
                type: "EDIT_CAR",
                payload: ress.statusText,
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

export const handleDelete = (id) => dispatch => {
    const token = localStorage.getItem("token")
    const config = {
        headers : {
            access_token: token,
        },
    }
    axios
        .delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
        .then((ress) => {
            console.log(ress.data.name)
            dispatch({
                type: "DELETE",
                payload: ress.data.name,
            })
            alert(ress.data.name)
            handleListCar(config)
        })
        .catch((err) => console.log(err.message))
}