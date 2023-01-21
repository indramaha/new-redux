export const handleLogout = () => dispatch => {
    localStorage.removeItem("token")
    window.location.reload(false)
    dispatch({
        type: "LOGOUT",
        payload: false
    })
}