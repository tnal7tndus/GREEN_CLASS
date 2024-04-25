export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SET_USER = 'SET_USER';

export const loginRequest = (id) => ({
    type: LOGIN_REQUEST,
    payload: id
});

export const loginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
});
export const setUser = (data) => ({
    type: SET_USER,
    payload: data
});

