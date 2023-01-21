// import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { listCar } from "../redux/actions/listCarAction";
import { useDispatch, useSelector } from "react-redux";
import "./CarList.css"
import { handleFillter } from "../redux/actions/fillterAction";
import { handleDelete } from "../redux/actions/deleteAction";

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

    const handleAllCar = () => {
        const category = ""
        dispatch(handleFillter(category))
    }

    const handleSFillter = () => {
        const category = "small"
        dispatch(handleFillter(category))
    }

    const handleMFillter = () => {
        const category = "Medium"
        dispatch(handleFillter(category))
    }

    const handleLFillter = () => {
        const category = "large"
        dispatch(handleFillter(category))
    }

    const handleDeletes = (id) => {
        dispatch(handleDelete(id))
    }

    const {allCar, deletes } = useSelector((rootReducers) => rootReducers)
    console.log(deletes)
    return (  
        <div>
            <Navbar />
            <div>
                <button>Add Car</button>
            </div>
            <div>
                <div>
                    <button onClick={handleAllCar}>all</button>
                </div>
                <div>
                    <button onClick={handleSFillter}>2 - 4 people</button>
                </div>
                <div>
                    <button onClick={handleMFillter}>4 - 6 people</button>
                </div>
                <div>
                    <button onClick={handleLFillter}>6 - 8 people</button>
                </div>
            </div>
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
                                        <button onClick={() => handleDeletes(item.id)}>delete</button>
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