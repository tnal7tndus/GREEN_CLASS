import './ItemListContainer.css'
import { useState } from "react";
import ItemBox from './../../components/ItemBox';
import ItemBox_vertical from './../../components/itemBox_vertical/ItemBox_vertical';
import PagingBox, { paging } from "../../components/PagingBox";
import { useDispatch } from 'react-redux';
import { setItemList } from '../../redux/itemList/actions';


const ItemListContainer = ({ itemList }) => {
    console.log('ItemListContainer 랜더링')
    let size = 16;
    const makeListSize = () => {
        if (window.matchMedia("(max-width : 1024px)").matches) {
            size = 15;
        } else {
            size = 16;
        }
        setLimit(size)
    }
    window.addEventListener('resize', makeListSize);

    const dispatch = useDispatch();
    const [sort, setSort] = useState('sales');
    const [currPage, setCurrPage] = useState(1);
    const [limit, setLimit] = useState(16);
    const [vertical, setVertical] = useState({
        vertical: false,
        infinite: true
    });

    const sortItemList = (event, list) => {
        // 1. 정렬하고자 하는 Column 의 이름을 onClick 주는 요소의 id로 지정
        // 2. list = 정렬하고자 하는 List
        let sortType = event.target.id;
        let sortedList;
        if (sortType.includes("D")) {
            sortType = sortType.replace("D", "")
            sortedList = list.sort((a, b) => {
                setCurrPage(1)
                setSort(sortType + "D");
                return b[sortType] - a[sortType];
            })
        } else {
            setSort(sortType);
            setCurrPage(1)
            sortedList = list.sort((a, b) => {
                return a[sortType] - b[sortType];
            })
        }
        dispatch(setItemList(sortedList));
    }

    return (
        <>
            <div id="listContainer">
                <div id="containerOption">
                    <ul id="listButton">
                        <li style={{ opacity: !vertical.vertical && '1' }} onClick={() => setVertical(() => ({ ...vertical, vertical: false }))}><div></div></li>
                        <li style={{ opacity: vertical.vertical && '1' }} onClick={() => setVertical(() => ({ ...vertical, vertical: true }))}><div></div></li>
                        <li style={{ opacity: !vertical.infinite && '1' }} onClick={() => setVertical(() => ({ ...vertical, vertical: !vertical.infinite }))}><div></div></li>
                    </ul>
                    <div id="total">총 <span>{itemList ? itemList.length : '0'}</span> 개</div>
                    <div id="listOption">
                        <div id="sales" style={{ opacity: sort == "sales" ? '1' : '0.5' }} onClick={(event) => sortItemList(event, itemList)}>인기상품순</div>
                        <div id="price" style={{ opacity: sort == "price" ? '1' : '0.5' }} onClick={(event) => sortItemList(event, itemList)}>가격낮은순</div>
                        <div id="priceD" style={{ opacity: sort == "priceD" ? '1' : '0.5' }} onClick={(event) => sortItemList(event, itemList)}>가격높은순</div>
                    </div>
                </div>
                {
                    vertical.vertical ?
                        (paging(itemList, currPage, size).map((e, i) => <ItemBox_vertical key={i} item={e} />))
                        :
                        (paging(itemList, currPage, size).map((e, i) => <ItemBox key={i} item={e} />))
                }
                <PagingBox limit={limit} setLimit={setLimit} list={itemList} currPage={currPage} setCurrPage={setCurrPage} />
            </div>
        </>
    );
}

export default ItemListContainer;

