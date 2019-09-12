import { COMPLETE_DATA_FETCHING, FETCH_SUCCEEDED } from "./Constants/action-types";

const initialState = {
    loading: true,
    greeting: ''
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case COMPLETE_DATA_FETCHING:
            return {
                ...state, loading: false
            };
        case FETCH_SUCCEEDED:
            // console.log(action.data);
            return {
                ...state, greeting: action.data
            };
        default:
            return state;
    }
}

export default rootReducer;
