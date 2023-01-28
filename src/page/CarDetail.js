import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { handleDetailCar } from "../redux/actions/carAction";
import { useEffect } from "react";
import {FiArrowLeft} from "react-icons/fi"
import "./CarDetail.css"

const CarDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()

    const state = useSelector((rootReducers) => rootReducers)
    console.log(state.car.detailCar)
    const detailData = state.car.detailCar

    const getDetailCar = () => {
        dispatch(handleDetailCar(id))
    }

    useEffect(() => {
        getDetailCar()
        // eslint-disable-next-line
    },[])

    return (  
        <div>
            <h1>Car Detail</h1>
            {
                Object.entries(detailData).length ? (
                    <div className="cardetail-section-bg">
                        <div className="cardetail-section">
                            <div>
                                <img src={detailData.image} alt={detailData.name} />
                            </div>
                            <div>
                                <p>ini adalah mobil <b>{detailData.name}</b></p>
                            </div>
                            <div>
                                <p> harganya {detailData.price}</p>
                            </div>
                            <div>
                                <Link to={"/list-car"} >
                                    <FiArrowLeft size={24}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                ):(null)
            }
        </div>
    );
}
 
export default CarDetail;