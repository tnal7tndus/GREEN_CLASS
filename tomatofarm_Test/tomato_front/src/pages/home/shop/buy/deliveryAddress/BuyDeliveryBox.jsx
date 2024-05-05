import { useState } from 'react';
import './BuyDeliveryBox.css';
import DeliverySelect from './DeliverySelect';
import { useDispatch, useSelector } from 'react-redux';
import { setUserBuyForm } from '../../../../redux/userBuy/actions';

const BuyDeliveryBox = ( ) => {
    const dispatch = useDispatch();
    const [deliverySelect, setDeliverySelect] = useState(false);
    const userBuy = useSelector(state => state.userBuy.form);



    const changeMessage = (e) => {
        dispatch(setUserBuyForm({ deliverymessage: e.target.value }))
    }

    return (
        <div id="buyDeliveryBox" >
            {
                userBuy.address1 ?
                    <>
                        <h4>{userBuy.info}</h4>
                        <p>{userBuy.id} {userBuy.phonenumber}</p>
                        <p>{userBuy.address1}</p>
                        <p>{userBuy.address2} <span>{userBuy.addressCode}</span></p>
                        <select name="message" onChange={changeMessage}>
                            <option value="">배송 메세지를 선택해주세요.</option>
                            <option value="배송 전 연락바랍니다.">배송 전 연락바랍니다.</option>
                            <option value="부재 시 경비실에 맡겨주세요.">부재 시 경비실에 맡겨주세요.</option>
                        </select>
                        <div onClick={() => setDeliverySelect(true)} id='delivery_select'>
                            배송지 선택
                        </div>
                    </>
                    :
                    <>
                        <p style={{ textAlign: 'center' }}>배달 받으실 장소를 입력해주세요!</p>
                        <div onClick={() => setDeliverySelect(true)} id='delivery_select_unlogin'>
                            배송지 입력
                        </div>
                    </>
            }

            {deliverySelect && <DeliverySelect setDeliverySelect={setDeliverySelect} />}
        </div >
    );
}

export default BuyDeliveryBox;