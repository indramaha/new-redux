import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Register.css"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { regisAction } from "../redux/actions/regisAction";

const Register = () => {
    const state = useSelector(rootReducers => rootReducers)
    // console.log(state)

    const [email, setEmail] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState("")
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const dispatch = useDispatch()

    const handleRegis = () => {
        const payload = {
            email : email,
            password : password,
            role : "Admin",
        }

        dispatch(regisAction(payload))
        // console.log(payload)
    }

    // console.log(state)
    return (  
        <div>
            <Navbar />
            <h1>Register</h1>
            <div>
                {
                    state.regis.message.length ? (
                        alert(state.regis.message)
                    ):(null)
                }
                <div className="register-section">
                    <div>
                        <h1>Register Admin</h1>
                    </div>
                    <div className='register-input-bg'>
                        <input onChange={handleEmail} placeholder='email'type='email' className='register-input'/>
                        <input onChange={handlePassword} placeholder='password' type='password' className='register-input'/>
                    </div>
                    <div className='register-button-bg'>
                        <button onClick={handleRegis} className='register-button'>register</button>
                    </div>
                </div>
            </div>
            <div className="register-login-bg">
                <div>
                    <p>sudah punya akun?</p>
                </div>
                <div>
                    <Link to={"/login"}>
                        <p>Silahkan login!</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Register;