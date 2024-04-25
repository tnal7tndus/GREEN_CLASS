import { SERVER_RESOURCE } from '../../../../model/server-config';
import './AdImgBox.css'

const AdImgBox = () => {
    const adImgList = ['fresheasy.jpg', 'mychef.jpg', 'signup.jpg', 'review.jpg']

    function changeAdImgBox(event) {
        event.stopPropagation();
        let index = 0;
        for (let e of event.target.closest('#adRightTab').children) {
            if (e == event.target.closest('div')) break;
            index++;
        }
        event.target.closest('#adImg').children[0].src = SERVER_RESOURCE + `/img/adimg/${adImgList[index]}`;
    }

    return (
        <div id="adImgBox">
            <div id="adImg" className="container">
                <img src={SERVER_RESOURCE + "/img/adimg/fresheasy.jpg"} alt="" />
                <div id="adRightTab">
                    <div onMouseOver={changeAdImgBox}>
                        프레시지<img src={SERVER_RESOURCE + "/img/brand/프레시지.png"} alt="프레시지로고" />
                    </div>
                    <div onMouseOver={changeAdImgBox}>
                        MyChef<img src={SERVER_RESOURCE + "/img/brand/마이셰프.png"} alt="마이셰프로고" />
                    </div>
                    <div onMouseOver={changeAdImgBox}>
                        회원가입쿠폰<img src={SERVER_RESOURCE + "/img/adimg/coupon.jpg"} alt="쿠폰이벤트" />
                    </div>
                    <div onMouseOver={changeAdImgBox}>
                        후기이벤트<img src={SERVER_RESOURCE + "/img/adimg/review.png"} alt="리뷰이벤트" />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AdImgBox;