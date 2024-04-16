import { CHANGEKEYWORD, CHANGE_ADMIN, CHANGE_ALERT } from "./actions";


const initialState = {
    basic: {
        keyword: '',
        alert: false,
        admin: false
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
        case CHANGE_ADMIN:
            return {
                ...state,
                admin: action.data
            };
        default:
            return state;
    }
};

export { basicReducer };