import axios from 'axios';
import {SET_USER,SET_PROFILE_IMAGE} from '../constants';
import API from '../../constants/api';
import Router from 'next/router'


export const login = (email,password)=>{
    return async (dispatch)=>{
        try {
            const res = await axios.post(API.LOGIN,{
                email,
                password
            });
            const {user} = res.data.payload;
            axios.defaults.headers.common['authorization'] = user.token;
            dispatch({
                type: SET_USER,
                payload: user
            });
            Router.push("/profile");
        } catch (e) {
            console.log(e);
            alert("Login not success!");
        }
    }
}

export const setProfileImage = ()=>{
    return async (dispatch)=>{
        const res = await axios.get(API.PROFILE);
        let {user} = res.data.payload;
        dispatch({
            type: SET_PROFILE_IMAGE,
            payload: user.profilePic
        });
    }
}