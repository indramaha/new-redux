import axios from "axios"

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
        })
        .catch((err) => console.log(err.message))
}