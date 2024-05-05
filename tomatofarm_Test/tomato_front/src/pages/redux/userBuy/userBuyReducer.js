import { POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS, SET_USERBUY, SET_USERBUY_FORM, SET_USERBUY_ITEMLIST } from "./actions";

const initialState = {
    userBuy: {
        loading: true,
        form: {
            itemList: [],
            addressCode: 0,
            address1: '',
            address2: '',
            deliverymessage: '',
            orderprice: 0,
            discount: 0,
            usepoint: 0,
            phonenumber: '',
        },
        data: null,
        error: null,
        buyList: [],
    }
};

const userBuyReducer = (state = initialState.userBuy, action) => {
    switch (action.type) {
        case POST_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case POST_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case POST_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            };
        case SET_USERBUY:
            return {
                ...state,
                ...action.payload
            };
        case SET_USERBUY_FORM:
            return {
                ...state,
                form: {
                    ...state.form,
                    ...action.payload
                }
            };
        default:
            return state;
    }
};

export { userBuyReducer };