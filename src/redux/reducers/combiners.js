import { combineReducers } from "redux";
import {Shortenreducers} from './ShortenReducers'
import { loginReducer } from "./LoginReducer";


export const totalReducers = combineReducers({
  Shortenreducers,
  loginReducer
})