import { combineReducers } from "redux";
import regisReducer from "./regisReducers";
import { loginReducers } from "./loginReducers";
import { listCarReducers } from "./listCarReducers";

const rootReducers = combineReducers({
    regis: regisReducer,
    login: loginReducers,
    allCar: listCarReducers,
})

export default rootReducers