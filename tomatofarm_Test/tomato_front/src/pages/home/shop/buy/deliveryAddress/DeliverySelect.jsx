import { useState, useEffect } from 'react';
import './DeliverySelect.css'
import DeliverySelectRow from './DeliverySelectRow/DeliverySelectRow';
import { useSelector, useDispatch } from 'react-redux';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { getUserAddress } from '../../../../redux/userAddress/action';
import { setNewUserAddress } from '../../../../redux/userNewAddress/action';
import DeliveryUpdate from './DeliverySelectRow/DeliveryUpdate';

const DeliverySelect = ({ setDeliverySelect }) => {
    const dispatch = useDispatch();
    // const user = useSelector(state => state.user.data);
    const user = JSON.parse(sessionStorage.getItem('userinfo'));
    const userNewAddress = useSelector(state => state.userNewAddress.data);
    const userAddress = useSelector(state => state.userAddress.data); // DB내 회원 배송목록
    const [openPostcode, setOpenPostcode] = useState(!user);

    useEffect(() => {
        user && dispatch(getUserAddress('/address/select', 'get', null, user.token));
    }, [])

    const handleComplete = (data) => {
        const address = {
            addressCode: data.zonecode,
            address1: data.address,
        }
        dispatch(setNewUserAddress(address));
        setOpenPostcode(false);
    };

    return (
        <div id="deliverySelect">
            <div id="deliverySelectContainer">
                <h4>배송지 변경</h4>
                <div onClick={() => setDeliverySelect(false)} id="exitBt"><i className="fa-solid fa-xmark"></i></div>
                {openPostcode ?
                    <DaumPostcodeEmbed onComplete={handleComplete} style={{ height: 'calc(100% - 51px)' }} autoClose={false} />
                    :
                    <>
                        <div className="addDelivery" onClick={() => setOpenPostcode(true)}>배송지 추가하기</div>
                        {userNewAddress && <DeliveryUpdate setDeliverySelect={setDeliverySelect} />}
                        {userAddress.length > 0 && userAddress.map((e, i) => <DeliverySelectRow setDeliverySelect={setDeliverySelect} key={i} address={e} />)}
                    </>
                }
            </div>
        </div>
    );
}

export default DeliverySelect;