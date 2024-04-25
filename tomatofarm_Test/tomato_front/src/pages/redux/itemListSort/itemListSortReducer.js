import { ITEMLISTSORT_DATA_REQUEST, ITEMLISTSORT_DATA_SUCCESS, ITEMLISTSORT_DATA_FAILURE } from './actions';

const initialState = {
    itemListSort: {
        loading: true,
        data: [],
        error: null
    }
};

const itemListSortReducer = (state = initialState.itemListSort, action) => {
    switch (action.type) {
        case ITEMLISTSORT_DATA_REQUEST:
            return {
                ...state.itemListSort,
                loading: true,
                error: null
            };
        case ITEMLISTSORT_DATA_SUCCESS:
            return {
                ...state.itemListSort,
                loading: false,
                data: action.payload
            };
        case ITEMLISTSORT_DATA_FAILURE:
            return {
                ...state.itemListSort,
                loading: false,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export { itemListSortReducer };