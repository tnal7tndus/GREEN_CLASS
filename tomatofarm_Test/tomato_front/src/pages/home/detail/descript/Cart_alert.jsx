import { useEffect, useRef } from "react"
import { Link } from "react-router-dom";


const Cart_alert = ({ name, setGotoCart }) => {
    const statusbar = useRef(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            setGotoCart(false);
        }, 5000);

        setTimeout(() => {
            statusbar.current.style.transform = 'translateX(-100%)';
        }, 100);

        return () => clearTimeout(timer);
    }, [])

    return (
        <div id='goCartContainer'>
            <p id="itemName">{name}</p>
            <p>장바구니에 상품을 담았습니다.</p>
            <p>장바구니로 이동하시겠습니까?</p>
            <Link to="/home/cart" id="cartOK">이동</Link>
            <a onClick={() => setGotoCart(false)} id="cartNO">닫기</a>
            <div id='status' ><div ref={statusbar}></div></div>
            {/* <div id='triangle_bottom'></div> */}
        </div>
    );
}

export default Cart_alert;