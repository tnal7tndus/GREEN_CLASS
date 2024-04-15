import "./Admin_ask_row.css";
import { useState } from 'react';
import WriteReply from '../Admin_ask_write/Admin_ask_write';


const Admin_ask_row = ({ setAskList, ask }) => {
    const currentDate = new Date();
    const [writeReply, setWriteReply] = useState(false);
    const openWriteReply = (e) => {
        setWriteReply(true);
    }

    return (
        <div className="selectAskBox_Row" onClick={openWriteReply}>
            <div>{ask.seq}</div>
            <div>{ask.type}</div>
            <div>
                {ask.title}
                {currentDate.getTime() - new Date(ask.regdate).getTime() <= 3 * 24 * 60 * 60 * 1000
                    ?
                    (
                        <span className="latestAnnounce">
                            <i className="fa-solid fa-n"></i>
                        </span>
                    )
                    :
                    null
                }
            </div>
            <div>{ask.writer}</div>
            <div>{new Date(ask.regdate).toLocaleString("ko-KR", {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            })}</div>
            <div>{ask.reply && ask.reply.length > 0 ? '답변' : '미답변'}</div>
            {writeReply ? <WriteReply setAskList={setAskList} ask={ask} setWriteReply={setWriteReply} /> : null}
        </div >
    );
}

export default Admin_ask_row;