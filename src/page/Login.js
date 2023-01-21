import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Register.css"
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions/loginAction";
import { Link, useNavigate } from "react-router-dom";
import { handleLogout } from "../redux/actions/logoutAction";
import rootReducers from "../redux/reducers";

const Login = () => {
    const state = useSelector(rootReducers => rootReducers)
    console.log(state)

    const [email, setEmail] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState("")
    const handlePassword = (e) => { 
        setPassword(e.target.value)
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = () => {
        const payLoad = {
            email: email,
            password: password
        }

        dispatch(loginAction(payLoad))
    }

    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null){
            setIsLogin(false)
        } else {
            setIsLogin(true)
        }
    },[])

    const handleRedirect = () => {
        setTimeout(() => {
            if (state.auth.message === true){
                navigate("/")
            }
            dispatch({
                type: "BERHASIL",
                payload: false,
            })
        }, 1000);
    }

    useEffect(() => {
        handleRedirect()
    },[state.auth.message])

    const handleLogOut = () => {
        dispatch(handleLogout())
    }
    return (  
        <div>
            <Navbar />
            <div>
                {
                    isLogin ? (
                        <div className="register-section">
                            <button onClick={handleLogOut}>Log Out</button>
                        </div>
                    ):(
                        <div className="register-section">
                            <div>
                                <h1>Login Admin</h1>
                            </div>
                            <div className='register-input-bg'>
                                <input onChange={handleEmail} placeholder='email'type='email' className='register-input'/>
                                <input onChange={handlePassword} placeholder='password' type='password' className='register-input'/>
                            </div>
                            <div className='register-button-bg'>
                                <button onClick={handleLogin} className='register-button'>login</button>
                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                <Link to="/list-car">
                    <button>List Car</button>
                </Link>
            </div>
            {
                isLogin ? <h1>Selamat datang di Ind****** selamat belanja</h1>: <p>silahkan login</p>
            }
        </div>
    );
}
 
export default Login;