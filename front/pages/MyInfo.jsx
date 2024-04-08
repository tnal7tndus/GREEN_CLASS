import '../styles/Main.css';
import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from "../service/app-config";
import { getStorageData } from '../service/apiService';

export default function MyInfo() {    

    const [userInfo, setUserInfo] = useState(null); 
    // => 출력할 Data userInfo 정의
    useEffect(() => { 
        if ( getStorageData() !== null )  setUserInfo(getStorageData());
        else alert (' 출력할 내용이 없습니다 ~~ '); }, []);
    // => 서버에서 가져와 sessionStorage에 담아놓은 Data 를
    //    getStorageData() 함수로 꺼내어 UserInfo 에 담기.    

    // => 데이터를 받아올 때까지 로딩 표시
    if (userInfo === null) {
        return (
            <div style={{ fontWeight: 'bold', fontSize: 30, height: 600 }}>
                Loading...
            </div>
        );
    }else 
    // => 데이터 출력
        return (
            <div>
            <div className="contents">  
                <p className="pageTitle">** MyInformaion **</p>
                <table className="userinfoTable">
                <tbody>
                    <tr><th style={{backgroundColor:'AliceBlue', height:'30px'}}>I D</th>
                        <td>{userInfo.id}</td></tr>
                    <tr><th style={{backgroundColor:'Snow', height:'30px'}}>Name</th>
                        <td>{userInfo.name}</td></tr>
                    <tr><th style={{backgroundColor:'AliceBlue', height:'30px'}}>AGE</th>
                        <td>{userInfo.age}</td></tr>
                    <tr><th style={{backgroundColor:'AliceBlue', height:'30px'}}>JNO</th>
                        <td>{userInfo.jno}</td></tr>
                    <tr><th style={{backgroundColor:'AliceBlue', height:'30px'}}>Info</th>
                        <td>{userInfo.info}</td></tr>
                    <tr><th style={{backgroundColor:'AliceBlue', height:'30px'}}>Point</th>
                        <td>{userInfo.point}</td></tr>
                    <tr><th style={{backgroundColor:'AliceBlue', height:'30px'}}>Birthday</th>
                        <td>{userInfo.birthday}</td></tr>
                    <tr><th style={{backgroundColor:'AliceBlue', height:'30px'}}>추천인</th>
                        <td>{userInfo.rid}</td></tr>  
                    <tr><th style={{backgroundColor:'AliceBlue'}}>Image</th>
                        <td><img alt="MyImage" 
                                src={`${API_BASE_URL}/resources/uploadImages/${userInfo.uploadfile}`} width={50} height={70} />
                            {/* Front public/uploadImages: src={'../uploadImages/'+userInfo.uploadfile} 
                                Server: http://localhost:8080/resources/uploadImages/apple.png 
                                        src={API_BASE_URL+'/resources/uploadImages/'+userInfo.uploadfile}
                                */}
                        </td></tr>
                </tbody>
                </table>
            </div>  
            </div>
        ); //return
    } //MyInfo
