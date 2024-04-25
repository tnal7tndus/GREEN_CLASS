
import "./EventDetail.css";


const EventDetail = () => {

    return (

        <>
            <div id="eventDetail1_1" style={{ backgroundImage: `url("${process.env.PUBLIC_URL + "img/jyhTest/event1.jpg"}")` }}>
                <div>
                    <div>명절 특가</div>
                    <p>김구원 선생 X 프레시지</p>
                    <span>- 2024-01-01 ~ 2024-12-31 -</span>
                </div>
                <div className="rlarndnjsCoupon">
                    <div>
                        <div>
                            <p>10<span> %</span> 할인</p>
                            <ul>
                                <li>10% 할인 쿠폰 </li>
                                <li>중복 할인 가능</li>
                                <li>사용기한 : 이벤트 종료 전</li>
                            </ul>
                        </div>
                        <a href="">쿠 폰 받 기</a>
                    </div>
                    <div>
                        <div>
                            <p>20<span> %</span> 할인</p>
                            <ul>
                                <li>20% 할인 쿠폰 </li>
                                <li>중복 할인 불가능</li>
                                <li>사용기한 : 이벤트 종료 전</li>
                            </ul>
                        </div>
                        <a href="">쿠 폰 받 기</a>
                    </div>
                </div>
                <div id="timePlace"></div>
            </div>
        </>

    );
}

export default EventDetail;