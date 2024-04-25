import { api } from '../../../model/model';

export const ITEMLISTSORT_DATA_REQUEST = 'ITEMLISTSORT_DATA_REQUEST';
export const ITEMLISTSORT_DATA_SUCCESS = 'ITEMLISTSORT_DATA_SUCCESS';
export const ITEMLISTSORT_DATA_FAILURE = 'ITEMLISTSORT_DATA_FAILURE';

export const fetchDataRequest = () => ({
    type: ITEMLISTSORT_DATA_REQUEST
});

export const fetchDataSuccess = (data) => ({
    type: ITEMLISTSORT_DATA_SUCCESS,
    payload: data
});

export const fetchDataFailure = (error) => ({
    type: ITEMLISTSORT_DATA_FAILURE,
    payload: error
});

export const getItemSortList = (url, method, requestData, token) => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const response = await api(url, method, requestData, token)
            dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            console.log('fetchData : ' + error.message)
            dispatch(fetchDataFailure(error.message));
        }
    };
};