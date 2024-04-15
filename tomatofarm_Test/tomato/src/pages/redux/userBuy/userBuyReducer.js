import { POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS, SET_USERBUY_FORM, SET_USERBUY_ITEMLIST } from "./actions";

const initialState = {
    userBuy: {
        loading: true,
        buyList: JSON.parse(sessionStorage.getItem('buy')),
        form: {
            itemList: JSON.parse(sessionStorage.getItem('buy')),
            address_code: '',
            address1: '',
            address2: '',
            deliverymessage: '',
            price: '',
            discount: '',
            delieveryprice: '',
            point: '',
            phonenumber: '',
        },
        error: null,
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
        case SET_USERBUY_ITEMLIST:
            return {
                ...state,
                buyList: action.payload,
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