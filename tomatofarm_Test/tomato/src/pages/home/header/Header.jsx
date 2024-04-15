import "./header.css";
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import { useSelector, useDispatch } from 'react-redux';
import { changeAlert, changeKeyword } from "../../redux/basic/actions";
import { useState } from "react";
import { setUser } from "../../redux/user/action";



const Header = () => {
    console.log(`Header 랜더링`);

    const keyword = useSelector(state => state.basic.keyword);
    const [recentBox, setRecentBox] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
    const logOut = () => {
        sessionStorage.removeItem('userinfo');
        dispatch(setUser(null));
        dispatch(changeAlert({
            title: '로그아웃 성공!',
            time: 3,
            style: {
                top: '10px',
                left: 'calc(50% - 150px)'
            }
        }));
    }

    const searchBox = (event) => {
        event.preventDefault();
        setRecentBox(false);
        navigate(`/home/list?keyword=${keyword}`);
    }

    function searchBoxEnterKey(event) {
        if (event.which == 13) {
            searchBox(event)
        }
    }

    const changeKeyworda = event => {
        dispatch(changeKeyword(event.target.value))
    }

    function appearinputBoxResetButton(event) {
        event.target.closest("form").children[1].style.visibility = "visible"
    }

    function resetInputBox(event) {
        const inputBox = event.target.closest('form').children[0];
        inputBox.value = '';
        inputBox.focus();
        event.target.visibility = "hidden"
    }


    return (
        <header>
            <div id="loginBar">
                <div className="container">
                    <Link to="/home/ask">고객센터</Link>
                    {
                        userinfo != null && userinfo.login ?
                            <>
                                <Link onClick={logOut}>로그아웃</Link>
                                <a> {userinfo.username} 님 </a>
                            </>
                            :
                            <>
                                <Link to="/member">로그인</Link>
                                <Link to="/member/signup">회원가입</Link>
                            </>
                    }
                    {
                        <Link to="/admin"> 관리자페이지</Link>
                    }
                </div>
            </div>
            <div id="searchBar">
                <div className="container">
                    <div id="logoBox">
                        <a href="/home">
                            <img src={"http://localhost:8090/resources" + "/img/logo.png"} alt="로고" />
                            <h1>토마토팜 tomatoFarm</h1>
                        </a>
                    </div>
                    <form id="searchBox">
                        <input onKeyUp={searchBoxEnterKey} onInput={appearinputBoxResetButton} onChange={changeKeyworda} onFocus={() => setRecentBox(true)}
                            id="searchBoxInput" type="text" placeholder="검색어를 입력해주세요." value={keyword} autoComplete="off" />
                        <i onClick={resetInputBox} className="fa-solid fa-circle-xmark"></i>
                        <button onClick={searchBox}><i className="fa-solid fa-magnifying-glass"></i></button>
                        {recentBox &&
                            <div id="recentBox">
                                <p id="recentBoxTitle">최근 검색어 </p>
                                <div><Link onClick={() => setRecentBox(false)} to="/home/list?keyword=프레시지">프레시지</Link></div>
                                <div><Link onClick={() => setRecentBox(false)} to="/home/list?keyword=스테이크">스테이크</Link></div>
                                <div><Link onClick={() => setRecentBox(false)} to="/home/list?keyword=스테이크">스테이크</Link></div>
                                <div><Link onClick={() => setRecentBox(false)} to="/home/list?keyword=스테이크">스테이크</Link></div>
                                <div><Link onClick={() => setRecentBox(false)} to="/home/list?keyword=스테이크">스테이크</Link></div>
                                <div><Link onClick={() => setRecentBox(false)} to="/home/list?keyword=스테이크">스테이크</Link></div>
                            </div>
                        }
                    </form>
                    <div id="searchRightBox">
                        <div id="myPage">
                            <a to="/">
                                <i className="fa-solid fa-user"></i>
                                마이페이지
                            </a>
                        </div>
                        <div id="myCart">
                            <Link to="/home/cart"><i className="fa-solid fa-cart-shopping"></i>
                                장바구니
                            </Link>
                        </div>
                        <div id="myItem">
                            <a href="/">
                                <i className="fa-solid fa-box-archive"></i>
                                최근 본 상품
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Nav appearinputBoxResetButton={appearinputBoxResetButton} resetInputBox={resetInputBox} />
        </header>
    );
}

export default Header;