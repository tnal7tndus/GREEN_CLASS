import { useEffect, useMemo, useRef, useState } from 'react';
import './LoginBG.css';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { SERVER_RESOURCE } from '../../../model/server-config';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginRequest, loginSuccess } from '../../redux/user/action';
import { api } from '../../../model/model'
import { getUserCart } from '../../redux/userCart/action';
import { changeAdmin, changeAlert } from '../../redux/basic/actions';

const LoginBG = () => {
    console.log('LoginBG 랜더링')
    const user = JSON.parse(sessionStorage.getItem('userinfo'));
    const passwordBox = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginValue, setLoginValue] = useState({
        value: {
            id: '',
            password: '',
        },
        error: {
            id: null,
            password: null,
        },
        check: {
            id: false,
            password: false,
        },
        isLoginable: false
    })

    const checkId = (event) => {
        const value = event.target.value;
        const idBox = event.target.closest('div');
        let message = '';
        let check = false;
        let key = /[a-z.0-9.-._]/gi;

        if (value.length < 4 || value.length > 15) {
            idBox.style.border = "2px solid #FF3F3F";
            idBox.children[0].style.color = "#FF3F3F";
            message = `아이디 : 4 ~ 15 글자 이하만 가능합니다.`;
        } else if (value.replace(key, '').length > 0) {
            idBox.style.border = "2px solid #FF3F3F";
            idBox.children[0].style.color = "#FF3F3F";
            message = `아이디 : 영문, 숫자, 특수문자(-, _)만 가능합니다.`;
        } else {
            idBox.style.border = "2px solid #03C75A";
            idBox.children[0].style.color = "#03C75A";
            check = true;
        }
        return {
            message: message,
            check: check
        }
    }

    const checkPassword = (event) => {
        let value = event.target.value;
        let message = '';
        let check = false;
        let key = /[a-z.0-9.!-*.@]/gi;

        if (value.length < 4 || value.length > 14) {
            passwordBox.current.style.border = "2px solid #FF3F3F";
            passwordBox.current.children[0].style.color = "#FF3F3F";
            message = `비밀번호 : 4 ~ 15 글자 이하만 입력해주세요.`;
        } else if (value.replace(key, '').length > 0) {
            passwordBox.current.style.border = "2px solid #FF3F3F";
            passwordBox.current.children[0].style.color = "#FF3F3F";
            message = `비밀번호 : 영문, 숫자, 특수문자(!,@,#,$,%,^,&,*)만 가능합니다.`;
        } else if (value.replace(/[!-*.@]/gi, '').length >= value.length) {
            passwordBox.current.style.border = "2px solid #FF3F3F";
            passwordBox.current.children[0].style.color = "#FF3F3F";
            message = `비밀번호 : 특수문자(!,@,#,$,%,^,&,*)를 반드시 포함해주세요.`;
        } else {
            passwordBox.current.style.border = "2px solid #03C75A";
            passwordBox.current.children[0].style.color = "#03C75A";
            check = true;
        }

        return {
            message: message,
            check: check
        }
    }

    const changeOpacity = (event) => {
        let box = event.target.closest('div')
        box.style.zIndex = '2';
        for (let e of box.children) {
            e.style.opacity = "1";
        }
        box.style.border = "2px solid #9B1B30";
    }

    const handleInputChange = (event, handle) => {
        if (event.key === 'Enter') {
            requestLogin();
        }
        let result = {
            message: '',
            check: false
        }
        if (handle) result = handle(event);
        valueChange(event, result.message, result.check);
    }

    const handelInputBlur = (event, handle) => {
        event.target.closest('div').style.zIndex = '1';
        let result = {
            message: '',
            check: false
        }
        if (handle) result = handle(event);
    }

    const valueChange = (event, message, check) => {
        setLoginValue(loginValue => ({
            ...loginValue,
            value: {
                ...loginValue.value,
                [event.target.name]: event.target.value,
            },
            error: {
                ...loginValue.error,
                [event.target.name]: message
            },
            check: {
                ...loginValue.check,
                [event.target.name]: check
            }
        }))
    }

    const toggleJoinButton = () => {
        loginValue.check.id && loginValue.check.password ?
            setLoginValue(loginValue => ({ ...loginValue, isLoginable: true })) : setLoginValue(loginValue => ({ ...loginValue, isLoginable: false }));
    }

    useMemo(toggleJoinButton, [loginValue.check]);

    const requestLogin = (loginValue) => {
        return async (dispatch) => {
            const cart = localStorage.getItem('cart');
            dispatch(loginRequest(loginValue.value.id));
            try {
                const response = await api('/user/login', 'post', loginValue.value);
                sessionStorage.setItem('userinfo', JSON.stringify({
                    token: response.data.token,
                    username: response.data.username,
                    login: true,
                    id: response.data.id,
                    keyword: response.data.keyword
                }));
                if (cart) {
                    dispatch(getUserCart('/usercart/merge', 'post', cart, response.data.token));
                    localStorage.removeItem('cart');
                }
                if (response.data.error) {
                    dispatch(changeAlert({
                        title: '로그인 실패!',
                        content: `${response.data.error}`,
                        time: 3,
                        style: {
                            top: '10px',
                            left: 'calc(50% - 150px)'
                        }
                    }));
                } else {
                    dispatch(changeAlert({
                        title: '로그인 성공!',
                        content: `${response.data.username} 님 환영합니다!`,
                        time: 3,
                        style: {
                            top: '10px',
                            left: 'calc(50% - 150px)'
                        }
                    }));
                    navigate("/home")
                }
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    const handleLogin = () => {
        dispatch(requestLogin(loginValue));
    };


    const handleKeyUp = (event) => {
        if (event.key == 'Enter') {
            if (event.target.name == 'id')
                passwordBox.current.children[1].focus()
            requestLogin(loginValue)(dispatch);
        }
    };

    return (
        <div id="loginBG">
            <Link to="/home"><img id="logo" src={SERVER_RESOURCE + `/img/logo.png`} alt="logo" /></Link>
            <form id="loginBox" action="/tomatoFarm/member/login" method="post">
                <div id="idBox">
                    <i className="fa-solid fa-circle-user"></i>
                    <input id="id" type="text" name="id" placeholder="아이디"
                        autoComplete='off'
                        value={loginValue.value.id}
                        onKeyUp={handleKeyUp}
                        onChange={(event) => handleInputChange(event, checkId)}
                        onBlur={(event) => handelInputBlur(event, checkId)}
                        onFocus={(event) => changeOpacity(event)} />
                </div>
                <div id="passwordBox" ref={passwordBox}>
                    <i className="fa-solid fa-key"></i>
                    <input id="password" type="password" name="password" placeholder="비밀번호"
                        value={loginValue.value.password} autoComplete="false"
                        onKeyUp={handleKeyUp}
                        onChange={(event) => handleInputChange(event, checkPassword)}
                        onBlur={(event) => handelInputBlur(event, checkPassword)}
                        onFocus={(event) => changeOpacity(event)} />
                </div>
                <div id="errorBox">
                    <p id="idError">{loginValue.error.id}</p>
                    <p id="pwError">{loginValue.error.password}</p>
                </div>

                <button onClick={handleLogin} type="button" id="loginBtn"
                    style={{ opacity: loginValue.isLoginable ? '1' : '0.3' }} disabled={!loginValue.isLoginable}>로그인</button>
            </form>
            <p id="successOrNot">
            </p>
            <ul id="search">
                <li>아이디 찾기</li>
                <li>비밀번호 찾기</li>
                <li><Link to="/member/signup">회원가입</Link></li>
            </ul>
        </div>
    );
}

export default LoginBG;