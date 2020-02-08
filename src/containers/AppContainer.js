import React from 'react';
import { combineReducers } from 'redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CountComponent from '../components/CountComponent';

const totoInit = {
    total: 0
}

const todoReducer = (state = totoInit, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            console.log("Here in reducers");
            return {
                ...state,
                total: ++state.total
            }
        }
        
        default: return state
        
    }
}

const store = createStore(combineReducers({todoReducer}));


class AppContainer extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <CountComponent/>
            </Provider>
        );
    }
}

export default AppContainer;