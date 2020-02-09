import React from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import API from '../constants/api';
import {setProfileImage} from '../redux/actions/userActions';
import Router from 'next/router';

class ProfileComponent extends React.Component {

    componentDidMount(){
        if(this.props.user.token){
            try {
                this.props.setProfileImage();
            } catch (e) {
                console.log(e);
                alert("Fetch data failed!");
            }
        } else {
            Router.push("/login");
        }
    }

    render(){
        let {name,surname,profilePic,token} = this.props.user;
        return (
            <div>
                <img width={200} height={200} src={profilePic+"?token="+token} />
                <p>Name: {name}</p>
                <p>Surname: {surname}</p>
            </div>
        )
    }
}

const mapStateToProps = store=>{
    return {
        user: store.userReducer
    }
}

export default connect(mapStateToProps,{setProfileImage})(ProfileComponent);