import './ChatBotBox.css';
import { useState, useRef, useEffect } from 'react';
import { SERVER_RESOURCE } from '../../../model/server-config';
import { api } from '../../../model/model'
import Error from './../../components/Error';
import Loading from './../../components/Loading';

const ChatBotBox = ({
    /* admin 페이지 전용 props */
    amount, // admin페이지에서 나타낼 채팅창 갯수
    admin_root, // 현재 컴포넌트의 순번
    user,
    setRoomList,
    changeShowChatbot, // admin페이지에서 나타낼지 여부 상태값 변경 함수
    /* index 페이지 전용 props */
    setShowChatbot, // index페이지에서 나타낼지 여부 상태값 변경 함수 
}) => {
    const [refresh, setRefresh] = useState(false);
    /* 로그인 상태 sessionStorage 값 */
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo'));

    /* axios 요청 로딩/에러/자료갱신 기능 */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    /* 메세지 입력 전송 form */
    const [text, setText] = useState({
        chatRoomSeq: admin_root,
        content: '',
        writer: JSON.parse(sessionStorage.getItem('userinfo')).id || '', // sessionStorage에서 가져온 id
    });

    /* text form 상태값 변경 함수*/
    const changeContent = (event) => {
        setText((prev) => ({
            ...prev,
            content: event.target.value
        }))
    }
    /* 채팅 시작 */
    const startChat = (event) => {
        console.log(event.target.closest('div').children[1].innerText)
        api('/chat/insertroom', 'post', {
            type: event.target.closest('div').children[1].innerText,
            userIdUser: userinfo.id
        }, userinfo.token)
            .then(res => {
                console.log(res.data)
                setText((prev) => ({
                    ...prev,
                    chatRoomSeq: res.data.seq
                }))
            })
            .catch(err => {
                console.log(`startChat Error : ${err.message}`)
            })
    }

    const [userChatRoom, setUserChatRoom] = useState(null);
    useEffect(() => {
        api('/chat/selectroom', 'get', null, userinfo.token)
            .then(res => {
                setUserChatRoom(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])

    /* 채팅 종료 */
    const endChat = () => {
        api('/chat/endroom?seq=' + text.chatRoomSeq, 'get', null, userinfo.token)
            .then(res => {
                if (admin_root) {
                    setRoomList(res.data)
                    changeShowChatbot(admin_root)
                } else
                    setShowChatbot(false)
            })
            .catch(err => {
                console.log(`startChat Error : ${err.message}`)
            })
    }

    /* 전체 메세지를 받아오는 상태값 변수 */
    const [messageAll, setMessageAll] = useState(null);
    const getMessageAll = async (root) => {
        setLoading(true);
        await api(`/chat/selectmessage?chatRoomSeq=${root}`, 'get', null, userinfo.token)
            .then((res) => {
                setLoading(false);
                setMessageAll(res.data);
                setText((prev) => ({
                    ...prev,
                    chatRoomSeq: root,
                    content: ''
                }));
            })
            .catch((err) => {
                setLoading(false);
                setError(true);
            });
    }

    /* admin 페이지에서 데이터 조회시 값 불러오는 함수 */
    useEffect(() => {
        admin_root && getMessageAll(admin_root);
        text.chatRoomSeq && getMessageAll(text.chatRoomSeq);
    }, [refresh])

    /* 메세지 입력 input 태그 참조값 */
    const inputBox = useRef(null);

    /* 메세지를 남겼을 때 server DB에 내가 입력한 메세지를 merge하고
        지금 root에 해당되는 전체 메세지를 select 해오는 api 요청 함수 */
    const insertMessage = async () => {
        if (admin_root) {
            await api('/chat/insertadminmessage', 'post', text, userinfo.token)
                .then(res => {
                    setMessageAll(res.data.messageList);
                    setRoomList(res.data.roomList)
                    setText((prev) => ({
                        ...prev,
                        content: ''
                    }))
                    if (inputBox.current) inputBox.current.focus();
                }).catch(err => {
                    setError(true);
                    console.log(`insertadminmessage Error : ${err.message}`)
                });
        } else {
            await api('/chat/insertusermessage', 'post', text, userinfo.token)
                .then(res => {
                    setMessageAll(res.data);
                    setText((prev) => ({
                        ...prev,
                        content: ''
                    }))
                    if (inputBox.current) inputBox.current.focus();
                }).catch(err => {
                    setError(true);
                    console.log(`insertMessage Error : ${err.message}`)
                });
        }
    }

    /* input 박스에서 엔터키 입력 시 userChatbot함수를 호출하는 handler(함수)  */
    const handleKeyUp = async (event) => {
        if (event.key === 'Enter' && text.content.trim() !== '') {
            await insertMessage();
        }

    };

    /* 채팅 가져올때 태그 제일 아래로 스크롤 */
    const chatBox = useRef(null);
    useEffect(() => {
        if (chatBox.current)
            chatBox.current.scrollTop = chatBox.current.scrollHeight;
    }, [messageAll])


    return (
        <div id='chatBotBox' style={{ height: amount == 2 ? 'calc(50% - 10px)' : '100%' }}>
            <div id='chatBox' ref={chatBox}>
                <h3>
                    {(admin_root || text.type) && <div onClick={() => endChat()} className='end'>상담종료</div>}
                    {admin_root ? `순번 : ${admin_root}` : '토마토팜 상담챗봇'}
                    {admin_root && <div className="close" onClick={() => changeShowChatbot(admin_root)}><i className="fa-solid fa-xmark"></i></div>}
                    {setShowChatbot && <div onClick={() => setShowChatbot()} className="close"><i className="fa-solid fa-xmark"></i></div>}
                    <div className="refresh" onClick={() => setRefresh(!refresh)}><i style={{ transform: refresh ? 'rotate(0deg)' : 'rotate(360deg)' }} className="fa-solid fa-arrows-rotate"></i></div>
                </h3>

                {
                    !messageAll && loading && <Loading />
                }

                {
                    !messageAll && error && <Error />
                }
                {
                    !admin_root && !messageAll && !error && !loading &&
                    <>
                        <div id="chatBotTitle">
                            <img src={SERVER_RESOURCE + "/img/logo2.png"} />
                            <p>
                                {userinfo.username} 고객님, 안녕하세요.<br />
                                무엇을 도와드릴까요?<br />
                                <span>궁금한 내용을 선택하거나, 직접 입력해주세요.</span>
                            </p>
                        </div>
                        {!text.chatRoomSeq &&
                            <div id="openQuestion">
                                <h4>문의유형</h4>
                                <div id="openQuestionBox">
                                    <div onClick={(event) => startChat(event)}>
                                        <i className="fa-solid fa-truck"></i>
                                        <span>배송</span>
                                    </div>
                                    <div onClick={(event) => startChat(event)}>
                                        <i className="fa-solid fa-cubes"></i>
                                        <span>상품</span>
                                    </div>
                                    <div onClick={(event) => startChat(event)}>
                                        <i className="fa-solid fa-gift"></i>
                                        <span>일반</span>
                                    </div>
                                </div>
                            </div>
                        }
                        {!text.chatRoomSeq && userChatRoom && userChatRoom.length > 0 &&
                            <div id="beforechat">
                                <h4>이전채팅 불러오기</h4>
                                {userChatRoom.map((e, i) =>
                                    <div className='beforechatRoom' key={i}>
                                        <span>{`${new Date(e.regdate).getFullYear()}.${new Date(e.regdate).getMonth()}.${new Date(e.regdate).getDate()} ${new Date(e.regdate).getHours()}시 ${new Date(e.regdate).getMinutes()}분`}</span>
                                        <div onClick={() => getMessageAll(e.seq)}>채팅보기</div>
                                    </div>
                                )}
                            </div>
                        }
                    </>
                }

                <div id='messageBox'>
                    {/* {messageAll && messageAll.map((e, i) => <span>{new Date().toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })}</span>)} */}
                    {messageAll ?
                        messageAll.map((e, i) => <p className={e.userIdWriter === userinfo.id ? 'myChat' : 'otherChat'} key={i}>{e.content}<br></br><span>{new Date(e.regdate).getHours()}시 {new Date(e.regdate).getMinutes()}분</span></p>)
                        :
                        null
                    }

                </div>

            </div>
            <div id="chatBotTextBox">
                <input type="text" readOnly={!text.chatRoomSeq} placeholder={text.type ? "텍스트를 입력해주세요." : "문의유형을 선택해주세요."} value={text.content} onChange={(event) => changeContent(event)} ref={inputBox}
                    onKeyUp={handleKeyUp} />
                <button onClick={text.content.length > 0 ? insertMessage : null} >전송</button>
            </div>
        </div >
    );
}

export default ChatBotBox;