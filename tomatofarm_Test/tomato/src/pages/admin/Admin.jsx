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


const Admin = () => {
    const [sideBarOpen, setSideBarOpen] = useState(true);
    const [currLocation, setCurrLocation] = useState(null);
    const alert = useSelector(state => state.basic.alert)
    const openSideBar = () => {
        setSideBarOpen(!sideBarOpen);
    };

    useEffect(() => {
        axios.get(`http://localhost:8090/visit/update`, {
            params: {
                page: 'admin'
            }
        })
    }, [])


    return (
        <>
            <SideMenu currLocation={currLocation} openSideBar={openSideBar} sideBarOpen={sideBarOpen} />
            {alert && <Alert />}
            <div id="adminContents" style={{ marginLeft: sideBarOpen ? '100px' : '65px' }}>
                <Routes>
                    <Route path='/select' element={<Admin_data />} />
                    <Route path='/ask' element={<Admin_ask />} />
                    <Route path='/chatbot' element={<Admin_Chatbot />} />
                    <Route path='/graph' element={<Graph />} />
                </Routes>
            </div>
        </>
    );
}

export default Admin;