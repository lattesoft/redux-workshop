import { combineReducers } from 'redux'
import counterReducer from './counterReducer';
import localeReducer from './localeReducer';

export default combineReducers({counterReducer,localeReducer});