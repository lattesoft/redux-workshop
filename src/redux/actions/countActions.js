import {ADD_COUNT} from '../constants';

export const addCount = ()=>{
    return (dispatch)=>{
        dispatch({
            type: ADD_COUNT,
        });
    }
}