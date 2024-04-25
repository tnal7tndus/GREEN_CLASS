// import { makeComa } from "../MathFunction";

const OrderList_one = () => {


    return (
        <div className="orderTitle">
            <h4>배송 대기중</h4>
            <div className="orderTitleContent">
                <div className="orderTitleIMG">
                    {/* <img src={SERVER_RESOURCE + `/img/itemImg/500001_2.jpg`} alt='' /> */}
                </div>
                <div className="orderTitleDetail">
                    <p className="orderTitleDate"> - </p>
                    <p className="orderTitleName"> 외 총 건 의 주문</p>
                    <p className="orderTitlePrice"></p>
                    <p className="orderTitleDelivery"></p>
                </div>
                <div className="orderTitleBTN">
                    <div className="orderTitleBTN_detaii">상세내용 보기</div>
                </div>
            </div>
        </div>
    );
}

export default OrderList_one;