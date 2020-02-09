import {SET_LOCALE} from '../constants';

export const setLocale = (locale)=>{
    return (dispatch)=>{
        dispatch({
            type: SET_LOCALE,
            payload: locale
        });
    }
}