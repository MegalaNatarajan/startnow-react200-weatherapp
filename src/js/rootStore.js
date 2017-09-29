import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compos
const rootStore = createStore(rootReducer, composeEnhancers(applyMiddleware(promiseMiddleware())));
//const rootStore = createStore(rootReducer,applyMiddleware(thunk));
export default rootStore;