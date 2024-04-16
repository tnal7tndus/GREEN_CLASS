import { useSelector } from "react-redux";
import OrderTitle from "../../../components/orderTitle/OrderTitle";
import './BuyComplete.css'
import Loading from "../../../components/Loading";
import Error from "../../../components/Error";

const BuyComplete = () => {
    const userBuy = useSelector(state => state.userBuy)

    if (userBuy.loading) return <Loading />
    if (userBuy.error) return <Error />

    return (
        <div id="buyComplete" className="container">
            <h3><i class="fa-solid fa-check"></i> 주문이 완료 되었습니다! <i class="fa-solid fa-check"></i></h3>
            <div></div>
            <OrderTitle />
        </div>
    );
}

export default BuyComplete;