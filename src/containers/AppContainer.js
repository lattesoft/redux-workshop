import React from 'react';
import { Provider } from 'react-redux'
import CounterComponent from '../components/CounterComponent';
import store from '../redux/store';

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