import '../styles/Main.css';
import React, { useState, useEffect } from 'react';
import { getStorageData } from '../service/apiService';

export default function BList() {
    
  const [list, setList] = useState(null); 
  // => 출력할 Data list 정의
     
  useEffect(() => { 
    if ( getStorageData() !== null )  setList(getStorageData());
    else alert (' 출력할 내용이 없습니다 ~~ '); }, []);
  // => 서버에서 가져와 sessionStorage에 담아놓은 Data(BoardList) 를
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
              <p className="pageTitle">** BoardList **</p>
              <table className="listTable" style={{width:'100%'}}>
                <thead>
                  <tr style={{backgroundColor:'AliceBlue', height:'20px'}}>
                    <th>Seq</th><th style={{textAlign:'left'}}>&nbsp;Title</th>
                    <th style={{textAlign:'left'}}>&nbsp;ID</th><th>RegDate</th><th>조회수</th>
                  </tr>
                </thead>  
                <tbody>
                  {list.map((item, i) => (
                      <tr key={'listitem' + i}>
                        <td style={{width:'50px'}}>{item.seq}</td>
                        <td style={{textAlign:'left'}}>
                          {item.indent===0 ? item.title: (item.indent===1 ? '_re..'+item.title : '___re..'+item.title)}</td>
                        <td style={{textAlign:'left'}}>{item.id}</td><td>{item.regdate}</td><td>{item.cnt}</td>
                      </tr>
                      )) }
                </tbody>
              </table>
            </div>  
          </div>
      ); //return
} //MyInfo
