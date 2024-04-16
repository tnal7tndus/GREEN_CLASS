import { api } from '../../../model/model';
import './Admin_Chatbot.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import Admin_Chatbot_Row from './Admin_Chatbot_Row';
import ChatBotBox from '../../components/chatbot/ChatBotBox';

const Admin_Chatbot = () => {

    /* 로그인 상태 sessionStorage 값 => api에 토큰을 보내서 server에서 id로 유저 등급을 확인함 */
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo'));

    /* 전체 채팅(내용) 목록을 담는 변수 */
    const [roomList, setRoomList] = useState([]);

    /* 채팅의 roomSeq 번호만 저장하는 함수 */
    const roomSeq = useRef([]);

    const getdata = async () => {
        const response = await api('/chat/selectroom?column=seq', 'get', null, userinfo.token);
        setRoomList(response.data);
        for (let e of response.data) {  // roomSeq 변수에 채팅데이터의 room_seq 중복없이 담기
            if (!roomSeq.current.includes(e.seq))
                roomSeq.current.push(e.seq);
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    /* 오른쪽에 나타낼 채팅방의 roomSeq번호를 가지고 있는 배열 */
    const [showChatbot, setShowChatbot] = useState([]);
    console.log(showChatbot)
    /* showChatbot 배열에 나타낼 채팅방의 roomSeq를 저장하는 배열을 만드는 함수 */
    const changeShowChatbot = (value) => {
        if (showChatbot.includes(value)) {
            setShowChatbot(showChatbot.filter(e => e != value));
        } else {
            if (showChatbot.length < 2) {
                setShowChatbot([...showChatbot, value]);
            }
        }
    }

    return (
        <div id="admin_ChatBotBox">
            <div id="chatBot_Unidentified">
                <h2>ChatBot List</h2>
                <ul id='chatBot_Unidentified_Title'>
                    <li>순번</li>
                    <li>타입</li>
                    <li>진행상황</li>
                    <li>채팅시간</li>
                    <li>고객 아이디</li>
                    <li>담당자</li>
                    <li>채팅</li>
                </ul>
                <div>
                    {
                        roomList.length > 0 && roomList.map((e) => <Admin_Chatbot_Row key={e.seq} room={e} showChatbot={showChatbot} changeShowChatbot={changeShowChatbot} />)
                    }
                </div>
            </div>


            <div id='admin_ChatBotContainer'>
                {
                    showChatbot && showChatbot.map((seq) => <ChatBotBox getdata={getdata} amount={showChatbot.length} admin_root={seq} key={seq} changeShowChatbot={changeShowChatbot} />)
                }
            </div>
        </div>


    );
}

export default Admin_Chatbot;