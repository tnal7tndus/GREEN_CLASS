
import { useDispatch, useSelector } from 'react-redux';
import './DeliveryUpdate.css'
import { postNewUserAddress, setNewUserAddress } from '../../../../../redux/userNewAddress/action';
import { setUserBuyForm } from '../../../../../redux/userBuy/actions';


const DeliveryUpdate = ({ setDeliverySelect }) => {
    const dispatch = useDispatch();
    const userNewAddress = useSelector(state => state.userNewAddress.data);
    // const user = useSelector(state => state.user.data);
    const user = JSON.parse(sessionStorage.getItem('userinfo'));

    const changeAddress = (event) => {
        dispatch(setNewUserAddress({
            [event.target.name]: event.target.value,
        }))
    }

    const postAddress = () => {
        if (user)
            dispatch(postNewUserAddress('/address/mergeone', 'post', userNewAddress, user.token))
        else {
            setDeliverySelect(false)
            dispatch(setUserBuyForm(userNewAddress));
        }
    }

    return (
        <div className="deliveryUpdate">
            <div className='info' >
                <label>
                    <p>배송지명</p>
                    <input name='info' value={userNewAddress.info || ''} onChange={(event) => changeAddress(event)} /><br />
                </label>
            </div>
            <div className='addressName'>
                <label>
                    <p>수령인</p>
                    <input name='addressName' value={userNewAddress.addressName || ''} onChange={(event) => changeAddress(event)} />
                </label>
            </div>
            <div className='phoneNumber'>
                <label>
                    <p>수령인 연락처</p>
                    <input type='number' name='phonenumber' value={userNewAddress.phonenumber || ''} onChange={(event) => changeAddress(event)} />
                </label>
            </div>
            <div className='addressCode'>
                <label htmlFor='address2'>
                    <p>배송지</p>
                    <input readOnly name='addressCode' value={userNewAddress.addressCode || ''} onChange={(event) => changeAddress(event)} />
                    <input readOnly name='address1' value={userNewAddress.address1 || ''} onChange={(event) => changeAddress(event)} />
                </label>
                <label>
                    <p>상세주소</p>
                    <input id='address2' name='address2' value={userNewAddress.address2 || ''} onChange={(event) => changeAddress(event)} placeholder='상세주소를 입력해주세요.' />
                </label>
            </div>
            <div className='delivery_select'>
                <div onClick={() => postAddress()}>등록</div>
            </div>
        </div>
    )
}

export default DeliveryUpdate;