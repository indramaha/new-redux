import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleEditCar } from "../redux/actions/carAction"
import { useNavigate, useParams } from "react-router-dom"

const EditCar = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState("")
    const state = useSelector((rootReducers) => rootReducers)
    console.log(state)

    const dispatch = useDispatch()
    const {id} = useParams()
    const navigate = useNavigate()

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const onHandleEditCar = () => {
        const formData = new FormData();
        formData.append("name",name)
        formData.append("category",category)
        formData.append("price",price)
        formData.append("image",image)

        dispatch(handleEditCar(id, formData))
    }

    const handleRedirect = () => {
        setTimeout(() => {
            if(state.car.message === "OK"){
                navigate("/list-car")
            }
        }, 1000);
    }

    useEffect(() => {
        if(state.car.message !== ""){
            alert(state.car.message)
        }
        handleRedirect()
        // eslint-disable-next-line
    }, [state.car.message])
    return (  
        <div>
            <div>
                <div>
                    <p>Edit Car</p>
                </div>
                <div>
                    <div>
                        <div>
                            <p>Nama/Tipe Mobil*</p>
                        </div>
                        <div>
                            <input onChange={handleName} type="text"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Harga*</p>
                        </div>
                        <div>
                            <input onChange={handlePrice} type="number"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Foto*</p>
                        </div>
                        <div>
                            <input onChange={handleImage} type="file"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Kategori*</p>
                        </div>
                        <div>
                            <select onChange={handleCategory}>
                                <option value="small">
                                    2- 4 orang
                                </option>
                                <option value="Medium">
                                    4 -6 orang
                                </option>
                                <option value="large">
                                    6-8 orang
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button onClick={onHandleEditCar}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EditCar;