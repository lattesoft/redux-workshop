import React from 'react';
import { Provider } from 'react-redux'
import store from '../redux/store';

class AppContainer extends React.Component {
    render(){
        const { Component, pageProps, reduxStore } = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} /> 
            </Provider>
        );
    }
}

export default AppContainer;