import { FAILURE_NEWADDRESS, REQUEST_NEWADDRESS, SET_NEWADDRESS, SUCCESS_NEWADDRESS } from "./action";

const initialState = {
    userNewAddress: {
        loading: false,
        error:null,
        data: null,
    }
};

const userNewAddressReducer = (state = initialState.userNewAddress, action) => {
    switch (action.type) {
        case REQUEST_NEWADDRESS:
            return {
                ...state,
                loading: true,
            };
        case SUCCESS_NEWADDRESS:
            return {
                ...state,
                data: null,
                loading:false
            };
        case FAILURE_NEWADDRESS:
            return {
                ...state,
                loading:false,
                error:action.payload,
            };
        case SET_NEWADDRESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload,
                }
            };
        default:
            return state;
    }
};

export { userNewAddressReducer };