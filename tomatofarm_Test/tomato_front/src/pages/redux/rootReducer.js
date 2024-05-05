import { combineReducers } from 'redux';
import { itemListReducer } from './itemList/itemListReducer';
import { basicReducer } from './basic/basicReducer';
import { itemListSortReducer } from './itemListSort/itemListSortReducer';
import { userBuyReducer } from './userBuy/userBuyReducer';
import { userCartReducer } from './userCart/userCartReducer';
import { userAddressReducer } from './userAddress/userAddressReducer';
import { userNewAddressReducer } from './userNewAddress/userNewAddressReducer';
import { finalOrderReducer } from './userOrder/finalOrderReducer';
import { page_listReducer } from './page_list/page_listReducer';

const rootReducer = combineReducers({
    itemList: itemListReducer,
    itemListSort: itemListSortReducer,
    basic: basicReducer,
    userBuy: userBuyReducer,
    userCart: userCartReducer,
    finalOrder: finalOrderReducer,
    userAddress: userAddressReducer,
    userNewAddress: userNewAddressReducer,
    page_list: page_listReducer,
});

export default rootReducer;