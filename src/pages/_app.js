import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import initializeStore from '../redux/store';
import withRedux from "next-redux-wrapper";
import { SET_LOCALE } from '../redux/constants';

class MyApp extends App {

    static async getInitialProps({Component,ctx}){
        ctx.store.dispatch({
            type: SET_LOCALE,
            payload: "th"
        });

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {pageProps};
    }

    render(){
        const {Component, pageProps, store} = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        )
    }
}

export default withRedux(initializeStore)(MyApp);