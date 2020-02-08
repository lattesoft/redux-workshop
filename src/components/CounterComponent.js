import React from 'react';
import { connect } from 'react-redux';


class CounterComponent extends React.Component {
    render(){
        return (
        <div>
            Hello Word {this.props.counterReducer.total}
            <div><button onClick={this.props.addCount}>Click me!</button></div>
        </div>
        );
    }
}

const addCount = ()=>{
    return {
        type: "ADD_TODO",
    }
}

export default connect((store)=>{
    return {
        counterReducer: store.counterReducer
    }
},{addCount})(CounterComponent);