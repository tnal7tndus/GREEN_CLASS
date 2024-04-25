import "./EventItem.css";

const EventItem = () => {

    return(

        
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

    );
}

export default EventItem;