import App from 'next/app';
import React from 'react';
import AppContainer from '../containers/AppContainer';

class MyApp extends App {
    render(){
        return (
            <AppContainer {...this.props}/>
        )
    }
}

export default MyApp;