import { useState } from 'react';
import './InsertAddress.css';
import { useSelector } from 'react-redux';


const InsertAddress = ({ insertAddress, handleAPI }) => {



    return (
        <div id="AddressForm">
            <div id="addressTitle">
                <label> 주 소 <span>*</span> </label>
            </div>
            <div id='AddressFormBox'>
                <div id="zonecodeBox">
                    <input type="text" name="zonecode" id="zonecode" placeholder="우편번호" readOnly/>
                    <button type="button" onClick={handleAPI}>우편번호 찾기</button>
                </div>
                <div>
                    <input type="text" name="address1" id="address1" placeholder="도로명 주소" readOnly />
                </div>
                <div>
                    <input
                        type="text"
                        id="address2"
                        name="address2"
                        placeholder="상세 주소"
                        required />
                </div>
                {/* <div><input type="text" name="phonenumber" id="phonenumber" placeholder="휴대전화 번호" /></div>
                <div><input type="text" name="nickname" id="nickname" placeholder="주소 별칭"/></div> */}
                <div id="addressInfoBox">
                    <input type="text" name="phonenumber" id="phonenumber" placeholder="휴대전화 번호" required/>
                    <input type="text" name="info" id="info" placeholder="주소 별칭" required />
                    <button onClick={insertAddress}>추가</button>
                </div>
            </div>
        </div>
    );
}

export default InsertAddress;