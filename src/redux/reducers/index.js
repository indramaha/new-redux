import { combineReducers } from "redux";
import regisReducer from "./regisReducers";
import { authReducers } from "./authReducers";
import { listCarReducers } from "./listCarReducers";
import { deleteReducer } from "./deleteCarReducers";

const rootReducers = combineReducers({
    regis: regisReducer,
    auth: authReducers,
    allCar: listCarReducers,
    deletes: deleteReducer,
})

export default rootReducers