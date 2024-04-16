import './Detail_review_box.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import PagingBox, { paging } from '../../../components/PagingBox';
import Detail_review_box_row from './Detail_review_box_row';
import Detail_review_write from './Detail_review_write';
import { useDispatch, useSelector } from 'react-redux';
import { changeAlert } from '../../../redux/basic/actions';


const Detail_review_box = ({ item }) => {
    const user = useSelector(state => state.user.data);
    const dispatch = useDispatch();


    const [itemReviewList, setItemReviewList] = useState(null);
    const [refresh, setRefresh] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [reviewWrite, setDetail_review_box_row] = useState(false);
    const [limit, setLimit] = useState(5);
    const [currPage, setCurrPage] = useState(1);
    const [pageList, setPageList] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8090/itemreview/select?column=item_code&keyword=${item.code}`
        ).then(res => {
            setLoading(false);
            setItemReviewList(res.data);
            setPageList(res.data);
            setCurrPage(1);
            setLoading(false);
        }).catch(err => {
            console.log(err.message)
            setLoading(false);
            setError(true);
        })
    }, [refresh])

    if (loading) return <Loading />
    if (error) return <Error />

    const reviewWriteClick = () => {
        if (user)
            setDetail_review_box_row(!reviewWrite);
        else
            dispatch(changeAlert({
                title: '로그인 필요!',
                content: `상품 후기 작성 시 로그인이 필요합니다.`,
                time: 3,
                style: {
                    top: '10px',
                    left: 'calc(50% - 150px)',
                    zIndex: 5
                }
            }));
    }

    return (
        <>
            <div id="reviewBoardBox" className="container appearContainer">
                <h5>상품후기</h5>
                <span>한줄리뷰 - 제목을 클릭하시면 상세내용을 보실 수 있습니다.</span>
                <div onClick={reviewWriteClick} id="reviewWrite" style={{
                    backgroundColor: user ? '#9B1B30' : '#e0e0e0',
                    color: user ? '#fff' : 'black'
                }}> 후기작성 </div>
                <div id="reviewBoard">
                    <div className="reviewBoardRow">
                        <div>사진</div>
                        <div>내용</div>
                    </div>
                    {pageList.length > 0 ?
                        paging(pageList, currPage, limit).map((e, i) => <Detail_review_box_row itemReview={e} key={i} />)
                        :
                        <div id='reviewNone'>
                            해당 상품에 후기가 없습니다.
                        </div>
                    }
                </div>

                <PagingBox
                    list={pageList}
                    limit={limit}
                    currPage={currPage}
                    setCurrPage={setCurrPage} />
                {reviewWrite ? <Detail_review_write refresh={refresh} setRefresh={setRefresh} item={item} reviewWriteClick={reviewWriteClick} /> : null}
            </div>
        </>
    );
}

export default Detail_review_box;