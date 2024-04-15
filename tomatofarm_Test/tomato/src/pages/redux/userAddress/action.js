import { api } from "../../../model/model";

export const USER_ADDRESS_REQUEST = 'USER_ADDRESS_REQUEST';
export const USER_ADDRESS_SUCCESS = 'USER_ADDRESS_SUCCESS';
export const USER_ADDRESS_FAILURE = 'USER_ADDRESS_FAILURE';
export const SET_USER_ADDRESS = 'SET_USER_ADDRESS';

export const addressRequest = (id) => ({
    type: USER_ADDRESS_REQUEST,
    payload: id
});

export const addressSuccess = (data) => ({
    type: USER_ADDRESS_SUCCESS,
    payload: data
});

export const addressFailure = (error) => ({
    type: USER_ADDRESS_FAILURE,
    payload: error
});
export const setUserAddress = (data) => ({
    type: SET_USER_ADDRESS,
    payload: data
});

export const getUserAddress = (url, method, requestData, token) => {
    return async (dispatch) => {
        dispatch(addressRequest());
        try {
            const response = await api(url, method, requestData, token)
            dispatch(addressSuccess(response.data));
        } catch (error) {
            console.log('getUserAddress : ' + error.message)
            dispatch(addressFailure(error.message));
        }
    };
};