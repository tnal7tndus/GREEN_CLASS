import { useSearchParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ItemListFilter from './ItemListFilter';
import ItemListContainer from './ItemListContainer';
import Loading from './../../components/Loading';
import Error from './../../components/Error';
import { useSelector, useDispatch } from 'react-redux';
import { getItemList } from "../../redux/itemList/actions";
import { getItemSortList } from "../../redux/itemListSort/actions";
import { api } from "../../../model/model";
import { changeKeyword } from "../../redux/basic/actions";
import axios from "axios";
import { SERVER_URL } from "../../../model/server-config";

const ItemList = () => {
    console.log('ItemList랜더링')
    /* 🫓REDUX🫓 */
    const dispatch = useDispatch();
    const user = JSON.parse(sessionStorage.getItem('userinfo'));
    const itemList = useSelector(state => state.itemList);
    const itemListSort = useSelector(state => state.itemListSort);

    /* 검색창 관련 */
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");

    /* 홈페이지 방문 기록 작성 */
    useEffect(() => {
        dispatch(changeKeyword(searchParams.get("keyword")))
        api(`/visit/update?page=itemList`, 'get');
    }, [])

    /* 키워드 검색시 REDUX 상태값 가져오기 */
    useEffect(() => {
        dispatch(getItemList(`/item/search?keyword=${keyword}`, 'get', null, user && user.token))
        dispatch(getItemSortList(`/item/searchsort?keyword=${keyword}`, 'get'))

        axios.get(SERVER_URL+`/visit/update`, {
            params: {
                page: 'list',
            }
        })
    }, [keyword])

    /* listFilter 관련 */
    const filterCheckedList = useRef()
    const [deletedSort, setDeletedSort] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: '', max: '' })

    /* 검색된 sort중 삭제할 sort를 저장할 배열(deletedSort) 저장 */
    const changeDeletedSort = (event) => {
        const value = event.target.closest('li').children[1].innerText;
        for (let e of filterCheckedList.current) {
            if (e.sort2 == value) {
                if (deletedSort.includes(value)) {
                    setDeletedSort(deletedSort.filter(e => e != value))
                } else {
                    setDeletedSort([...deletedSort, value])
                }
            }
        }
    }

    /* sort중 삭제할 sort를 저장할 배열(deletedSort)에 있는 요소들로 검색 sort 제거 */
    const changeItemList = () => {
        let result = [...itemList.data];
        for (let ele of deletedSort) {
            result = result.filter((e) => e.sort2 != ele && e.brand != ele)
        }
        if (priceRange.min != '')
            result = result.filter(e => Math.round(e.price * (100 - e.discount) / 100) >= priceRange.min)
        if (priceRange.max != '')
            result = result.filter(e => Math.round(e.price * (100 - e.discount) / 100) <= priceRange.max)
        return result;
    }

    /* list 페이지에서 detail 보기 */
    const [showDetail, setShowDetail] = useState(false);

    const handleOnClick = (event) => {
        setShowDetail(!showDetail)
    }

    if (itemList.loading || itemListSort.loading) return <Loading />
    if (itemList.error || itemListSort.error) return <Error />

    if (itemListSort.data) {
        filterCheckedList.current = itemListSort.data.filter(e => e.count > 0);
    }

    return (
        <>
            <div id="searchTitle" className="container">
                {keyword ?
                    <>
                        " <b>{keyword}</b> " <span> 에 대한 검색 결과</span>
                    </>
                    :
                    <>
                        " <b>전체 검색</b> " <span> 에 대한 검색 결과</span>
                    </>
                }
            </div >
            <div className="container">
                <ItemListFilter
                    itemListSort={itemListSort.data} deletedSort={deletedSort} changeDeletedSort={changeDeletedSort}
                    priceRange={priceRange} setPriceRange={setPriceRange} />
                <ItemListContainer itemList={changeItemList()} />
            </div>
        </>
    );
}

export default ItemList;

