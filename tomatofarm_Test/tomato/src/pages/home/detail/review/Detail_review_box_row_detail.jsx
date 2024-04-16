import './Detail_review_box_row_detail.css';

const Detail_review_box_row_detail = ({ itemReview, reviewDetail, setReviewDetail }) => {

    const reivewDetailImgChange = (event) => {
        let ele = event.target.closest('div');
        ele.style.opacity = 1;
        ele.parentNode.previousElementSibling.children[0].src = ele.children[0].src;
        for (let i = 0; i < ele.parentNode.childElementCount; i++) {
            if (ele.parentNode.children[i] != ele) {
                ele.parentNode.children[i].style.opacity = '0.5';
            }
        }
    }

    const reviewDetailClose = () => {
        setReviewDetail(!reviewDetail);
    }

    return (
        <>
            {reviewDetail &&
                <div id="reviewDetailForm">
                    <div id="reviewDetailBox">
                        <div id="reviewDetailImg">
                            <div id="reviewDetailImgTop">
                                <img src={process.env.PUBLIC_URL + '/img/itemImg/5000001_2.jpg'} alt="" />
                                <i className="fa-solid fa-arrow-left"></i>
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                            <div id="reviewDetailImgBottom">
                                <div onClick={reivewDetailImgChange}><img src={process.env.PUBLIC_URL + `/img/itemImg/5000001_1.jpg`} alt={""} /></div>
                                <div onClick={reivewDetailImgChange}><img src={process.env.PUBLIC_URL + `/img/itemImg/5000001_2.jpg`} alt={""} /></div>
                            </div>
                        </div>
                        <div id="reviewDetail_Write">
                            <p>{itemReview.name}</p>
                            <p>{itemReview.writer}</p>
                            <p>작성 날짜</p>
                            <p id="reviewDetail_Final">후기다 후기다 후기다
                                후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다
                                후기다 후기다
                                후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다후기다
                            </p>
                        </div>
                        <div onClick={reviewDetailClose} id="reviewDetailBoxClose"><i className="fa-solid fa-xmark"></i></div>
                    </div>
                </div>
            }
        </>
    );
}

export default Detail_review_box_row_detail;