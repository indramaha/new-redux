import { combineReducers } from "redux";
import regisReducer from "./regisReducers";
import { loginReducers } from "./loginReducers";

const rootReducers = combineReducers({
    regis: regisReducer,
    login: loginReducers,
})

export default rootReducers