
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import { reducer } from "./products/Product.reducer";
import thunk from "redux-thunk";

// let rootReducer = combineReducers({})

export const store = legacy_createStore(reducer,applyMiddleware(thunk))