import { SERVER_RESOURCE } from "../../model/server-config";
import "./NaverPay.css";

const NaverPay = () => {
    return (
        <div id="naverPayEventBox">
            <h1>NAVERPAY 네이버페이</h1>
            <h2>쿠폰 혜택과 중복 적용 가능</h2>
            <div>
                <img src={SERVER_RESOURCE + "/img/eventimg/naver1.png"} />
                <img src={SERVER_RESOURCE + "/img/eventimg/naver2.png"} />
                <img src={SERVER_RESOURCE + "/img/eventimg/naver3.png"} />
            </div>
        </div>
    );
}



export default NaverPay;