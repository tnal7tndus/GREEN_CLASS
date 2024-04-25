import AdImgBox from './adImgBox/AdImgBox';
import FirstContainer from './firstContainer/FirstContainer';
import SecondContainer from './secondContainer/SecondContainer';
import ThirdContainer from './thirdContainer/ThridContainer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Index.css';
import { SERVER_URL } from '../../../model/server-config';

const Index = () => {

    useEffect(() => {
        axios.get(SERVER_URL+`/visit/update`, {
            params: {
                page: 'home',
            }
        })
    }, [])


    return (
        <>
            <AdImgBox />
            <FirstContainer />
            <hr />
            <SecondContainer />
            <hr />
            <ThirdContainer />
        </>
    )
}
export default Index;