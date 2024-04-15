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
    getdata,
    changeShowChatbot, // admin페이지에서 나타낼지 여부 상태값 변경 함수
    /* index 페이지 전용 props */
    setShowChatbot, // index페이지에서 나타낼지 여부 상태값 변경 함수 
}) => {
    /* 로그인 상태 sessionStorage 값 */
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo'));

    /* axios 요청 로딩/에러/자료갱신 기능 */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    /* 메세지 입력 전송 form */
    const [text, setText] = useState({
        type: null,
        room_seq: admin_root,
        content: '',
        writer: JSON.parse(sessionStorage.getItem('userinfo')).id, // sessionStorage에서 가져온 id
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
        api('/chat/makeroom', 'post', { type: event.target.closest('div').children[1].innerText }, userinfo.token)
            .then(res => {
                setText((prev) => ({
                    ...prev,
                    type: res.data.type,
                    room_seq: res.data.seq
                }))
            })
            .catch(err => {
                console.log(`startChat Error : ${err.message}`)
            })
    }

    /* 채팅 종료 */
    const endChat = () => {
        const data = {
            seq: text.room_seq,
            type: text.type,
            ing: 2
        }

        api('/chat/makeroom', 'post', data, userinfo.token)
            .then(res => {
                if (admin_root) {
                    getdata(res.data)
                    changeShowChatbot(admin_root)
                }
                else
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
        const response = await api(`/chat/selectmessage?room_seq=${root}`, 'get', null, userinfo.token)
            .then((res) => { setLoading(false); return res; })
            .catch((err) => { setLoading(false); setError(true); return err; });
        if (response.data && response.data.length > 0) {
            setMessageAll(response.data);
            setText((prev) => ({
                ...prev,
                root: response.data[0].root,
                content: ''
            }));
        } else {
        }
    }

    /* admin 페이지에서 데이터 조회시 값 불러오는 함수 */
    useEffect(() => {
        admin_root && getMessageAll(admin_root);
    }, [])

    /* 메세지 입력 input 태그 참조값 */
    const inputBox = useRef(null);

    /* 메세지를 남겼을 때 server DB에 내가 입력한 메세지를 merge하고
        지금 root에 해당되는 전체 메세지를 select 해오는 api 요청 함수 */
    const insertMessage = async () => {
        if (!text.content.trim()) {
            return;
        }
        setLoading(true);
        await api('/chat/insertmessage', 'post', text, userinfo.token)
            .then(res => {
                setLoading(false);
                setMessageAll(res.data);
                setText((prev) => ({
                    ...prev,
                    content: ''
                }))
                if (inputBox.current) inputBox.current.focus();
            }).catch(err => {
                setLoading(false);
                setError(true);
                console.log(`insertMessage Error : ${err.message}`)
            });
        if (admin_root) {
            await api('/chat/makeroom', 'post', {
                seq: admin_root,    
                admin: userinfo.id,
                ing: 1
            }, userinfo.token)
                .then(res => {
                    getdata(res.data)
                })
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
                        {text.type == null &&
                            <div id="openQuestion">
                                <h2>문의유형</h2>
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
                    </>
                }

                <div id='messageBox'>
                    {/* {messageAll && messageAll.map((e, i) => <span>{new Date().toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })}</span>)} */}
                    {messageAll && messageAll.map((e, i) => <p className={e.writer === userinfo.id ? 'myChat' : 'otherChat'} key={i}>{e.content}<br></br><span>{new Date(e.regdate).getHours()}시 {new Date(e.regdate).getMinutes()}분</span></p>)}

                </div>

            </div>
            <div id="chatBotTextBox">
                <input type="text" readOnly={!text.type && !admin_root} placeholder={text.type ? "텍스트를 입력해주세요." : "문의유형을 선택해주세요."} value={text.content} onChange={(event) => changeContent(event)} ref={inputBox}
                    onKeyUp={handleKeyUp} />
                <button onClick={insertMessage} >전송</button>
            </div>
        </div>
    );
}

export default ChatBotBox;