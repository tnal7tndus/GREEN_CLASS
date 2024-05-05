import { api } from '../../../model/model';

export const FINALORDER_DATA_REQUEST = 'FINALORDER_DATA_REQUEST';
export const FINALORDER_DATA_SUCCESS = 'FINALORDER_DATA_SUCCESS';
export const FINALORDER_DATA_FAILURE = 'FINALORDER_DATA_FAILURE';
export const SET_FINALORDER_DATA = 'FINALORDER_SET_DATA';

export const fetchDataRequest = () => ({
    type: FINALORDER_DATA_REQUEST
});

export const fetchDataSuccess = (data) => ({
    type: FINALORDER_DATA_SUCCESS,
    payload: data
});

export const fetchDataFailure = (error) => ({
    type: FINALORDER_DATA_FAILURE,
    payload: error
});
export const setFinalOrder = (data) => ({
    type: SET_FINALORDER_DATA,
    payload: data
});

export const postfinalOrder = (url, method, requestData, token) => {
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

export const setfinalOrder = (data) => {
    return () => {
        dispatchEvent(setFinalOrder(data))
        sessionStorage.setItem('finalOrder', JSON.stringify(data));
    }
}

// export const setUserBuyStorage = (data) => {
//     return (dispatch) => {
//         dispatch(setUserBuyItemList(data));
//         sessionStorage.setItem('buy', JSON.stringify(data))
//     }
// }