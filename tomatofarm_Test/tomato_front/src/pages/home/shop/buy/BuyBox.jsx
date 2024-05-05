import './BuyBox.css'
import BuyItemBox from './buyItemBox/BuyItemBox';
import BuyDeliveryBox from './deliveryAddress/BuyDeliveryBox';
import Buy_total from './Buy_total';
import { api } from '../../../../model/model';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserBuy, setUserBuyForm, setUserBuyStorageClean } from '../../../redux/userBuy/actions';



const BuyBox = () => {
    const dispatch = useDispatch();
    const userCart = useSelector(state => state.userCart.data)
    const userBuyS = JSON.parse(sessionStorage.getItem('buy'))

    useEffect(() => {
        api('/visit/update?page=order', 'get')
        if (userBuyS) {
            dispatch(setUserBuy({ buyList: userCart.filter(e => userBuyS.includes(e.itemCode)) }))
            dispatch(setUserBuyForm({ itemList: userCart.filter(e => userBuyS.includes(e.itemCode)) }))
        }

        return () => {
            dispatch(setUserBuyStorageClean())
        }
    }, [])

    return (
        <div id='shopBasket' className='container'>
            <h3>
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                &nbsp;&nbsp;구매하기&nbsp;&nbsp;
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
            </h3>
            <div id='shopBasket_left'>
                <BuyItemBox />
                <BuyDeliveryBox />
            </div>

            <Buy_total />
        </div>
    );
}

export default BuyBox;