
import './Detail_review_write.css';
import { useMemo, useState } from 'react';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import { api } from '../../../../model/model';
import { useSelector, useDispatch } from 'react-redux';
import { changeAlert } from '../../../redux/basic/actions';

const Detail_review_write = ({ item, refresh, setRefresh, reviewWriteClick }) => {
    const user = useSelector(state => state.user.data)
    const dispatch = useDispatch();
    const [writeBoxClose, setWriteBoxClose] = useState(true);
    const [score, setScore] = useState(0);
    const [review, setReview] = useState({
        writer: 'manager1',
        item_code: item.code,
        title: '',
        contents: '',
        score: '0',
        tag: null,
    });
    const [file, setfile] = useState();
    const [fileURL, setFileURL] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const submitReview = async () => {
        setLoading(true);
        const formData = new FormData();
        formData.append('writer', review.writer);
        formData.append('item_code', review.item_code);
        formData.append('title', review.title);
        formData.append('contents', review.contents);
        formData.append('score', review.score);
        if (file) {
            formData.append('uploadfilef', file);
        }

        await api('/itemreview/insertmultipart', 'post', formData, user.token)
            .then(res => {
                setLoading(false);
                dispatch(changeAlert({
                    title: '제출 성공!',
                    content: ``,
                    time: 3,
                    style: {
                        top: '50%',
                        left: 'calc(50% - 150px)',
                        zIndex: 5
                    }
                }));
            }).catch(err => {
                console.log(err.message)
                setLoading(false);
                setError(true);
            });
        setRefresh(!refresh);
        reviewWriteBoxClose();
    }

    const changeFile = (e) => {
        setfile(e.target.files[0]);

        const reader = new FileReader();
        reader.onload = (event) => {
            setFileURL(event.target.result)
        }
        reader.readAsDataURL(e.target.files[0])
    };

    const changeTag = (event) => {
        setReview((prev) => ({
            ...prev,
            tag: event.target.innerText
        }))
    }

    if (loading) return <Loading />
    if (error) return <Error />

    const changeReview = (event) => {
        setReview((review) => ({
            ...review,
            [event.target.name]: event.target.value
        }))
    }

    const changeScore = (event) => {
        setScore(event.target.id);
    }
    const clickScore = (event) => {
        setReview((review) => ({
            ...review,
            score: event.target.id
        }))
    }

    const resetScore = () => {
        setScore(review.score);
    }

    const reviewWriteBoxClose = () => {
        setWriteBoxClose(!writeBoxClose);
        reviewWriteClick();
    }
    return (
        <>
            {writeBoxClose &&
                <div id="reviewWriteForm" >
                    <div>
                        <div id="reviewWriteBox">
                            <h4>상품 후기 작성하기</h4>
                            <div id="reviewWriteBottom">
                                <div className="reviewWriteTag">
                                    <div>상품 이름</div>
                                    <textarea type="text" readOnly value={item.name}>{item.name}</textarea>
                                </div>
                                <div className="reviewWriteTag">
                                    <div>별점 주기</div>
                                    <div id='reviewWriteStarBox'>

                                        {
                                            score >= 1 ?
                                                <i id='1' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-solid fa-star"></i>
                                                :
                                                <i id='1' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-regular fa-star"></i>
                                        }
                                        {
                                            score >= 2 ?
                                                <i id='2' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-solid fa-star"></i>
                                                :
                                                <i id='2' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-regular fa-star"></i>
                                        }
                                        {
                                            score >= 3 ?
                                                <i id='3' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-solid fa-star"></i>
                                                :
                                                <i id='3' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-regular fa-star"></i>
                                        }
                                        {
                                            score >= 4 ?
                                                <i id='4' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-solid fa-star"></i>
                                                :
                                                <i id='4' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-regular fa-star"></i>
                                        }
                                        {
                                            score >= 5 ?
                                                <i id='5' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-solid fa-star"></i>
                                                :
                                                <i id='5' onMouseOver={changeScore} onMouseOut={resetScore} onClick={clickScore} className="fa-regular fa-star"></i>
                                        }
                                    </div>
                                </div>
                                <div className="reviewWriteKeword">
                                    <div id='kewordSelect'>키워드 선택</div>
                                    <div id='kewordList' onClick={changeTag}>
                                        <div onClick={changeTag} style={{ backgroundColor: review.tag == '맛있어요' ? '#9b1b20' : '#fff', color: review.tag == '맛있어요' ? '#fff' : 'black' }}>맛있어요</div>
                                        <div onClick={changeTag} style={{ backgroundColor: review.tag == '신선해요' ? '#9b1b20' : '#fff', color: review.tag == '신선해요' ? '#fff' : 'black' }}>신선해요</div>
                                        <div onClick={changeTag} style={{ backgroundColor: review.tag == '가성비 좋아요' ? '#9b1b20' : '#fff', color: review.tag == '가성비 좋아요' ? '#fff' : 'black' }}>가성비 좋아요</div>
                                        <div onClick={changeTag} style={{ backgroundColor: review.tag == '배송이 빨라요' ? '#9b1b20' : '#fff', color: review.tag == '배송이 빨라요' ? '#fff' : 'black' }}>배송이 빨라요</div>
                                    </div>
                                </div>
                                <div className="reviewWriteTag">
                                    <div>리뷰제목</div>
                                    <textarea onChange={changeReview} name="title" type="text" placeholder="상품 후기의 제목을 입력해주세요" value={review.title}></textarea>
                                </div>
                                <div className="reviewWriteTag">
                                    <div>상세리뷰</div>
                                    <textarea id='reviewWriteTag_detail' value={review.contents} onChange={changeReview} name="contents"
                                        placeholder="다른 고객님에게 도움이 되도록 상품에 대한 솔직한 평가를 300자 이내로 남겨주세요.
                                                            (상품 품질과 관계 없는 배송, 포장, 질문 응대, 상품 가격 등은 판매자 서비스 평가에 남겨주세요.)">
                                    </textarea>
                                </div>
                                <div className="reviewWriteTag">
                                    <div>사진첨부</div>
                                    <div>
                                        {fileURL && <img src={fileURL} alt="후기사진" />}
                                        <input onChange={changeFile} type='file' name='uploadfilef' />
                                    </div>
                                </div>
                                <div id="reviewWriteContentBottom">
                                    <p>* 상품 품질과 관계 없는 내용은 비공개 처리 될 수 있습니다</p>
                                    <p>* 작성된 리뷰는 '마이페이지 - 상품 후기 관리' 에서 수정 및 삭제 가능합니다</p>
                                </div>
                            </div>
                            <div id="reviewWriteButton">
                                <button onClick={reviewWriteBoxClose} id="reviewWriteCancle">취소</button>
                                <button onClick={submitReview} id="reviewWriteEnter"
                                    style={{
                                        backgroundColor: review.title.length > 0 && review.contents.length > 0 ? '#9b1b20' : '#e0e0e0',
                                        color: review.title.length > 0 && review.contents.length > 0 ? '#fff' : 'black'
                                    }}>등록</button>
                            </div>
                        </div>
                        <i onClick={reviewWriteBoxClose} id="reviewWriteBoxClose" className="fa-solid fa-xmark"></i>
                    </div>
                </div>
            }
        </>
    );
}

export default Detail_review_write;