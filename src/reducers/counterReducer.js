import {ADD_COUNT} from '../constants/redux';

const counterInit = {
    total: 0
}

const counterReducer = (state = counterInit, action) => {
    switch (action.type) {
        case ADD_COUNT: {
            console.log("Here in reducers");
            return {
                ...state,
                total: ++state.total
            }
        }
        
        default: return state
        
    }
}

export default counterReducer;