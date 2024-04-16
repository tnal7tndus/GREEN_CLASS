import { useEffect } from "react";


const WebSocket2 = () => {

    const socket = new WebSocket('ws://localhost:8090/chat');

    socket.onmessage = function (event) {
        console.log('웹소켓 메시지를 받았습니다:', event.data);
    };

    socket.onopen = function (event) {
        console.log('웹소켓 연결이 열렸습니다.');
    };

    socket.onclose = function (event) {
        console.log('웹소켓 연결이 닫혔습니다.');
    };

    // 웹소켓 메시지 전송 예시
    socket.send('Hello, WebSocket!');

    return (
        <div>

        </div>
    )
}

export default WebSocket2;