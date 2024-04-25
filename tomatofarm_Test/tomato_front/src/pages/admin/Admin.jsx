import { useEffect, useState } from "react";
import "./Admin.css";
import SideMenu from './sideMenu/SideMenu';
import Graph from "./graph/Graph";
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';



import Admin_Chatbot from './admin_chatbot/Admin_Chatbot';
import Admin_data from "./admin_data/Admin_data";
import Admin_ask from "./admin_ask/Admin_ask";
import Alert from "../components/alert/Alert";
import { useSelector } from "react-redux";
import { api } from "../../model/model";
import Error from "../components/Error";
import Index from './index/Index';
import Admin_insert from "./admin_insert/Admin_insert";


const Admin = () => {
    const [sideBarOpen, setSideBarOpen] = useState(true);
    const alert = useSelector(state => state.basic.alert);
    const user = JSON.parse(sessionStorage.getItem('userinfo'));
    const [forbiden, setForbiden] = useState(true);
    const openSideBar = () => {
        setSideBarOpen(!sideBarOpen);
    };
    useEffect(() => {
        if (user)
            api('/user/admincheck', 'get', null, user.token)
                .then(res => {
                    setForbiden(!res.data)
                })
    }, [])

    if (forbiden) return <Error />
    return (
        <>
            <SideMenu openSideBar={openSideBar} sideBarOpen={sideBarOpen} />
            {alert && <Alert />}
            <div id="adminContents" style={{ marginLeft: sideBarOpen ? '100px' : '65px' }}>
                <Routes>
                    <Route path='/select' element={<Admin_data />} />
                    <Route path='/ask' element={<Admin_ask />} />
                    <Route path='/chatbot' element={<Admin_Chatbot />} />
                    <Route path='/graph' element={<Graph />} />
                    <Route path='/' element={<Index />} />
                    <Route path='/insert' element={<Admin_insert />} />
                </Routes>
            </div>
        </>
    );
}

export default Admin;