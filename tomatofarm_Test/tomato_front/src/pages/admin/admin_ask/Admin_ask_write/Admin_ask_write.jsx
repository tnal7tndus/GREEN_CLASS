
import { useState } from "react";
import "./Admin_ask_write.css";
import { SERVER_RESOURCE } from "../../../../model/server-config";
import { api } from "../../../../model/model";
import { useDispatch, useSelector } from "react-redux";
import { changeAlert } from "../../../redux/basic/actions";

const Admin_ask_write = ({ setAskList, ask, setWriteReply }) => {
    const dispatch = useDispatch();
    const user = JSON.parse(sessionStorage.getItem('userinfo'));
    const [reply, setReply] = useState({ ...ask, reply_writer: user.id });

    const handleReply = (event) => {
        setReply(prev => ({ ...prev, reply: event.target.value }));
    }
    const submitReply = (e) => {
        api('/itemask/merge', 'post', reply, user.token)
            .then(res => {
                setAskList(res.data);
                dispatch(changeAlert({
                    title: '답변 완료!',
                    content: ``,
                    time: 3,
                    style: {
                        top: '10px',
                        left: 'calc(50% - 150px)',
                        zIndex: 5
                    }
                }));
            }).catch(err => {
                console.log(err.message)
            });
        closeWriteReply(e);
    }

    const closeWriteReply = (e) => {
        if (e) {
            e.stopPropagation();
        }
        setWriteReply(false);
    }


    return (
        <div id="AskWriteReplyContainer">
            <div>
                <div className="WriteReplyBox">
                    <div className="replyTop">
                        {
                            ask.item_code ?
                                <div className="productIMG">
                                    <img src={SERVER_RESOURCE + `/img/itemImg/${ask.item_code}_2.jpg`} alt="" />
                                </div>
                                :
                                null
                        }
                        <div className="itemIntro">
                            {
                                ask.item_code ?
                                    <>
                                        <div>상품이름 :
                                            <span>{ask.item_name}</span>
                                        </div>
                                        <div>상품코드 :
                                            <span>{ask.item_code}</span>
                                        </div>
                                    </>
                                    :
                                    <div>문의유형 :
                                        <span>{ask.type}</span>
                                    </div>
                            }
                            <div>작성자 :
                                <span>{ask.writer}</span>
                            </div>
                            <div>작성일 :
                                <span>{new Date(ask.regdate).getFullYear() + '. ' + new Date(ask.regdate).getMonth() + '. ' + new Date(ask.regdate).getDate() + ' / ' + new Date(ask.regdate).getHours() + ' : ' + new Date(ask.regdate).getMinutes()}</span>
                            </div>
                        </div>
                    </div>
                    <div className="replyDetailBox">
                        <label>문의내용
                            <textarea value={ask.contents} readOnly></textarea>
                        </label>
                        <label>답변내용
                            <textarea onChange={handleReply} value={reply.reply || ''}></textarea>
                        </label>
                    </div>
                    <div id="writeButton">
                        <button onClick={closeWriteReply} id="writeCancle">취소</button>
                        <button onClick={submitReply} id="writeEnter" style={{
                            backgroundColor: ask.reply && ask.reply.length > 0 ? '#9b1b20' : '#e0e0e0',
                            color: ask.reply && ask.reply.length > 0 ? '#fff' : 'black'
                        }}>등록</button>
                    </div>
                </div>
                <div onClick={closeWriteReply} id="adminAskBoxClose"><i className="fa-solid fa-xmark"></i></div>
            </div>
        </div >
    )
}


export default Admin_ask_write;