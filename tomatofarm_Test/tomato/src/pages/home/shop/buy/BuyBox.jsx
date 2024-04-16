import './BuyBox.css'
import BuyItemBox from './buyItemBox/BuyItemBox';
import BuyDeliveryBox from './deliveryAddress/BuyDeliveryBox';
import Buy_total from './Buy_total';
import { api } from '../../../../model/model';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserBuyStorageClean } from '../../../redux/userBuy/actions';



const BuyBox = () => {
    const dispatch = useDispatch();
    const userBuy = useSelector(state => state.userBuy);

    useEffect(() => {
        api('/visit/update?page=order', 'get')
        return () => {
            dispatch(setUserBuyStorageClean({
                form: null,
                buyList: []
            }))
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