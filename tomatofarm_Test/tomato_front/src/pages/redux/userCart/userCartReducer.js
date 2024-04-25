import { USERCART_DATA_REQUEST, USERCART_DATA_SUCCESS, USERCART_DATA_FAILURE, SET_USERCART_DATA } from './action';

const initialState = {
    userCart: {
        loading: false,
        data: [],
        error: null
    }
};

const userCartReducer = (state = initialState.userCart, action) => {
    switch (action.type) {
        case USERCART_DATA_REQUEST:
            return {
                ...state.userCart,
                loading: true,
                error: null
            };
        case USERCART_DATA_SUCCESS:
            return {
                ...state.userCart,
                loading: false,
                data: action.payload
            };
        case USERCART_DATA_FAILURE:
            return {
                ...state.userCart,
                loading: false,
                data: [],
                error: action.payload
            };
        case SET_USERCART_DATA:
            return {
                ...state.userCart,
                data: action.payload
            };
        default:
            return state;
    }
};

export { userCartReducer };