
import { SET_PAGE_LIST } from './actions';

const initialState = {
    page_list: {
        deletedSort: []
    }
};

const page_listReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE_LIST:
            return {
                ...state,
                page_list: {
                    ...state.page_list,
                    ...action.data
                }
            };
        default:
            return state;
    }
};

export { page_listReducer };