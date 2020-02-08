import {ADD_COUNT} from '../constants';

const counterInit = {
    total: 0
}

const counterReducer = (state = counterInit, action) => {
    switch (action.type) {
        case ADD_COUNT: {
            return {
                ...state,
                total: ++state.total
            }
        }
        
        default: return state
        
    }
}

export default counterReducer;