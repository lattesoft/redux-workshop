import React from 'react';
import { combineReducers } from 'redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CounterComponent from '../components/CounterComponent';

const counterInit = {
    total: 0
}

const counterReducer = (state = counterInit, action) => {
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

const store = createStore(combineReducers({counterReducer}));


class AppContainer extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <CounterComponent/>
            </Provider>
        );
    }
}

export default AppContainer;