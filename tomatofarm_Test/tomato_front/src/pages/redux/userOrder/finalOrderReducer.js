import { FINALORDER_DATA_REQUEST, FINALORDER_DATA_SUCCESS, FINALORDER_DATA_FAILURE, SET_FINALORDER_DATA } from './actions';

const initialState = {
    finalOrder: {
        loading: true,
        data: {
            itemList: [],
            address_code: 'aa',
            address1: 'aa',
            address2: 'aa'
        },
        error: null
    }
};

const finalOrderReducer = (state = initialState.finalOrder, action) => {
    switch (action.type) {
        case FINALORDER_DATA_REQUEST:
            return {
                ...state.data,
                loading: true,
                error: null
            };
        case FINALORDER_DATA_SUCCESS:
            return {
                ...state.data,
                loading: false,
                data: action.payload
            };
        case FINALORDER_DATA_FAILURE:
            return {
                ...state.data,
                loading: false,
                data: [],
                error: action.payload
            };
        case SET_FINALORDER_DATA:
            return {
                ...state.data,
                data: action.payload
            };
        default:
            return state;
    }
};

export { finalOrderReducer };