import { SERVER_RESOURCE } from "../../model/server-config";
import "./TossPay.css";

const TossPay = () => {
    return (
        <div id="tossPayEventBox">
            <h1>TOSSPAY 토스페이</h1>
            <h2>쿠폰 혜택과 중복 적용 가능</h2>
            <div>
                <img src={SERVER_RESOURCE + "/img/eventimg/toss1.png"} />
                <img src={SERVER_RESOURCE + "/img/eventimg/toss2.png"} />
            </div>
        </div>
    );
}



export default TossPay;