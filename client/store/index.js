import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import products from "./products";
import user from "./users";
import stores from "./storeLocation";
import press from "./press";

const reducer = combineReducers({ products, user, stores, press });
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;

export * from "./products";
export * from "./users";
export * from "./storeLocation";
export * from "./press";
