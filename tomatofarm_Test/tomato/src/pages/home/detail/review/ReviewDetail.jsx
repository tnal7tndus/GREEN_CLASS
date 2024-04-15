import { SERVER_RESOURCE } from '../../../../model/server-config';
import './ReviewDetail.css';
import { useState } from 'react';
import { useEffect } from 'react';


const ReviewDetail = ({ item, itemReview, reviewDetail, setReviewDetail }) => {

    const [review, setAsk] = useState({
        item_code: item.code,
        writer: 'manager1',
        title: '',
        contents: '',
        reply: null,
        password: null,
        type: '아이템'
    })
    

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
                                <img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_2.jpg`} alt="" />
                                <i className="fa-solid fa-arrow-left"></i>
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                            <div id="reviewDetailImgBottom">
                                <div onClick={reivewDetailImgChange}><img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_1.jpg`} alt={""} /></div>
                                <div onClick={reivewDetailImgChange}><img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_2.jpg`} alt={""} /></div>
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

export default ReviewDetail;