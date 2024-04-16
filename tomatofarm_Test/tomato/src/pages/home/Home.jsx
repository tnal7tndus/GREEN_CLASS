import { Route, Routes } from "react-router-dom";
import Header from './header/Header';
import Index from './index/Index';
import ItemList from "./list/ItemList";
import BuyBox from './shop/buy/BuyBox';
import Cart from './shop/cart/Cart';
import React from "react";
import EventPage2 from './../event/EventPage2';
import CustomerQA from "../customerQA/CustomerQA";
import Alert from "../components/alert/Alert";
import { useSelector } from 'react-redux';
import BuyComplete from "./shop/buyComplete/BuyComplete";
import Detail from "./detail/Detail";


const Home = () => {
    console.log('Home 랜더링')
    const alert = useSelector(state => state.basic.alert)
    return (
        <>
            <Header />
            {alert && <Alert />}
            <Routes>
                <Route path='/list' element={<ItemList />} />
                <Route path='/detail' element={<Detail />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/ask' element={<CustomerQA />} />
                <Route path='/buy' element={<BuyBox />} />
                <Route path='/buy/end' element={<BuyComplete />} />
                <Route path='/event2' element={<EventPage2 />} />
                <Route path='/*' element={<Index />} />
            </Routes>
        </>
    )
}
export default React.memo(Home);