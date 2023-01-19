import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Register.css"
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/actions/loginAction";

const Login = () => {
    const [email, setEmail] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState("")
    const handlePassword = (e) => { 
        setPassword(e.target.value)
    }

    const dispatch = useDispatch()

    const handleLogin = () => {
        const payLoad = {
            email: email,
            password: password
        }

        dispatch(loginAction(payLoad))

        // axios
        //     .post("https://bootcamp-rent-cars.herokuapp.com/admin/auth/login", payLoad)
        //     .then((ress) => {
        //         console.log(ress)
        //         localStorage.setItem("token", ress.data.access_token);
        //         navigate("/discovery")
        //     })
        //     .catch((err) => console.log(err.message))
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

    const handleLogOut = () => {
        localStorage.removeItem("token")
        window.location.reload(false)
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
            {
                isLogin ? <h1>Selamat datang di Ind****** selamat belanja</h1>: <p>silahkan login</p>
            }
        </div>
    );
}
 
export default Login;