import axios from "axios"
import { API } from "../../cons/endPoint"

export const loginAction = (payload) => dispatch => {
    axios
        .post(API.ADMIN_LOGIN, payload)
        .then((ress) => {
            dispatch({
                type: "LOGIN",
                payload: true
            })
            console.log(ress)
            localStorage.setItem("token", ress.data.access_token)
        })
        .catch((err) => console.log(err.message))
}