import '../styles/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { apiCall } from '../service/apiService';

function Header({ userName, token, isLoggedIn, onLogout }) {
    // ** 우측메뉴 처리에 대해 수정사항
    // => 현재는 Link 로 넘기고 각 Page 에서 fetchData 를 처리하지만,
    //    화면 흐름상 메뉴 클릭시 fetchData 결과에 따라 화면이동 하는것이 좋을듯

    // ** 서버연결 확인 하기
    const serverTest = () => {
        let url='/user/check-server';
        apiCall(url, 'GET', null, null)
        .then((response) => {
            alert(`** 서버 API 연결 성공 => ${response.checkData}`);
            // apiCall 에서는 response.data 값을 return 함.
        }).catch((err) => {
            alert(`** 서버 API 연결 실패 => ${err}`);
        });
    } //serverTest
    // 🐬📯 🐋 🐳 🎶
    const navigate = useNavigate();
    // ** Server 요청 함수
    const serverDataRequest = (url) => {
        apiCall(url, 'GET', null, token)
        .then((response) => {
            alert(`** serverDataRequest 성공 url=${url}`);
            sessionStorage.setItem("serverData", JSON.stringify(response));
            navigate(url);
        }).catch((err) => {
            if (err.response.status===403) {
                alert(`** Server Reject : 접근권한이 없습니다. => ${err.response.status}`);
            }else if (err===502) { alert(`** 처리도중 오류 발생, err=${err}`);
            }else { alert(`** serverDataRequest 시스템 오류, err=${err}`); }
        }); //apiCall
    } //serverDataRequest

    return (
        <div className="headerTop">
            <h2 style={{ color:'#444444'}}>  Full_Stack SpringBoot & React  🎵</h2>
            <div className="headerLeft">
                <span onClick={serverTest} className="textlink">Server</span>&nbsp;&nbsp;
                <a href='http://localhost:8080/home' >SHome</a>&nbsp;&nbsp;
                <Link to="/">FHome</Link>
            </div>
            <div className="serviceTab">
                <ul className="serviceTabList">{ isLoggedIn ? 
                    ( <>
                        <li>{userName}님</li>
                        <li><Link to="/" onClick={onLogout}>로그아웃</Link></li>
                        {/* <li><Link to="/myinfo/">마이페이지</Link></li> */}
                        <li><span onClick={() => { serverDataRequest("/auth/userdetail") }} 
                                  className="textlink">마이페이지</span></li>
                        <li><span onClick={() => { serverDataRequest("/auth/memberlist") }} 
                                  className="textlink">MList</span></li>
                        <li><span onClick={() => { serverDataRequest("/user/boardlist") }} 
                                  className="textlink">BList</span></li>
                        </> ) : 
                    ( <>
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/join">회원가입</Link></li>
                        </> ) }
                </ul>
            </div>
        </div> //headerTop
    ); //return
} //Header

export default Header;
