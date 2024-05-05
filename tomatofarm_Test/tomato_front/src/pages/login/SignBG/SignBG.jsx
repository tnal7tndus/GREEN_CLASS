import { Link, useNavigate } from "react-router-dom";
import "./SignBG.css"
import { useMemo, useState } from "react";
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { SERVER_RESOURCE } from "../../../model/server-config";
import { api } from "../../../model/model";
import { changeAlert } from "../../redux/basic/actions";
import { useDispatch } from "react-redux";
import AddressWrite from './AddressWrite';


const SignBG = ({ }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [addressBox, setAddressBox] = useState(false)

    const [signValue, setSignValue] = useState({
        value: {
            id: '',
            password: '',
            username: '',
            phonenumber: '',
            addressCode: '',
            address1: '',
            address2: '',
            email: '',
            emailBack: '',
            gender: '',
            year: '',
            month: '',
            day: ''
        },
        error: {
            id: null,
            password: null,
            username: null,
            phonenumber: null,
            address: null,
            email: null,
            emailBack: null,
            gender: null,
            year: null,
            month: null,
            day: null
        },
        check: {
            id: false,
            password: false,
            username: false,
            phonenumber: false,
        },
        isJoinable: false
    })

    const changeOpacity = (event) => {
        let box = event.target.closest('div')
        box.style.zIndex = '2';
        for (let e of box.children) {
            e.style.opacity = "1";
        }
        box.style.border = "2px solid #9B1B30";
    }

    const handleInputChange = (event, handle) => {
        if (event.target.id == 'emailSelectBox' && event.target.value == "") {
            event.target.style.display = 'none';
            event.target.previousElementSibling.style.display = 'initial';
        }
        let box = event.target.closest('div')
        box.style.zIndex = '1';
        let result = {
            message: '',
            check: false
        }
        if (handle) result = handle(event);
        valueChange(event, result.message, result.check);
        toggleJoinButton();
    }

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
        const passwordBox = event.target.closest('div');
        let message = '';
        let check = false;
        let key = /[a-z.0-9.!-*.@]/gi;

        if (value.length < 4 || value.length > 14) {
            passwordBox.style.border = "2px solid #FF3F3F";
            passwordBox.children[0].style.color = "#FF3F3F";
            message = `비밀번호 : 4 ~ 15 글자 이하만 입력해주세요.`;
        } else if (value.replace(key, '').length > 0) {
            passwordBox.style.border = "2px solid #FF3F3F";
            passwordBox.children[0].style.color = "#FF3F3F";
            message = `비밀번호 : 영문, 숫자, 특수문자(!,@,#,$,%,^,&,*)만 가능합니다.`;
        } else if (value.replace(/[!-*.@]/gi, '').length >= value.length) {
            passwordBox.style.border = "2px solid #FF3F3F";
            passwordBox.children[0].style.color = "#FF3F3F";
            message = `비밀번호 : 특수문자(!,@,#,$,%,^,&,*)를 반드시 포함해주세요.`;
        } else {
            passwordBox.style.border = "2px solid #03C75A";
            passwordBox.children[0].style.color = "#03C75A";
            check = true;
        }

        return {
            message: message,
            check: check
        }
    }

    const checkName = (event) => {
        let value = event.target.value;
        const nameBox = event.target.closest('div');
        let message = '';
        let check = false;
        if (value.length < 2 || value.length > 10) {
            nameBox.style.border = "2px solid #FF3F3F";
            nameBox.children[0].style.color = "#FF3F3F";
            message = `이름 : 2글자 이상 10글자 이하로 입력하세요.`;
        } else if (value.replace(/[a-z.가-힣]/gi, '').length > 0) {
            nameBox.style.border = "2px solid #FF3F3F";
            nameBox.children[0].style.color = "#FF3F3F";
            message = `이름은 한글, 영문만 입력하세요.`;
        } else {
            nameBox.style.border = "2px solid #03C75A";
            nameBox.children[0].style.color = "#03C75A";
            check = true;
        }
        return {
            message: message,
            check: check
        }
    }

    const checkPhonenumber = (event) => {
        let value = event.target.value;
        const phonenumberBox = event.target.closest('div');
        let message = '';
        let check = false;

        if (value.length < 10 || value.length > 11) {
            phonenumberBox.style.border = "2px solid #FF3F3F";
            phonenumberBox.children[0].style.color = "#FF3F3F";
            message = `전화번호는 9자리 ~ 12자리 숫자로 입력해주세요.`;
        } else if (value.replace(/[0-9]/gi, '').length > 0) {
            phonenumberBox.style.border = "2px solid #FF3F3F";
            phonenumberBox.children[0].style.color = "#FF3F3F";
            message = `전화번호는 숫자만 입력하세요.`;
        } else {
            check = true;
            phonenumberBox.style.border = "2px solid #03C75A";
            phonenumberBox.children[0].style.color = "#03C75A";
        }
        return {
            message: message,
            check: check
        }
    }

    const valueChange = (event, message, check) => {
        setSignValue(signValue => ({
            ...signValue,
            value: {
                ...signValue.value,
                [event.target.name]: event.target.value,
            },
            error: {
                ...signValue.error,
                [event.target.name]: message
            },
            check: {
                ...signValue.check,
                [event.target.name]: check
            }
        }))
    }

    const toggleJoinButton = () => {
        signValue.check.id && signValue.check.password && signValue.check.username && signValue.check.phonenumber ?
            setSignValue(signValue => ({ ...signValue, isJoinable: true })) : setSignValue(signValue => ({ ...signValue, isJoinable: false }));
    }

    const selectGender = (event) => {
        event.target.closest('#genderBox').style.border = "2px solid #9B1B30";
        for (let e of event.target.closest('div').children) {
            e.style.opacity = "1";
        }
        if (document.getElementById('checked')) document.getElementById('checked').removeAttribute('id');
        event.target.closest('li').setAttribute('id', 'checked');
    }

    const requestSign = () => {
        const signForm = {
            id: signValue.value.id,
            password: signValue.value.password,
            name: signValue.value.username,
            phonenumber: signValue.value.phonenumber,
            addressCode: signValue.value.addressCode,
            address1: signValue.value.address1,
            address2: signValue.value.address2,
            email: signValue.value.email + '@' + signValue.value.emailBack,
            gender: signValue.value.gender,
            birthdate: new Date(`${signValue.value.year}-${signValue.value.month}-${signValue.value.day}`),
        }
        api('/user/signup', 'post', signForm)
            .then(res => {
                setLoading(false);
                dispatch(changeAlert({
                    title: '회원가입 성공!',
                    content: `로그인 후 홈페이지를 이용해주세요!`,
                    time: 3,
                    style: {
                        top: '10px',
                        left: 'calc(50% - 150px)',
                        position: 'absolute'
                    }
                }));
                navigate('/member')
            }).catch(err => {
                console.log(err.message)
                setLoading(false);
                setError(true);
            });
    }

    const blurIdInput = (event) => {
        const idBox = event.target.closest('div');
        handleInputChange(event, checkId)
        api('/user/checkid?id=' + signValue.value.id, 'get')
            .then(res => {
                if (res.data != 'OK'){
                    idBox.style.border = "2px solid #FF3F3F";
                    idBox.children[0].style.color = "#FF3F3F";
                    setSignValue((prev) => ({
                        ...prev,
                        error: {
                            ...prev.error,
                            id: res.data
                        }
                    }))

                }
            })
    }

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <div id="signBG">
            {addressBox && <AddressWrite setAddressBox={setAddressBox} setSignValue={setSignValue} />}
            <div id="signform">
                <Link to="/home"><img id="logo" src={SERVER_RESOURCE + `/img/logo.png`} alt="logo" /></Link>
                <h3>회원가입</h3>
                <form id="signUpBox" action="signup" method="post">
                    <p id="writeOption"><i className="fa-solid fa-check"></i>&nbsp;&nbsp;필수 입력 사항</p>
                    <div id="idBox">
                        <i className="fa-solid fa-user"></i>
                        <input type="text" name="id" placeholder="아이디" value={signValue.value.id}
                            onChange={(event) => handleInputChange(event, checkId)}
                            onBlur={blurIdInput}
                            onFocus={changeOpacity} />
                    </div>
                    <div id="passwordBox">
                        <i className="fa-solid fa-key"></i>
                        <input type="password" name="password" placeholder="비밀번호" value={signValue.value.password} autoComplete="false"
                            onChange={(event) => handleInputChange(event, checkPassword)}
                            onBlur={(event) => handleInputChange(event, checkPassword)}
                            onFocus={changeOpacity} />
                    </div>
                    <div id="nameBox">
                        <i className="fa-solid fa-circle-user"></i>
                        <input type="text" name="username" placeholder="이름" value={signValue.value.username}
                            onChange={(event) => handleInputChange(event, checkName)}
                            onBlur={(event) => handleInputChange(event, checkName)}
                            onFocus={changeOpacity} />
                    </div>
                    <div id="phonenumberBox">
                        <i className="fa-solid fa-phone"></i>
                        <input type="text" name="phonenumber" placeholder="전화번호" value={signValue.value.phonenumber}
                            onChange={(event) => handleInputChange(event, checkPhonenumber)}
                            onBlur={(event) => handleInputChange(event, checkPhonenumber)}
                            onFocus={changeOpacity} />
                    </div>
                    <div id="errorBox">
                        {signValue.error.id ? <p><i className="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;{signValue.error.id}</p> : <></>}
                        {signValue.error.password ? <p><i className="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;{signValue.error.password}</p> : <></>}
                        {signValue.error.username ? <p><i className="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;{signValue.error.username}</p> : <></>}
                        {signValue.error.phonenumber ? <p><i className="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;{signValue.error.phonenumber}</p> : <></>}
                    </div>
                    <p id="selectOption"><i className="fa-solid fa-check"></i>&nbsp;&nbsp;선택 입력 사항</p>
                    <div id="addressBox" onClick={() => setAddressBox(true)}>
                        <i className="fa-solid fa-location-dot"></i>
                        <input type="text" name="address" placeholder="주소"
                            value={signValue.value.address2.length > 0 ? `[${signValue.value.addressCode}] ${signValue.value.address1}, ${signValue.value.address2}` : ''}
                            onChange={handleInputChange}
                            onFocus={changeOpacity} />
                    </div>
                    <div id="emailBox">
                        <i className="fa-solid fa-envelope"></i>
                        <input type="text" name="email" placeholder="이메일" value={signValue.value.email}
                            onFocus={changeOpacity}
                            onChange={handleInputChange} />
                        <i className="fa-solid fa-at"></i>
                        <input type="text" name="emailBack" id="emailWriteBox" value={signValue.value.emailBack}
                            onFocus={changeOpacity}
                            onChange={handleInputChange} />
                        <select id="emailSelectBox" name="emailBack"
                            onFocus={changeOpacity}
                            onChange={handleInputChange} >
                            <option value="no">이메일 선택</option>
                            <option value="naver.com">naver.com</option>
                            <option value="daum.net">daum.net</option>
                            <option value="google.com">google.com</option>
                            <option value="nate.com">nate.com</option>
                            <option value="">직접입력</option>
                        </select>
                    </div>
                    <div id="genderBox">
                        <i className="fa-solid fa-person-half-dress"></i>
                        <span>성별</span>
                        <ul id="genderUl">
                            <label>
                                <li onClick={selectGender}>
                                    <input type="radio" name="gender" value="0" checked={signValue.value.gender === "0"}
                                        onChange={handleInputChange} />
                                    남자
                                </li>
                            </label>
                            <label>
                                <li onClick={selectGender}>
                                    <input type="radio" name="gender" value="1" checked={signValue.value.gender === "1"}
                                        onChange={handleInputChange}
                                    />
                                    여자
                                </li>
                            </label>
                        </ul>
                    </div>
                    <div id="birthdayBox">
                        <i className="fa-solid fa-cake-candles"></i>
                        <input type="number" name="year" placeholder="yyyy" maxLength="4" value={signValue.value.year}
                            onFocus={changeOpacity}
                            onChange={handleInputChange}
                        />
                        <input type="number" name="month" placeholder="mm" maxLength="2" value={signValue.value.month}
                            onFocus={changeOpacity}
                            onChange={handleInputChange}
                        />
                        <input type="number" name="day" placeholder="dd" maxLength="2" value={signValue.value.day}
                            onFocus={changeOpacity}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="button" onClick={requestSign} id="joinBox" style={{ opacity: signValue.isJoinable ? '1' : '0.3' }} disabled={!signValue.isJoinable}>가입하기</button>
                </form>
                <br />
                <p id="successOrNot"></p>
            </div>
        </div>
    );
}

export default SignBG;