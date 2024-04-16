
import { useState } from 'react';
import './Detail_review_box_row.css';
import Detail_review_box_row_detail from './Detail_review_box_row_detail';

const Detail_review_box_row = ({ itemReview }) => {
    const [reviewDetail, setReviewDetail] = useState(false);

    const reviewDetailClick = () => {
        setReviewDetail(!reviewDetail);
    }

    return (
        <>
            <div onClick={reviewDetailClick} className="reviewContent">
                <div className='ReviewBoardRow_img'>
                    <img src={"http://localhost:8090/resources" + `/img/itemReviewImg/${itemReview.image1 ? itemReview.item_code + '/' + itemReview.image1 : 'reviewdefault.png'}`} alt="" />
                </div>
                <div className='ReviewBoardRow_text'>
                    <div className='ReviewBoardRow_rightTop'>
                        <div className='ReviewBoardRow_score'>
                            {
                                itemReview.score >= 1 ?
                                    <i id='1' className="fa-solid fa-star"></i>
                                    :
                                    <i id='1' className="fa-regular fa-star"></i>
                            }
                            {
                                itemReview.score >= 2 ?
                                    <i id='2' className="fa-solid fa-star"></i>
                                    :
                                    <i id='2' className="fa-regular fa-star"></i>
                            }
                            {
                                itemReview.score >= 3 ?
                                    <i id='3' className="fa-solid fa-star"></i>
                                    :
                                    <i id='3' className="fa-regular fa-star"></i>
                            }
                            {
                                itemReview.score >= 4 ?
                                    <i id='4' className="fa-solid fa-star"></i>
                                    :
                                    <i id='4' className="fa-regular fa-star"></i>
                            }
                            {
                                itemReview.score >= 5 ?
                                    <i id='5' className="fa-solid fa-star"></i>
                                    :
                                    <i id='5' className="fa-regular fa-star"></i>
                            }
                        </div>
                        <p className='ReviewBoardRow_date'>{itemReview.regdate}</p>
                    </div>
                    <div className='ReviewBoardRow_toptag'>
                        <p>가성비 좋아요</p>
                    </div>
                    <span className='ReviewBoardRow_title'>{itemReview.title}</span>
                    <span className='ReviewBoardRow_wirter'>{itemReview.writer}</span>
                    <div className="reviewDetail">
                        <p>{itemReview.contents}</p>
                    </div>
                </div>
            </div>
            {reviewDetail ? <Detail_review_box_row_detail setReviewDetail={setReviewDetail} reviewDetail={reviewDetail} itemReview={itemReview} /> : <></>}

        </>

    );


}

export default Detail_review_box_row;