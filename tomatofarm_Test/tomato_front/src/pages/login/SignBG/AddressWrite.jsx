import { useState } from 'react';
import { DaumPostcodeEmbed } from 'react-daum-postcode';
import './AddressWrite.css'

const AddressWrite = ({ setAddressBox, setSignValue }) => {
    const [openPostcode, setOpenPostcode] = useState(true);
    const [addressForm, setAddressForm] = useState({
        addressCode: '',
        address1: '',
        address2: ''
    })
    const handleComplete = (data) => {
        const address = {
            addressCode: data.zonecode,
            address1: data.address,
        }
        setAddressForm((prev) => ({
            ...prev,
            ...address
        }))
        setOpenPostcode(false);
    };

    const changeAddressForm = (event) => {
        setAddressForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const submit = () => {
        setSignValue(prev => ({
            ...prev,
            value: {
                ...prev.value,
                ...addressForm
            }
        }))
        setAddressBox(false);
    }

    return (
        <div id="addressWrite">
            <h4>주소 입력</h4>
            <div onClick={() => setAddressBox(false)} id="exitBt"><i className="fa-solid fa-xmark"></i></div>
            {openPostcode ?
                <DaumPostcodeEmbed onComplete={handleComplete} style={{ height: '500px' }} autoClose={false} />
                :
                <div className='addressCode'>
                    <label htmlFor='address2'>
                        <p>배송지</p>
                        <input readOnly value={addressForm.addressCode} name='address_code' />
                        <input readOnly value={addressForm.address1} name='address1' />
                    </label>
                    <label>
                        <p>상세주소</p>
                        <input id='address2' onChange={changeAddressForm} value={addressForm.address2} name='address2' placeholder='상세주소를 입력해주세요.' />
                    </label>
                    <div onClick={submit}>등록</div>
                </div>
            }
        </div>
    );
}

export default AddressWrite;