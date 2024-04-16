import { useSelector } from "react-redux";
import { SERVER_RESOURCE } from "../../../model/server-config";
import Error from "../Error";
import Loading from "../Loading";
import { makeComa } from "../MathFunction";
import './OrderTitle.css'

const OrderTitle = () => {

    const userBuyResult = useSelector(state => state.userBuy.data)

    return (
        <div className="orderTitle">
            <h4>배송 대기중</h4>
            <div className="orderTitleContent">
                <div className="orderTitleIMG">
                    <img src={SERVER_RESOURCE + `/img/itemImg/${userBuyResult.item_code}_2.jpg`} alt={userBuyResult.item_name} />
                </div>
                <div className="orderTitleDetail">
                    <p className="orderTitleDate">{new Date(userBuyResult.orderDate).getFullYear()}- {new Date(userBuyResult.orderDate).getMonth()}-{new Date(userBuyResult.orderDate).getDay()}</p>
                    <p className="orderTitleName">{userBuyResult.item_name} 외 총 {userBuyResult.size}건 의 주문</p>
                    <p className="orderTitlePrice">{makeComa(userBuyResult.price)}</p>
                    <p className="orderTitleDelivery">[{userBuyResult.addressCode}]{userBuyResult.address1}, {userBuyResult.address2}</p>
                </div>
                <div className="orderTitleBTN">
                    <div className="orderTitleBTN_detaii">상세내용 보기</div>
                </div>
            </div>
        </div>
    );
}

export default OrderTitle;