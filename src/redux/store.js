import { createStore,applyMiddleware } from 'redux'
import reducer from '../redux/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const store = (initialState) => {
    return createStore(reducer,initialState, composeWithDevTools(applyMiddleware(logger,thunk)));
}

export default store;