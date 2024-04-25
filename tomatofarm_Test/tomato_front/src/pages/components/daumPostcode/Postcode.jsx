import React from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { useDispatch } from 'react-redux';
import { setUserAddress } from '../../redux/userAddress/action';

const Postcode = ({ onComplete, style, autoClose }) => {
    const dispatch = useDispatch();

    const handleComplete = (data) => {

        const address = {
            address_code: data.zonecode,
            address1: data.address,
        }
        dispatch(setUserAddress(address));

    };

    return (
        <div id="daumPostcode">
            <h4>주소검색</h4>
            <DaumPostcodeEmbed onComplete={handleComplete} style={{ height: '100%' }} />
        </div>
    );
};

export default Postcode;