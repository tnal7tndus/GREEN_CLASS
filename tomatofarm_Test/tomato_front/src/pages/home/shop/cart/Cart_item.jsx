
import './Cart_item.css';
import Cart_item_Row from './Cart_item_Row';
import { useDispatch, useSelector } from 'react-redux';
import { setUserBuyStorage } from '../../../redux/userBuy/actions';
import React, { useEffect } from 'react';
import { getItemListAmount, getUserCart } from '../../../redux/userCart/action';
import Loading from './../../../components/Loading';

const Cart_item = () => {

    /* 🫓REDUX🫓 */
    const dispatch = useDispatch();
    const userCart = JSON.parse(localStorage.getItem('cart'));
    const userCartList = useSelector(state => state.userCart.data)
    const userCart_loading = useSelector(state => state.userCart.loading);
    const userBuy = useSelector(state => state.userBuy.buyList);
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo'));



    const handleAllCheckBox = () => {
        if(userinfo){
            if (userBuy && userCartList.length == userBuy.length) {
                dispatch(setUserBuyStorage([]));
            } else {
                dispatch(setUserBuyStorage(userCartList.map(e => e.itemCode)));
            }
        } else{
            if (userBuy && userCart.length == userBuy.length) {
                dispatch(setUserBuyStorage([]));
            } else {
                dispatch(setUserBuyStorage(userCart.map(e => e.itemCode)));
            }
        }
    }

    useEffect(() => {
        if (userinfo) {
            dispatch(getUserCart('/usercart/selectuser', 'get', null, userinfo.token));
        } else {
            if (userCart) {
                dispatch(getItemListAmount('/usercart/selectnouser', 'post', userCart, null));
            }
        }
    }, [])

    if (userCart_loading) return <Loading />

    return (
        <div id='shopBasketSelectBox'>
            {userCart && userCart.length > 0 &&
                <label id="shopBasketSelect">
                    <input checked={userBuy && userBuy.length == userCart.length || false} type="checkbox" onChange={handleAllCheckBox} />
                    전체선택
                </label>
            }
            {userCartList && userCartList.length > 0 &&
                <label id="shopBasketSelect">
                    <input checked={userBuy && userBuy.length == userCartList.length || false} type="checkbox" onChange={handleAllCheckBox} />
                    전체선택
                </label>
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
                    userCartList && userCartList.length > 0
                        ?
                        userCartList && userCartList.map((e, i) => <Cart_item_Row item={e} key={i} idx={i} />)
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