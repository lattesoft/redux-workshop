import React from 'react';
import { connect } from 'react-redux';
import { addCount } from '../redux/actions/countActions';
import {setLocale} from '../redux/actions/localeActions';

class CounterComponent extends React.Component {
    render(){
        return (
        <div>
            Hello Word {this.props.counterReducer.total}
            <div><button onClick={this.props.addCount}>Click me!</button></div>
            <div>
                Current Locale: {this.props.localeReducer.locale}
                <button onClick={e=>this.props.setLocale("en")}>EN</button>
                <button onClick={e=>this.props.setLocale("th")}>EN</button>
            </div>
        </div>
        );
    }
}

export default connect((store)=>{
    return {
        counterReducer: store.counterReducer,
        localeReducer: store.localeReducer
    }
},{addCount,setLocale})(CounterComponent);