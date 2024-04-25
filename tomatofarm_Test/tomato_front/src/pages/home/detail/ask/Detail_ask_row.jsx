import { useState } from 'react';
import './Detail_ask_row.css';
import axios from 'axios';
import { SERVER_URL } from '../../../../model/server-config';


const Detail_ask_row = ({ itemAsk }) => {
    const [askDetail, setAskDetail] = useState(false);
    const [askPassword, setAskPassword] = useState("");
    const [passwordSubmit, setPasswordSubmit] = useState(false);
    const [passwordFail, setPasswordFail] = useState(true);

    const showContentP = () => {
        // 비밀번호 있는 글 = 비밀번호 확인 후 보여주기
        setAskDetail(!askDetail);
    }

    const checkPassword = (event) => {
        event.stopPropagation();
        axios.post(SERVER_URL + `/itemask/askpassword`, {
            seq: itemAsk.seq,
            password: askPassword,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setPasswordSubmit(true);
        }).catch(err => {
            setPasswordFail();
        });
    }

    const showContent = () => {
        // 비밀번호 없는 글 보여주기
        setAskDetail(!askDetail);
    }

    const PasswordChange = (event) => {
        setAskPassword(event.target.value);
    }

    return (
        <div onClick={itemAsk.password == null ? showContent : showContentP} className="boardAnswer">
            <div>
                <div>
                    {
                        itemAsk.password != null ?
                            <i className="fa-solid fa-lock"></i>
                            :
                            <i className="fa-solid fa-lock-open"></i>
                    }
                </div>
                <div className="boardAnswer_reply">{itemAsk.reply ? '답변' : '미답변'}</div>
                <div className="boardAnswer_title">{itemAsk.title}</div>
                <div className="boardAnswer_writer">{itemAsk.writer}</div>
                <div className="boardAnswer_regdate">
                    {
                        new Date().getFullYear() == new Date(itemAsk.regdate).getFullYear() &&
                            new Date().getMonth() == new Date(itemAsk.regdate).getMonth() &&
                            new Date().getDate() == new Date(itemAsk.regdate).getDate() ?
                            new Date(itemAsk.regdate).getHours() + ' : ' + new Date(itemAsk.regdate).getMinutes()
                            :
                            new Date(itemAsk.regdate).getMonth() + '. ' + new Date(itemAsk.regdate).getDate()
                    }
                </div>
            </div>
            {
                askDetail ?
                    itemAsk.password == null ?
                        <div className="boardAnswer_content">
                            {itemAsk.contents}
                            {itemAsk.reply &&
                                <div>
                                    🍅🍅🍅🍅🍅답변🍅🍅🍅🍅🍅<br />
                                    {itemAsk.reply}
                                </div>
                            }
                        </div>
                        :
                        passwordSubmit ?
                            <div className="boardAnswer_content">
                                {itemAsk.contents}
                                {itemAsk.reply &&
                                    <div>
                                        🍅🍅🍅🍅🍅답변🍅🍅🍅🍅🍅<br />
                                        {itemAsk.reply}
                                    </div>
                                }
                            </div>
                            :
                            passwordFail ?
                                <div onClick={(e) => e.stopPropagation()} id='passwordCheck'>
                                    <input type="password" value={askPassword} onChange={PasswordChange} placeholder="4자리 숫자 입력" maxLength="4" />
                                    <button onClick={checkPassword}>확인</button>
                                </div>
                                :
                                <div id='passwordCheck'>
                                    <input type="password" value={askPassword} onClick={(e) => e.stopPropagation()} onChange={PasswordChange} placeholder="비밀번호 입력" />
                                    <button onClick={checkPassword}>확인</button> <br></br><p>비밀번호가 틀렸습니다. 다시 입력해주세요</p>
                                </div>
                    :
                    null
            }
        </div>
    );
}

export default Detail_ask_row;