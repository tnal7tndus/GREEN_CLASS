import './Cart_total.css';
import { makeComa } from '../../../components/MathFunction';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cart_total = () => {
    const userBuy = useSelector(state => state.userBuy.buyList);
    const userCart = useSelector(state => state.userCart.data);
    let result;
    if (userBuy && userCart)
        result = userCart.filter(e => userBuy.includes(e.itemCode));

    return (
        <div id="shopBasketPayContainer">
            <div id="shopBasketPayBox">
                <div id="shopBasketPrice">
                    <div>상품금액
                        <div>
                            {
                                result ?
                                    makeComa(result.reduce((result, e) => +result + (e.price * e.amount), 0))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                    <div>할인금액
                        <div>
                            {
                                result ?
                                    makeComa(Math.ceil(result.reduce((result, e) => +result + ((e.price * ((e.itemEventDiscount) / 100)) * e.amount), 0)))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                    <div>배송비
                        <div>
                            {
                                result ?
                                    makeComa(result.reduce((result, e) => +result + (e.delivery), 0))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                    <div>결제금액
                        <div>
                            {
                                result ?
                                    makeComa(Math.ceil(result.reduce((result, e) => +result + ((e.price * ((100 - e.itemEventDiscount) / 100)) * e.amount) + e.delivery, 0)))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                </div>
                <Link to="/home/buy" id="loginBox" >주문하기</Link>
                <div id="shopBasketCancel">
                    <div>* [주문완료] 상태일 경우에만 주문 취소 가능합니다.</div>
                    <div>* [마이페이지] - [주문내역 상세페이지]에서 직접 취소 가능합니다.</div>
                </div>
            </div>
        </div>

    );
}

export default Cart_total;