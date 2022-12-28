import { combineReducers } from "redux"; // npm i redux
import counterReducer from "./CounterReducers";

const reducers =  combineReducers({
    counter: counterReducer
})

export default reducers