import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Register.css"
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions/authAction"; 
import { useNavigate } from "react-router-dom";

const Login = () => {
    const state = useSelector(rootReducers => rootReducers)
    console.log(state.auth.isLogin)

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

    const handleRedirect = () => {
        setTimeout(() => {
            if (state.auth.message === true){
                navigate("/")
            }
        }, 1000);
    }

    useEffect(() => {
        handleRedirect()
        // eslint-disable-next-line
    },[state.auth.message])

    return (  
        <div>
            <Navbar />
            <div>
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
            </div>
            <p>silahkan login</p>
        </div>
    );
}
 
export default Login;