import '../styles/Main.css';
import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from "../service/app-config";
import { getStorageData } from '../service/apiService';

export default function MList() {
    
  const [list, setList] = useState(null); 
  // => 출력할 Data list 정의
     
  useEffect(() => { 
    if ( getStorageData() !== null )  setList(getStorageData());
    else alert (' 출력할 내용이 없습니다 ~~ '); }, []);
  // => 서버에서 가져와 sessionStorage에 담아놓은 Data(MemberList) 를
  //    getStorageData() 함수로 꺼내어 list 에 담기. 

  // => 데이터를 받아올 때까지 로딩 표시
  if (list === null) {
      return (
          <div style={{ fontWeight: 'bold', fontSize: 30, height: 600 }}>
              Loading...
          </div>
      );
  }else 
      return (
          <div>
            <div className="contents">  
              <p className="pageTitle">** MemberList **</p>
              <table className="listTable">
                <thead>
                  <tr style={{backgroundColor:'AliceBlue', height:'20px'}}>
                    <th>ID</th><th>Name</th><th>Age</th><th>Jno</th><th>Info</th>
                    <th>Point</th><th>Birthday</th><th>추천인</th><th>Image</th>
                  </tr>
                </thead>  
                <tbody>
                  {list.map((item, i) => (
                      <tr key={'memberitem' + i}>
                        <td>{item.id}</td><td>{item.name}</td><td>{item.age}</td><td>{item.jno}</td>
                        <td>{item.info}</td><td>{item.point}</td><td>{item.birthday}</td><td>{item.rid}</td>
                        <td><img src={`${API_BASE_URL}/resources/uploadImages/${item.uploadfile}`} 
                                alt="MyImage" width={50} height={60} /></td>
                      </tr>
                      )) }
                </tbody>
              </table>
            </div>  
          </div>
      ); //return
} //MyInfo
