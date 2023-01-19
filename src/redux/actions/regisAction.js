import axios from "axios"

export const regisAction = (payload) => dispatch => {
    axios
        .post("https://bootcamp-rent-cars.herokuapp.com/admin/auth/register", payload)
        .then((ress) => {
            dispatch({
                type:"REGISTER",
                payload: ress.statusText,
            })
            console.log(ress)
        })
        .catch((err) => console.log(err.message))
}