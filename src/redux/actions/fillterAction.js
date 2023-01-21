import axios from "axios"

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