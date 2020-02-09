import {SET_LOCALE} from '../constants';

const initialState = {
    locale: ""
}

export default (state = initialState,action)=>{
    switch(action.type){
        case SET_LOCALE: {
            return {
                ...state,
                locale: action.payload
            }
        }
        default: return state
    }
}