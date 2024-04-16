export const CHANGEKEYWORD = 'CHANGEKEYWORD';
export const CHANGE_ALERT = 'CHANGE_ALERT';
export const CHANGE_ADMIN = 'CHANGE_ADMIN';

export const changeKeyword = (nkeyword) => ({
    type: CHANGEKEYWORD,
    nkeyword
});
export const changeAlert = (alert) => ({
    type: CHANGE_ALERT,
    alert
});
export const changeAdmin = (data) => ({
    type: CHANGE_ADMIN,
    data
});
