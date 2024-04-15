import { useDispatch, useSelector } from 'react-redux';
import { SERVER_RESOURCE } from '../../../../model/server-config';
import { makeComa } from '../../../components/MathFunction';
import { setUserBuyItemList, setUserBuyStorage } from '../../../redux/userBuy/actions';
import { Link } from 'react-router-dom';
import { setUserCartStorage, changeUserCart } from '../../../redux/userCart/action';
import { api } from '../../../../model/model';

const Cart_item_Row = ({ item, idx }) => {
    /* 🫓REDUX🫓 */
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.data);
    const userCart = useSelector(state => state.userCart.data);
    const userBuy = useSelector(state => state.userBuy.buyList)
    const changeCheckBox = () => {
        if (userBuy && userBuy.find(e => e.code == item.code))
            dispatch(setUserBuyStorage(userBuy.filter(e => e.code != item.code)));
        else if (userBuy)
            dispatch(setUserBuyStorage([...userBuy, item]));
        else
            dispatch(setUserBuyStorage([item]));
    }

    const handleXbtn = async () => {
        let data = userCart.filter(i => i.code != item.code);
        userCart && dispatch(setUserBuyItemList(data)) // 체크된 상태로 삭제를 시도할때 처리해야할 내용
        dispatch(setUserCartStorage(data)); // 유저 장바구니 상태값을 덮어씌워준다.
        user && api(`/usercart/delete`, 'post', [item], user.token); // DB에서 삭제하기.
    }

    const changeAmount = (type) => {
        dispatch(changeUserCart(idx, type, userCart));
        dispatch(setUserBuyStorage(userCart))
    }

    return (
        <ul className="shopBasketItem">
            <li>
                <input className="check" checked={userBuy && userBuy.find(e => e.code == item.code) || false} type="checkbox" onChange={() => changeCheckBox()} />
            </li>
            <li className="shopBasketItemImg"><Link to={'/home/detail?code=' + item.code}><img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_2.jpg`} alt="" /></Link></li>
            <li className="shopBasketItemIfo">
                <Link to={'/home/detail?code=' + item.code} className="shopBasketItemIfo_name">{item.name || item.item_name}</Link>
                {
                    item.discount
                        ?
                        <>
                            <p style={{ textDecoration: 'line-through', marginBottom: '5px' }} className="shopBasketItemIfo_price">{makeComa(item.price)}원</p>
                            <p className="shopBasketItemIfo_sale">{makeComa(item.price)}원</p>
                        </>
                        :
                        <p style={{ color: 'black' }} className="shopBasketItemIfo_price">{makeComa(item.price)}원</p>
                }
            </li>
            <li className="shopBasketItem_count">
                <button onClick={() => changeAmount('-')}><i className="fa-solid fa-minus"></i></button>
                <input id="inputCount" type="number" value={item.amount} onChange={(event) => changeAmount(event.target.value)} />
                <button><i onClick={() => changeAmount('+')} className="fa-solid fa-plus"></i></button>
            </li>
            {
                item.discount ? (
                    <li className="shopBasketItemIfo_sumprice">
                        <p style={{ textDecoration: 'line-through', color: '#00000080' }}>{makeComa(item.price * item.amount)}원</p>
                        <p>{makeComa(Math.round(item.price * (100 - item.discount) / 100) * item.amount)}원</p>
                    </li>
                ) : (
                    <li className="shopBasketItemIfo_sumprice">
                        {makeComa(item.price * item.amount)}원
                    </li>
                )
            }
            <li>
                {item.delivery ? makeComa(item.delivery) + ' 원' : '무료배송'}
                <div className='xButton' onClick={handleXbtn}><i className="fa-solid fa-xmark"></i></div>
            </li>
        </ul >
    );
}

export default Cart_item_Row;