
import { useDispatch } from 'react-redux';
import { setUserBuyForm } from '../../../../../redux/userBuy/actions';
import './DeliverySelectRow.css';

const DeliverySelectRow = ({ setDeliverySelect, address }) => {
    const dispatch = useDispatch();

    const selectDelivery = () => {
        dispatch(setUserBuyForm(address));
    }

    const handleSelect = () => {
        selectDelivery();
        setDeliverySelect(false);
    }

    return (
        <div className="deliverySelectRow">
            <h4>{address.info}</h4>
            <p>{address.id} {address.phonenumber}</p>
            <p><span>{address.addressCode}</span> {address.address1}</p>
            <p>{address.address2}</p>
            <div className='delivery_select'>
                <div className='delete'>삭제</div>
                <div className='update'>수정</div>
                <div onClick={handleSelect} className='select'>선택</div>
            </div>
        </div>
    )
}

export default DeliverySelectRow;