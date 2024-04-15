import { SERVER_RESOURCE } from "../../model/server-config";
import "./KakaoPay.css";

const KakaoPay = () => {
    return (
        <div id="kakaoPayEventBox">
            <h1>KAKAOPAY 카카오페이</h1>
            <h2>쿠폰 혜택과 중복 적용 가능</h2>
            <div>
                <img src={SERVER_RESOURCE + "/img/eventimg/kakao1.png"} />
                <img src={SERVER_RESOURCE + "/img/eventimg/kakao2.png"} />
                <img src={SERVER_RESOURCE + "/img/eventimg/kakao3.png"} />
                <img src={SERVER_RESOURCE + "/img/eventimg/kakao4.png"} />
                <img src={SERVER_RESOURCE + "/img/eventimg/kakao5.png"} />
                <img src={SERVER_RESOURCE + "/img/eventimg/kakao6.png"} />
            </div>
        </div>
    );
}



export default KakaoPay;