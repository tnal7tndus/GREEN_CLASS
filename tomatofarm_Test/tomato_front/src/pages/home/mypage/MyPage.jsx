
import './MyPage.css'
import OrderList from './orderList/OrderList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { api } from '../../../model/model';
import { changeAlert } from '../../redux/basic/actions';
import AddressWrite from '../../login/SignBG/AddressWrite';
import { makeComa } from '../../components/MathFunction';

const MyPage = () => {
    console.log('MyPage 렌더링');

    const [privacyModal, setPrivacyModal] = useState(false);
    const [userData, setUserData] = useState({
        userinfo: {

        },
        userAddress: {

        },
        userOrder: []
    });

    const user = JSON.parse(sessionStorage.getItem('userinfo'));

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [addressBox, setAddressBox] = useState(false)
    const [signValue, setSignValue] = useState({
        value: {
            id: '',
            password: '',
            name: '',
            phonenumber: '',
            email: '',
            emailBack: '',
            addressCode: '',
            address1: '',
            address2: '',
        },
        error: {
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
            password: false,
            username: true,
            phonenumber: true,
        },
        isJoinable: false
    })


    useEffect(() => {
        api(`/user/selectwhere?column=id&keyword=${user && user.id}`, 'get', null, user.token)
            .then(res => {
                setUserData((pre => ({
                    ...pre,
                    userinfo: res.data[0]
                })))
            })
            .catch(err => console.log(err.message));
        api(`/order/selectwhere`, 'get', null, user.token)
            .then(res => {
                setUserData((pre => ({
                    ...pre,
                    userOrder: res.data
                })))
                console.log(res.data);
            })
            .catch(err => console.log(err.message));
    }, [])

    const showMoreOrder = (e) => {
        if (e.target.parentNode.className == 'order_long') {
            e.target.parentNode.className = 'order_short';
        } else {
            e.target.parentNode.className = 'order_long';
        }
    }

    const deleteUser = () => {
        // if (confirm("정말 삭제하시겠습니까?")) {
        //     api(`user/delete`, 'get', null, user.token)
        //         .then(res => console.log(res.data))
        //         .catch(err => console.log(err.message));
        // }
        api(`/user/delete`, 'get', null, user.token)
            .then(res => {
                dispatch(changeAlert({
                    title: '탈퇴 성공',
                    content: res.data,
                    time: 3,
                    style: {
                        top: '10px',
                        left: 'calc(50% - 150px)',
                        position: 'absolute'
                    }
                }));
            })
            .catch(err => {
                dispatch(changeAlert({
                    title: '탈퇴 실패',
                    content: err.message,
                    time: 3,
                    style: {
                        top: '10px',
                        left: 'calc(50% - 150px)',
                        position: 'absolute'
                    }
                }));
                console.log(err.message)
            });
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

    const requestModify = () => {
        const signForm = {
            id: userData.userinfo.id,
            password: signValue.value.password,
            name: signValue.value.name,
            phonenumber: signValue.value.phonenumber,
        }
        api('/user/modify', 'post', signForm)
            .then(res => {
                setLoading(false);
                dispatch(changeAlert({
                    title: '정보수정 성공!',
                    content: res.data,
                    time: 3,
                    style: {
                        top: '10px',
                        left: 'calc(50% - 150px)',
                        position: 'absolute'
                    }
                }));
                setPrivacyModal(!privacyModal);
            }).catch(err => {
                dispatch(changeAlert({
                    title: '정보수정 성공!',
                    content: err.message,
                    time: 3,
                    style: {
                        top: '10px',
                        left: 'calc(50% - 150px)',
                        position: 'absolute'
                    }
                }));
                console.log(err.message)
                setLoading(false);
                setError(true);
                setPrivacyModal(!privacyModal);
            });
    }


    return (
        <>
            <div id='mypageContainer' className='container'>
                <div id='privacyBox'>
                    <div id='privacy_img'>
                        <img src="" alt="" />
                    </div>
                    <div id='privacy_detail'>
                        <div>
                            <div><span><i className="fa-solid fa-address-card"></i></span>{userData && userData.userinfo.id}</div>
                            <div><span></span>[ {userData && userData.userinfo.name} ]</div>
                        </div>
                        <div>
                            <div><span><i className="fa-solid fa-envelope"></i></span>asd123@naver.com</div>
                        </div>
                        <div>
                            <div><span><i className="fa-solid fa-phone"></i></span>{userData && userData.userinfo.phonenumber}</div>
                        </div>
                        <div>
                            <div><span><i className="fa-solid fa-coins"></i></span>{userData && userData.userinfo.point} 포인트</div>
                        </div>
                        <div id='privacy_detail_Btn'>
                            <button onClick={() => setPrivacyModal(!privacyModal)}>개인정보 수정</button>
                            <button onClick={deleteUser}>회원탈퇴</button>
                        </div>
                    </div>
                </div>
                <div id='orderList' className='order_short'>
                    <OrderList />
                    <div id='moreInfo' onClick={showMoreOrder}>
                        더 보 기
                    </div>
                </div>
                {privacyModal &&
                    <div id='modalBG'>
                        <div id="signBG">
                            <div id="historyback"></div>
                            {addressBox && <AddressWrite setAddressBox={setAddressBox} />}
                            <div>
                                <form id="signUpBox" action="signup" method="post">
                                    <h3>정보 수정</h3>
                                    <div id="idBox">
                                        <i className="fa-solid fa-user"></i>
                                        <input type="text" name="id" placeholder="아이디" value={userData && userData.userinfo.id} readOnly
                                            onChange={(event) => handleInputChange(event, checkId)}
                                            onBlur={(event) => handleInputChange(event, checkId)}
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
                                        <input type="text" name="name" placeholder="이름"
                                            onChange={(event) => handleInputChange(event, checkName)}
                                            onBlur={(event) => handleInputChange(event, checkName)}
                                            onFocus={changeOpacity} />
                                        {/* value={userData && userData.userinfo.name} */}
                                        {/* value={userData && userData.userinfo.phonenumber} */}
                                    </div>
                                    <div id="phonenumberBox">
                                        <i className="fa-solid fa-phone"></i>
                                        <input type="text" name="phonenumber" placeholder="전화번호"
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
                                    <div id='changeBtnBox'>
                                        <button type="button" onClick={requestModify} className="changeBtn" style={{ opacity: signValue.isJoinable ? '1' : '0.3' }} disabled={!signValue.isJoinable}>수정하기</button>
                                        <button type="button" onClick={() => setPrivacyModal(!privacyModal)} className="changeBtn" >취소하기</button>
                                    </div>
                                </form>
                                <br />
                                <p id="successOrNot"></p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default MyPage;