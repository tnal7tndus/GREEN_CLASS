import { api } from '../../../model/model';
import { makeComa } from '../../components/MathFunction';

export const POST_DATA_REQUEST = 'POST_DATA_REQUEST';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';
export const SET_USERBUY_ITEMLIST = 'SET_USERBUY_ITEMLIST';
export const SET_USERBUY_FORM = 'SET_USERBUY_FORM';
export const SET_USERBUY = 'SET_USERBUY';

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
export const setUserBuyForm = (data) => ({
    type: SET_USERBUY_FORM,
    payload: data
});
export const setUserBuy = (data) => ({
    type: SET_USERBUY,
    payload: data
});

export const postUserBuy = (userBuyForm, token) => {
    console.log(userBuyForm)
    return async (dispatch) => {
        dispatch(postDataRequest());
        try {
            const response = await api('/order/order', 'post', userBuyForm, token)
            console.log(response.data)
            dispatch(postDataSuccess(response.data));
        } catch (error) {
            console.log('postUserBuy : ' + error.message)
            dispatch(postDataFailure(error.message));
        }
    };
};

export const setUserBuyStorage = (data) => {
    return (dispatch) => {
        dispatch(setUserBuy({ buyList: data }));
        sessionStorage.setItem('buy', JSON.stringify(data))
    }
}
export const setUserBuyStorageClean = () => {
    return (dispatch) => {
        dispatch(setUserBuy({
            form: {
                itemList: [],
                addressCode: 0,
                address1: '',
                address2: '',
                deliverymessage: '',
                orderprice: 0,
                discount:0,
                delieveryprice: 0,
                usepoint: 0,
                phonenumber: '',
            },
            buyList: []
        }));
        sessionStorage.removeItem('buy');
    }
}