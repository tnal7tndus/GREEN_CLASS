import { makeComa } from '../../../components/MathFunction';
import { useEffect, useRef } from 'react';
import './Buy_total.css';
import { api } from '../../../../model/model';
import { useDispatch, useSelector } from 'react-redux';
import { postUserBuy, setUserBuyForm } from '../../../redux/userBuy/actions';
import { useNavigate } from 'react-router-dom';
import { setUserCart, setUserCartStorage } from '../../../redux/userCart/action';

const Buy_total = () => {

    /* Redux */
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userBuyItemList = useSelector(state => state.userBuy.form.itemList);
    const userBuy = useSelector(state => state.userBuy.form);
    const userCart = useSelector(state => state.userCart.data);
    const user = JSON.parse(sessionStorage.getItem('userinfo'));
    const orderprice = useRef(null);
    const deliveryprice = useRef(null);
    console.log(userBuy)
    const deleteUserCart = () => {
        const result = []
        userBuyItemList.map(e => {
            result.push(e.code)
        })
        console.log(result)
        return result;
    }

    const postOrder = () => {
        dispatch(setUserCartStorage(userCart.filter(e => !deleteUserCart().includes(e.code))))
        dispatch(postUserBuy({
            ...userBuy,
            orderprice: Math.ceil(userBuyItemList.reduce((result, e) => +result + (Math.round((e.price * ((100 - e.itemEventDiscount) / 100)), 0) * e.amount) + e.delivery, 0)),
            deliveryprice: userBuyItemList.reduce((result, e) => +result + (e.delivery), 0),
            discount: Math.ceil(userBuyItemList.reduce((result, e) => +result + ((e.price * ((e.itemEventDiscount) / 100)) * e.amount), 0))
        }, user && user.token));
        navigate('/home/buy/end');
    }

    return (
        <div id="shopBasketPayContainer">
            <div id="shopBasketPayBox">
                <div id="shopBasketPrice">
                    <div>상품금액
                        <div>
                            {
                                userBuyItemList ?
                                    makeComa(userBuyItemList.reduce((result, e) => +result + (e.price * e.amount), 0))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                    <div>할인금액
                        <div>
                            {
                                userBuyItemList ?
                                    makeComa(Math.ceil(userBuyItemList.reduce((result, e) => +result + ((e.price * ((e.itemEventDiscount) / 100)) * e.amount), 0)))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                    <div>배송비
                        <div ref={deliveryprice}>
                            {
                                userBuyItemList ?
                                    makeComa(userBuyItemList.reduce((result, e) => +result + (e.delivery), 0))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                    <div>결제금액
                        <div ref={orderprice}>
                            {
                                userBuyItemList ?
                                    makeComa(Math.ceil(userBuyItemList.reduce((result, e) => +result + (Math.round((e.price * ((100 - e.itemEventDiscount) / 100)), 0) * e.amount) + e.delivery, 0)))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                </div>
                <div id="loginBox" onClick={postOrder}
                    style={{
                        backgroundColor: userBuy.itemList && userBuy.itemList.length > 0 && userBuy.deliverymessage.length > 0 ? '#9b1b20' : '#e0e0e0',
                        color: userBuy.itemList && userBuy.itemList.length > 0 && userBuy.deliverymessage.length > 0 ? '#fff' : 'black'
                    }}>주문하기</div>
                <div id="shopBasketCancel">
                    <div>* [주문완료] 상태일 경우에만 주문 취소 가능합니다.</div>
                    <div>* [마이페이지] - [주문내역 상세페이지]에서 직접 취소 가능합니다.</div>
                </div>
            </div>
        </div>

    );
}

export default Buy_total;