import { api } from '../../../model/model';
import { makeComa } from '../../components/MathFunction';

export const POST_DATA_REQUEST = 'POST_DATA_REQUEST';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';
export const SET_USERBUY_ITEMLIST = 'SET_USERBUY_ITEMLIST';
export const SET_USERBUY_FORM = 'SET_USERBUY_FORM';

export const postDataRequest = () => ({
    type: POST_DATA_REQUEST
});

export const postDataSuccess = (data) => ({
    type: POST_DATA_SUCCESS,
    payload: data
});

export const postDataFailure = (error) => ({
    type: POST_DATA_FAILURE,
    payload: error
});
export const setUserBuyItemList = (data) => ({
    type: SET_USERBUY_ITEMLIST,
    payload: data,
});
export const setUserBuyForm = (data) => ({
    type: SET_USERBUY_FORM,
    payload: data
});

export const postUserBuy = (userBuyForm, token) => {
    return async (dispatch) => {
        dispatch(postDataRequest());
        try {
            const response = await api('/order/order', 'post', {
                ...userBuyForm,
                price: Math.ceil(userBuyForm.itemList.reduce((result, e) => +result + (Math.round((e.price * ((100 - e.discount) / 100)), 0) * e.amount) + e.delivery, 0)),
                delivery: userBuyForm.itemList.reduce((result, e) => +result + (e.delivery), 0),
            }, token)
            dispatch(postDataSuccess(response.data));
        } catch (error) {
            console.log('postUserBuy : ' + error.message)
            dispatch(postDataFailure(error.message));
        }
    };
};

export const setUserBuyStorage = (data) => {
    return (dispatch) => {
        dispatch(setUserBuyItemList(data));
        sessionStorage.setItem('buy', JSON.stringify(data))
    }
}