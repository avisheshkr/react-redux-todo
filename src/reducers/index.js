import { combineReducers } from "redux";
import todoReducers from "./todoRed";

const rootReducer = combineReducers({ todoReducers });

export default rootReducer;
