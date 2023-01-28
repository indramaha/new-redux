import { combineReducers } from "redux";
import regisReducer from "./regisReducers";
import { authReducers } from "./authReducers";
import { carReducers } from "./carReducers";
import { deleteReducer } from "./deleteCarReducers";

const rootReducers = combineReducers({
    regis: regisReducer,
    auth: authReducers,
    car: carReducers,
    deletes: deleteReducer,
})

export default rootReducers