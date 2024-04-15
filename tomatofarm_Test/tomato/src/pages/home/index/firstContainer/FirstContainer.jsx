import { Link } from "react-router-dom";
import './FirstContainer.css';
import { SERVER_RESOURCE } from "../../../../model/server-config";

const FirstContainer = () => {
    return (
        <div id="firstContainer" className="container">
            <h3>
                <i className="fa-solid fa-star"></i>&nbsp;&nbsp; 토마토팜 바로가기 &nbsp;&nbsp;<i className="fa-solid fa-star"></i>
            </h3>
            <div id="firstContainerButton">
                <div>
                    <Link>
                        <img src={SERVER_RESOURCE + "/img/index_bestSeller.png"} alt="베스트 상품" className="categoryImg" /><br />
                    </Link>
                    베스트 상품
                </div>
                <div>
                    <Link to="/home/list?keyword=밀키트">
                        <img src={SERVER_RESOURCE + "/img/index_mealkit.png"} alt="밀키트" className="categoryImg" /><br />
                    </Link>
                    밀키트
                </div>
                <div>
                    <Link to="/home/list?keyword=식재료">
                        <img src={SERVER_RESOURCE + "/img/index_food.png"} alt="신선 재료" className="categoryImg" /><br />
                    </Link>
                    신선 재료
                </div>
                <div>
                    <Link>
                        <img src={SERVER_RESOURCE + "/img/index_menu.png"} alt="메뉴 주문" className="categoryImg" /><br />
                    </Link>
                    메뉴 주문
                </div>
                <div>
                    <Link>
                        <img src={SERVER_RESOURCE + "/img/index_gift.png"} alt="이벤트" className="categoryImg" /><br />
                    </Link>
                    이벤트
                </div>
            </div>
        </div>
    );
}

export default FirstContainer;