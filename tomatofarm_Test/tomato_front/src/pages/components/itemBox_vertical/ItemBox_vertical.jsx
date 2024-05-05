import './ItemBox_vertical.css'
import { Link } from 'react-router-dom';
import { makeComa } from '../MathFunction';
import { SERVER_RESOURCE } from '../../../model/server-config';

const ItemBox_vertical = ({ item }) => {
    

    return (
        <Link to={"/home/detail?code=" + item.code} className="itemBox_vertical">
                

            <div className="itemImg">
                <i className="fa-solid fa-cart-shopping"></i>
                <i className="fa-solid fa-magnifying-glass"></i>
                <img src={SERVER_RESOURCE + `/img/itemImg/${item.code < 10000 ? 'default' : item.code}_1.jpg`} alt={item.name} />
            </div>
            <div className='itemDesc'>
                <div className="itemOption_vertical">
                    {
                        item.delivery === 0 && (
                            <div className="itemOptionFreeDelivery">무료배송</div>
                        )
                    }
                    {
                        item.eventName != null && (
                            <div className="itemOptionEvent">{item.eventName}</div>
                        )
                    }
                </div>
                <div className="itemName">{item.name}</div>
                <div className="itemInfo">{item.brand}<br /></div>
                <div className="itemexplain">우리상품 맛있어요 어쩌구<br /></div>
                {
                    item.itemEventDiscount ? (
                        <>
                            <p className="itemPriceB">{makeComa(item.price)} 원</p>
                            <p className="itemPrice">{makeComa(Math.round(item.price * (100 - item.itemEventDiscount) / 100))} 원</p>
                        </>
                    ) : (
                        <p className="itemPrice">{makeComa(item.price)} 원</p>
                    )
                }
                {
                    item.delivery > 0 ? (
                        <div className="itemDelivery"><span>배송비&nbsp;&nbsp;</span>{makeComa(item.delivery)}원</div>
                    ) : (
                        <div className="itemDelivery">무료배송</div>
                    )
                }

            </div>
        </Link>
    );
}

export default ItemBox_vertical;