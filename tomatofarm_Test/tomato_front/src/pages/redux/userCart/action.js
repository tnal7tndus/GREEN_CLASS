import { api } from '../../../model/model';
import { setUserBuyStorage } from '../userBuy/actions';

export const USERCART_DATA_REQUEST = 'USERCART_DATA_REQUEST';
export const USERCART_DATA_SUCCESS = 'USERCART_DATA_SUCCESS';
export const USERCART_DATA_FAILURE = 'USERCART_DATA_FAILURE';
export const SET_USERCART_DATA = 'USERCART_SET_DATA';
export const GET_USERCART_DATA = 'USERCART_SET_DATA';

export const fetchDataRequest = () => ({
    type: USERCART_DATA_REQUEST
});

export const fetchDataSuccess = (data) => ({
    type: USERCART_DATA_SUCCESS,
    payload: data
});
export const fetchDataFailure = (error) => ({
    type: USERCART_DATA_FAILURE,
    payload: error
});
export const setUserCart = (data) => ({
    type: SET_USERCART_DATA,
    payload: data
});

export const getUserCart = (url, method, requestData, token) => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const response = await api(url, method, requestData, token)
            dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            console.log('getUserCart : ' + error.message)
            dispatch(fetchDataFailure(error.message));
        }
    };
};

export const getItemListAmount = (url, method, requestData, token) => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const ar = [];
            requestData.map(e => ar.push(e.itemCode));
            const response = await api(url, method, ar, token)
            for (let e of response.data) {
                for (let i of requestData) {
                    if (i.code == e.code) {
                        e.amount = i.amount
                    }
                }
            }
            dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            console.log('getItemListAmount : ' + error.message)
            dispatch(fetchDataFailure(error.message));
        }
    };
};

export const setUserCartStorage = (data) => {
    return async (dispatch) => {
        if (data) {
            localStorage.setItem('cart', JSON.stringify(data));
            dispatch(setUserCart(data));
        }
    }
}

export const changeUserCart = (key, type, userCart) => {
    return (dispatch) => {
        const userinfo = JSON.parse(sessionStorage.getItem('userinfo'));
        let ar = [...userCart];
        if (type == '+') {
            ar[key].amount++;
        } else if (type == '-') {
            if (ar[key].amount > 1)
                ar[key].amount--;
        } else {
            ar[key].amount = type
        }
        if (userinfo != null)
            dispatch(getUserCart('/usercart/merge', 'post', ar, userinfo.token))
        else {
            dispatch(setUserCart(ar));
            let result = [];
            for (let e of ar) {
                result.push({
                    itemCode: e.itemCode,
                    amount: e.amount
                })
            }
            localStorage.setItem('cart', JSON.stringify(result));

        }
    }
}

export const deleteUserCart = (url, method, data, token) => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const response = await api(url, method, data, token)
            dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            console.log('getUserCart : ' + error.message)
            dispatch(fetchDataFailure(error.message));
        }
    };
}