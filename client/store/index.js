import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import user from './user

const reducer = combineReducers({user})
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store

export * from './user'
