import './Detail_ask.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import Detail_ask_row from './Detail_ask_row';
import Detail_ask_write from './Detail_ask_write';
import PagingBox, { paging } from '../../../components/PagingBox';
import { useDispatch, useSelector } from 'react-redux';
import { changeAlert } from '../../../redux/basic/actions';
import { SERVER_URL } from '../../../../model/server-config';


const Detail_ask = ({ item }) => {
    const user = JSON.parse(sessionStorage.getItem('userinfo'));
    const dispatch = useDispatch();
    const [itemAskList, setItemAskList] = useState(null);
    const [refresh, setRefresh] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [askWrite, setAskWrite] = useState(false);
    const [limit, setLimit] = useState(5);
    const [currPage, setCurrPage] = useState(1);

    useEffect(() => {
        axios.get(SERVER_URL+`/itemask/select?column=itemCode&keyword=${item.code}`
        ).then(res => {
            setItemAskList(res.data);
            setLoading(false);
            setCurrPage(1);
        }).catch(err => {
            console.log(err.message)
            setLoading(false);
            setError(true);
        })
    }, [refresh])


    console.log(itemAskList)
    const itemAskClick = () => {
        if (user)
            setAskWrite(!askWrite);
        else
            dispatch(changeAlert({
                title: '로그인 필요!',
                content: `상품 문의 작성 시 로그인이 필요합니다.`,
                time: 3,
                style: {
                    top: '10px',
                    left: 'calc(50% - 150px)',
                    zIndex: 5
                }
            }));
    }

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <>
            <div id="askBoardBox" className="container appearContainer">
                <h5>상품문의</h5>
                <span>상품문의 - 상품에 궁금하신점을 남겨주세요.</span>
                <div onClick={itemAskClick} id="itemAskWrite" style={{
                    backgroundColor: user ? '#9B1B30' : '#e0e0e0',
                    color: user ? '#fff' : 'black'
                }}>문의하기</div>
                <div id="askBoard">
                    <div className="askBoardRow">
                        <div>공개</div>
                        <div>답변</div>
                        <div>제목</div>
                        <div>작성자</div>
                        <div>작성일자</div>
                    </div>
                    {itemAskList ?
                        paging(itemAskList, currPage, limit).map((e, i) => <Detail_ask_row itemAsk={e} key={i} />)
                        :
                        <div id='askNone'>
                            해당 상품에 문의사항이 없습니다.
                        </div>
                    }
                </div>

                <PagingBox
                    list={itemAskList}
                    limit={limit}
                    currPage={currPage}
                    setCurrPage={setCurrPage} />
                {askWrite ? <Detail_ask_write refresh={refresh} setRefresh={setRefresh} item={item} itemAskClick={itemAskClick} /> : null}
            </div>
        </>
    );
}

export default Detail_ask;