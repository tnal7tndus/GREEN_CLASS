export const CHANGEKEYWORD = 'CHANGEKEYWORD';
export const CHANGE_ALERT = 'CHANGE_ALERT';

export const changeKeyword = (nkeyword) => ({
    type: CHANGEKEYWORD,
    nkeyword
});
export const changeAlert = (alert) => ({
    type: CHANGE_ALERT,
    alert
});
