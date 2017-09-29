import { combineReducers } from 'redux';
import cityReducer from '../components/city/cityReducer.js';

const rootReducer = combineReducers({
// add reducers
  city : cityReducer
});

export default rootReducer;
