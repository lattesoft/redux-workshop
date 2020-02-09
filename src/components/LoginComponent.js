import React from 'react'
import {connect} from 'react-redux';
import {login} from '../redux/actions/userActions';

class LoginComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }

        this.__inputHandler = this.__inputHandler.bind(this);
        this.__submitHander = this.__submitHander.bind(this);
    }

    __inputHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    __submitHander(){
        let {email,password} = this.state;
        this.props.login(email,password);
    }

    render(){
        return (
            <div>
                <input name="email" onChange={this.__inputHandler} placeholder="Email"/>
                <input name="password" onChange={this.__inputHandler} placeholder="Password"/>
                <button onClick={this.__submitHander}>Login</button>
            </div>
        )
    }
}

export default connect(null,{login})(LoginComponent);