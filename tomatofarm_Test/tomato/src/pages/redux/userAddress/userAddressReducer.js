
import { USER_ADDRESS_REQUEST, USER_ADDRESS_SUCCESS, USER_ADDRESS_FAILURE, SET_USER_ADDRESS } from './action';
const initialState = {
    userAddress: {
        loading: false,
        error: null,
        data: []
    }
};

const userAddressReducer = (state = initialState.userAddress, action) => {
    switch (action.type) {
        case USER_ADDRESS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                id: action.payload
            };
        case USER_ADDRESS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case USER_ADDRESS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case SET_USER_ADDRESS:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        default:
            return state;
    }
};

export { userAddressReducer };