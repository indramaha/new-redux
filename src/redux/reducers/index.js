import { combineReducers } from "redux";
import regisReducer from "./regisReducers";
import { authReducers } from "./authReducers";
import { carReducers } from "./carReducers";

const rootReducers = combineReducers({
    regis: regisReducer,
    auth: authReducers,
    car: carReducers,
})

export default rootReducers