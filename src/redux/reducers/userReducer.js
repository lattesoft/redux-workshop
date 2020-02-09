import {SET_USER,SET_PROFILE_IMAGE} from '../constants';

const initialState = {
    id: null,
    email: null,
    name: null,
    surname: null,
    userType: null,
    token: null,
    profilePic: null,
}

export default (state = initialState,action)=>{
    switch(action.type){
        case SET_USER: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_PROFILE_IMAGE: {
            return {
                ...state,
                profilePic: action.payload
            }
        }
        default: return state
    }
}