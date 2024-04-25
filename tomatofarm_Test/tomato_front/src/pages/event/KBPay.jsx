import { SERVER_RESOURCE } from "../../model/server-config";
import "./KBPay.css";

const KBPay = () => {
    return (
        <div id="kbPayEventBox">
            <h1>KBPAY KB페이</h1>
            <h2>쿠폰 혜택과 중복 적용 가능</h2>
            <div>
                <img src={SERVER_RESOURCE + "/img/eventimg/kb1.png"} />
                <img src={SERVER_RESOURCE + "/img/eventimg/kb2.png"} />
            </div>
        </div>
    );
}



export default KBPay;