import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CounterComponent from '../components/CounterComponent';
import reducer from '../reducers';


const store = createStore(reducer);


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