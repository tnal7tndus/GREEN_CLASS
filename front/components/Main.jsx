//import React, { useState } from 'react';
import '../styles/Main.css';
import { Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Join from '../pages/Join';
import MyInfo from '../pages/MyInfo';
import MList from '../pages/MList';
import BList from '../pages/BList';
import MainDefault from '../pages/MainDefault';

function Main({ token, onLoginSubmit }) {

    return (
        <div>
        <Routes>
            <Route path="/login" 
                   element={<Login onLoginSubmit={onLoginSubmit}/>}/>
            <Route path="/join" element={<Join />} />
            <Route path="/auth/userdetail" element={<MyInfo />} />
            <Route path="/auth/memberlist" element={<MList />} />
            <Route path="/user/boardlist" element={<BList />} />
            <Route path="/" element={<MainDefault />} />
        </Routes>
        </div>
    );
}

export default Main;
