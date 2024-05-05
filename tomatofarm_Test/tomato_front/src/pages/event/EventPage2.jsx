import { SERVER_RESOURCE } from "../../model/server-config";
import "./EventPage2.css";
import { Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './../components/Loading';
import Error from './../components/Error';
import KakaoPay from './KakaoPay';
import KBPay from './KBPay';
import TossPay from './TossPay';
import NaverPay from './NaverPay';

const EventPage2 = () => {
    // const [item, setItem] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);

    // useEffect(() => {
    //     axios.get(`http://localhost:8090/event2/`
    //     ).then(res => {
    //         setItem(res.data);
    //         setLoading(false);
    //     }).catch(err => {
    //         console.log(err.message)
    //         setLoading(false);
    //         setError(true);
    //     })

    // }, [])

    // if (loading) return <Loading />
    // if (error) return <Error />


    return (
        <div>
            <img id="eventImgLogo" src={SERVER_RESOURCE + "/img/adimg/signup.jpg"} />
            <img id="eventImgLogo" src={SERVER_RESOURCE + "/img/adimg/review.jpg"} />
            <h1 id="eventPageTitle"><i class="fa-solid fa-star"></i> SPECIAL CUPON<i class="fa-solid fa-star"></i></h1>
            <div id="eventCuponForm">
                <div id="eventIMG">
                    <img id="joinCupon" src={SERVER_RESOURCE + "/img/adimg/coupon.png"} />
                    <div>행사내용</div>
                    <span>회원가입 시 ID당 1회 증정</span>
                    <div>사용기간</div>
                    <span>발급일로부터 1주일</span>
                    <div>로그인 시 자동지급<br></br><i class="fa-solid fa-circle-arrow-right"></i></div>
                </div>
                <div id="eventIMG">
                    {/* <img id="eventCupon" src={SERVER_RESOURCE + "/img/adimg/coupon.png"} /> */}
                    <img id="reveiwCupon" src={SERVER_RESOURCE + "/img/adimg/review.png"} />
                    <div>행사내용</div>
                    <span>상품  베스트 후기 선정 시 쿠폰 증정</span>
                    <div>사용기간</div>
                    <span>발급일로부터 30일</span>
                    <div>로그인 시 자동지급<br></br><i class="fa-solid fa-circle-arrow-right"></i></div>
                </div>
            </div>
            <hr></hr>
            <div id="levelPointForm">
                <h1>토마토팜 등업 & 포인트 혜택</h1>
                <div id="levelPointBox">
                    <div id="level_Box">
                        <div id="eventBoxTitle">레드등급</div>
                        <div id="eventSaleBox">20%</div>
                        <div>최대 20%할인 혜택</div>
                        <div id="rankDay">레드등급 혜택기간<br></br>등업일 ~ 1년</div>
                    </div>
                    <div id="levelPlusPoint"><i class="fa-solid fa-plus"></i></div>
                    <div id="level_point">
                        <div id="eventBoxTitle">포인트</div>
                        <div id="eventSaleBox">3만원</div>
                        <div>20만원 이상 구매 시</div>
                        <div id="rankDay">포인트 사용기간혜택<br></br>신청일 ~ 2024.12.31</div>
                    </div>
                </div>

                <div id="eventDayBox">
                    <div id="eventBoxTitle">행사기간</div>
                    <span>2024.1.1 ~ 2024.12.31</span>
                    <div id="eventBoxTitle">행사대상</div>
                    <span>상품 구매 내역 우수 회원</span>
                    <div id="eventBoxTitle">행사내용</div>
                    <span>한 ID당 기간 내 1회 참여 가능</span>
                    <div id="eventBoxTitle">참여방법</div>
                    <span>1. 쿠폰 다운로드 및 쿠폰번호 복사</span>
                    <span>2. 아래 쿠폰번호 입력란에 쿠폰번호 입력 후 혜택 받기</span>
                    <input type="text" placeholder="쿠폰번호 12자리를 입력해 주세요."></input>
                </div>
            </div>
            <hr></hr>
            <div id="payEventBox">
                <h1>추가 결제 혜택 안내</h1>
                <h2>쿠폰 혜택과 중복 적용 가능</h2>
                <div>
                    <Link to={"/envet2/naverpay"}><a href="/event2/naverpay"><img src={SERVER_RESOURCE + "/img/eventimg/네이버페이.jpg"} /></a></Link>
                    <Link to={"/envet2/kakaopay"}><a href="/event2/kakaopay"><img src={SERVER_RESOURCE + "/img/eventimg/카카오페이.jpg"} /></a></Link>
                    <Link to={"/envet2/kbpay"}><a href="/event2/kbpay"><img src={SERVER_RESOURCE + "/img/eventimg/KB페이.jpg"} /></a></Link>
                    <Link to={"/envet2/tosspay"}><a href="/event2/tosspay"><img src={SERVER_RESOURCE + "/img/eventimg/토스페이.jpg"} /></a></Link>
                </div>
            </div>
            {/* <Routes>
                <Route path='/naverpay' element={<NaverPay />} />
                <Route path='/kakaopay' element={<KakaoPay />} />
                <Route path='/kbpay' element={<KBPay />} />
                <Route path='/tosspay' element={<TossPay />} />
            </Routes> */}
        </div>









    );
}



export default EventPage2;