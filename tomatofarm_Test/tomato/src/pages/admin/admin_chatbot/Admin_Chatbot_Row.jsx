const Admin_Chatbot_Row = ({
    room, // 채팅방의 상태
    showChatbot, // 나타낼 채팅방 목록 배열
    changeShowChatbot // 나타낼 채팅방 배열을 수정하는 함수
}) => {
    /* 전체 채팅 내용에서 현 component의 root값으로 filter함 */

    return (
        <ul>
            <li>{room.seq}</li>
            <li>{room.type}</li>
            <li style={{
                backgroundColor: room.ing != 0 ?
                    room.ing == 1 ?
                        'green'
                        :
                        'grey'
                    :
                    '#9B1B30'
            }}>
                {room.ing == 0 && '미확인'}
                {room.ing == 1 && '상담중'}
                {room.ing == 2 && '상담완료'}
            </li>
            <li><span>{new Date(room.regdate).getHours()}시 {new Date(room.regdate).getMinutes()}분</span></li>
            <li>{room.user}</li>
            <li>{room.admin}</li>
            {showChatbot.includes(room.seq) ?
                <li style={{ backgroundColor: 'black' }} id="chtaBotING" onClick={() => changeShowChatbot(room.seq)} >채팅닫기</li>
                :
                <li id="chtaBotING" onClick={() => changeShowChatbot(room.seq)} >채팅하기</li>
            }
        </ul>
    );
}

export default Admin_Chatbot_Row;