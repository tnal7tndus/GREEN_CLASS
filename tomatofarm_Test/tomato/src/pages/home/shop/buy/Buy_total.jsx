import { makeComa } from '../../../components/MathFunction';
import { useEffect } from 'react';
import './Buy_total.css';
import { api } from '../../../../model/model';
import { useDispatch, useSelector } from 'react-redux';
import { postUserBuy, setUserBuyForm } from '../../../redux/userBuy/actions';
import { useNavigate } from 'react-router-dom';

const Buy_total = () => {

    /* Redux */
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userBuyItemList = useSelector(state => state.userBuy.form.itemList);
    const userBuy = useSelector(state => state.userBuy.form);
    const user = useSelector(state => state.user.data);

    const postOrder = () => {
        dispatch(postUserBuy(userBuy, user && user.token));
        // sessionStorage.removeItem('buy')
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
                                    makeComa(Math.ceil(userBuyItemList.reduce((result, e) => +result + ((e.price * ((e.discount) / 100)) * e.amount), 0)))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                    <div>배송비
                        <div>
                            {
                                userBuyItemList ?
                                    makeComa(userBuyItemList.reduce((result, e) => +result + (e.delivery), 0))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                    <div>결제금액
                        <div>
                            {
                                userBuyItemList ?
                                    makeComa(Math.ceil(userBuyItemList.reduce((result, e) => +result + (Math.round((e.price * ((100 - e.discount) / 100)), 0) * e.amount) + e.delivery, 0)))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                </div>
                <div id="loginBox" onClick={postOrder}>주문하기</div>
                <div id="shopBasketCancel">
                    <div>* [주문완료] 상태일 경우에만 주문 취소 가능합니다.</div>
                    <div>* [마이페이지] - [주문내역 상세페이지]에서 직접 취소 가능합니다.</div>
                </div>
            </div>
        </div>

    );
}

export default Buy_total;