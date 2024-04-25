import { api } from "../../../model/model";
import { addressSuccess } from "../userAddress/action";

export const REQUEST_NEWADDRESS = 'REQUEST_NEWADDRESS';
export const SUCCESS_NEWADDRESS = 'SUCCESS_NEWADDRESS';
export const FAILURE_NEWADDRESS = 'FAILURE_NEWADDRESS';
export const SET_NEWADDRESS = 'SET_NEWADDRESS';

export const requestNewAddress = () => ({
    type: REQUEST_NEWADDRESS,
});
export const successNewAddress = () => ({
    type: SUCCESS_NEWADDRESS,
});
export const failureNewAddress = (err) => ({
    type: FAILURE_NEWADDRESS,
    payload: err
});
export const setNewUserAddress = (data) => ({
    type: SET_NEWADDRESS,
    payload: data
});

export const postNewUserAddress = (url, method, requestData, token) => {
    return async (dispatch) => {
        dispatch(requestNewAddress());
        try {
            const response = await api(url, method, requestData, token)
            dispatch(successNewAddress());
            dispatch(addressSuccess(response.data));
        } catch (error) {
            console.log('postNewUserAddress : ' + error.message)
            dispatch(failureNewAddress(error.message));
        }
    };
};