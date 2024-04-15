import { CHANGEKEYWORD, CHANGE_ALERT } from "./actions";


const initialState = {
    basic: {
        keyword: '',
        alert: false,
    }
};

const basicReducer = (state = initialState.basic, action) => {
    switch (action.type) {
        case CHANGEKEYWORD:
            return {
                ...state,
                keyword: action.nkeyword
            };
        case CHANGE_ALERT:
            return {
                ...state,
                alert: action.alert
            };
        default:
            return state;
    }
};

export { basicReducer };