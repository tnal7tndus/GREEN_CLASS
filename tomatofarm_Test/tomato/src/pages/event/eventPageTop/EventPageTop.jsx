import "./EventPageTop.css";


const EventPageTop = () => {

    // const backgroundImageStyle = {
    //     backgroundImage: 'url({ process.env.PUBLIC_URL + "/jyhTest/topTest.png" })',
    //     { process.env.PUBLIC_URL + "/jyhTest/topTest.png" }
    // };

    return (
        <>
            <div id="eventPageTop_bg">
                {/* <div id="eventPageTop" style={{ backgroundImage: `url("${process.env.PUBLIC_URL + "img/jyhTest/topTest.png"}")` }}> */}
                <div id="eventPageTop" style={{
                    backgroundImage: `url("${process.env.PUBLIC_URL + "img/jyhTest/topTest.png"}")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionY: '-140px',
                    backgroundPositionX: '-50px',
                    backgroundSize: '120%',
                    width: '100%',
                    height: '500px', // 이미지의 높이를 조절하려면 필요에 따라 조절합니다.
                }}>
                    <div>
                        <p><span>토마토 팜</span>과 함께하는 명절</p>
                        <p>
                            김구원선생 / 프레시지
                        </p>
                        <span>새해 복 많이 받으세요 !</span>
                    </div>
                    <a href="">
                        <i class="fa-solid fa-circle-play"></i> 행사 상품 보러가기
                    </a>
                </div>
            </div>
        </>
    );
}

export default EventPageTop;