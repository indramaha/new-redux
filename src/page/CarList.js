// import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { listCar } from "../redux/actions/listCarAction";
import { useDispatch, useSelector } from "react-redux";
import "./CarList.css"

const CarList = () => {
    const dispatch = useDispatch()
    const getAllCar = () => {
        const token = localStorage.getItem("token")
        const config = {
            headers : {
                access_token: token,
            },
        }

        dispatch(listCar(config))
    }

    useEffect(() => {
        getAllCar()
        // eslint-disable-next-line
    },[])

    const {allCar} = useSelector(rootReducers => rootReducers)
    console.log(allCar.allCar)
    return (  
        <div>
            <Navbar />
            <div className="listcar-card-bg">
                {
                    !!allCar.allCar.length ? allCar.allCar.map((item, i) => {
                        return(
                            <div key={i} className="listcar-card">
                                <div className="listcar-image">
                                    <img src={item.image} alt="car"/>
                                </div>
                                <div>
                                    <p>{item.name}</p>
                                </div>
                                <div>
                                    <p>{item.price}</p>
                                </div>
                                <div>
                                    <p>{item.category}</p>
                                </div>
                                <div className="listcar-btn-bg">
                                    <div>
                                        <button>delete</button>
                                    </div>
                                    <div>
                                        <button>edit</button>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }):(<p>error</p>)
                }
            </div>
        </div>
    );
}
 
export default CarList;