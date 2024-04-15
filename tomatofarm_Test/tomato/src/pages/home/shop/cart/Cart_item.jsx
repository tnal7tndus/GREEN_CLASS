
import './Cart_item.css';
import Cart_item_Row from './Cart_item_Row';
import { useDispatch, useSelector } from 'react-redux';
import { setUserBuyItemList } from '../../../redux/userBuy/actions';
import { setUserBuyStorage } from '../../../redux/userBuy/actions';
import React, { useEffect } from 'react';
import { getItemListAmount, getUserCart } from '../../../redux/userCart/action';
import Loading from './../../../components/Loading';

const Cart_item = () => {
    /* 🫓REDUX🫓 */
    const dispatch = useDispatch();
    const userCart = useSelector(state => state.userCart.data);
    const userCart_loading = useSelector(state => state.userCart.loading);
    const userBuy = useSelector(state => state.userBuy.buyList);
    const userinfo = useSelector(state => state.user)

    const handleAllCheckBox = () => {
        if (userBuy && userCart.length == userBuy.length) {
            dispatch(setUserBuyItemList([]));
            dispatch(setUserBuyStorage([]));
        } else {
            dispatch(setUserBuyItemList(userCart));
            dispatch(setUserBuyStorage(userCart));
        }
    }

    useEffect(() => {
        if (userinfo.data) {
            const token = userinfo.data.token;
            dispatch(getUserCart('/usercart/select', 'get', null, token));
        } else {
            userCart && dispatch(getItemListAmount('/item/selectin', 'post', userCart.data, null));
        }
    }, [])

    if (userCart_loading) return <Loading />

    return (
        <div id='shopBasketSelectBox'>
            {userCart && userCart.length > 0 &&
                <div id="shopBasketSelect">
                    <input checked={userBuy && userBuy.length == userCart.length || false} type="checkbox" onChange={handleAllCheckBox} />
                    전체선택
                </div>
            }
            <div id="shopBasketItemBox">
                <ul id="shopBasketItemBoxTitle">
                    <li>선택</li>
                    <li>상품사진</li>
                    <li>상품정보</li>
                    <li>수량</li>
                    <li>총 상품금액</li>
                    <li>배송비</li>
                </ul>
                {
                    userCart && userCart.length > 0
                        ?
                        userCart && userCart.map((e, i) => <Cart_item_Row item={e} key={i} idx={i} />)
                        :
                        <div id='cartNone'>
                            장바구니에 상품을 담아주세요.
                        </div>
                }

            </div>


        </div >
    );

}
export default Cart_item;