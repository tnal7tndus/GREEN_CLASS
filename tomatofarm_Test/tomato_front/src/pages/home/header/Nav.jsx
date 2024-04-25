import axios from 'axios';
import './nav.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import { SERVER_URL } from '../../../model/server-config';

function Nav({ appearinputBoxResetButton, resetInputBox }) {

    const [sortList, setsSortList] = useState(null);

    useEffect(() => {
        axios.get(SERVER_URL+"/item/sort"
        ).then(res => {
            setsSortList(res.data);
        }).catch(err => {
            console.log(`${err.message}`)
        })
    }, [])

    function seachCategory(event) {
        let key = event.target.value;
        let liBox = event.target.closest('ul').children;
        for (let i = 2; i < liBox.length; i++) {
            if (!liBox[i].innerText.includes(key)) {
                liBox[i].style.display = "none";
            } else {
                liBox[i].style.display = "block";
            }
        }
    }

    return (
        <nav>
            <div className="container">
                <div id="categoryBox">
                    <div id="categoryTag"><i className="fa-solid fa-bars"></i>&nbsp;&nbsp;&nbsp;카테고리</div>
                    <ul id="firstCategory">
                        <li></li>
                        <li id="firstCategorySearch">
                            <form>
                                <input onKeyUp={(event) => seachCategory(event)} onInput={(event) => appearinputBoxResetButton(event)}
                                    type="text" /><i onClick={(event) => resetInputBox(event)} className="fa-solid fa-circle-xmark"></i>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </form>
                        </li>
                        <CategoryList key={0} data={{ sort1: "밀키트", sort2: "밀키트" }} />
                        {sortList ? (sortList.filter((e) => e.sort1 != "밀키트").map((e, i) => <CategoryList key={i + 1} data={e} />)) : ('')}
                    </ul>
                </div>
                <ul id="navBar">
                    <li><Link to="/home/list?keyword=밀키트">밀키트 주문</Link></li>
                    <li><Link to="/home/list?keyword=식재료">재료 주문</Link></li>
                    <li><a href="">식단 주문</a></li>
                    <li><Link to="/event2">이벤트</Link></li>
                </ul>
            </div>
        </nav>
    );
}



export default Nav;