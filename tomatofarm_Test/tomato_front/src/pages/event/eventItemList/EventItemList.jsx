import "./EventItemList.css";


const EventItemList = () => {

    return (

        <>
            <div id="eventItemListBox">

                <div id="brandItemTab">
                    <div>#김구원선생</div>
                    <div>#프레시지</div>
                    <div>#마이셰프</div>
                </div>

                <span id="prevBt" className="itemListBtYH"><i class="fa-solid fa-arrow-left"></i></span>
                <span id="nextBt" className="itemListBtYH"><i class="fa-solid fa-arrow-right"></i></span>


                <div className="brandItemList container">
                    <a href="">
                        <img src={process.env.PUBLIC_URL + "img/itemImg/5000001_1.jpg"} alt="" />
                        <div>
                            <p>#밀키트</p>
                            <span>김구원선생</span>
                            <p>김구원선생 된장찌개 밀키트 세트</p>
                            <p>99,000 원</p>
                            <p>100,000 원</p>
                        </div>
                    </a>
                    <a href="">
                        <img src={process.env.PUBLIC_URL + "img/itemImg/5000007_1.jpg"} alt="" />
                        <div>
                            <p>#밀키트</p>
                            <span>김구원선생</span>
                            <p>김구원선생 된장찌개 밀키트 세트</p>
                            <p>99,000 원</p>
                            <p>100,000 원</p>
                        </div>
                    </a>
                    <a href="">
                        <img src={process.env.PUBLIC_URL + "img/itemImg/5000003_1.jpg"} alt="" />
                        <div>
                            <p>#밀키트</p>
                            <span>김구원선생</span>
                            <p>김구원선생 된장찌개 밀키트 세트</p>
                            <p>99,000 원</p>
                            <p>100,000 원</p>
                        </div>
                    </a>
                    <a href="">
                        <img src={process.env.PUBLIC_URL + "img/itemImg/5000004_1.jpg"} alt="" />
                        <div>
                            <p>#밀키트</p>
                            <span>김구원선생</span>
                            <p>김구원선생 된장찌개 밀키트 세트</p>
                            <p>99,000 원</p>
                            <p>100,000 원</p>
                        </div>
                    </a>
                </div>

            </div>
        </>
    );
}

export default EventItemList;