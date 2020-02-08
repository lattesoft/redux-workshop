import {SET_LOCALE} from '../constants';

const initData = {
    locale: ""
}

export default (state = initData, action) => {
    switch (action.type) {
        case SET_LOCALE: {
            return {
                ...state,
                locale: action.payload
            }
        }
        
        default: return state
    }
}