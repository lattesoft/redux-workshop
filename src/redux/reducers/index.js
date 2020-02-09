import { combineReducers } from 'redux'
import counterReducer from './counterReducer';
import localeReducer from './localeReducer';
import userReducer from './userReducer';

export default combineReducers({counterReducer,localeReducer,userReducer});