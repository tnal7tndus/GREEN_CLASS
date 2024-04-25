
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SET_USER } from './action';
const initialState = {
    user: {
        loading: false,
        error: null,
        data: JSON.parse(sessionStorage.getItem('userinfo'))
    }
};

const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                id: action.payload
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case SET_USER:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};

export { userReducer };