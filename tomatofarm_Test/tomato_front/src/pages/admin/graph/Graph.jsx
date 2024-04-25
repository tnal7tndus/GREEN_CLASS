import { useEffect, useState } from "react";
import "./Graph.css";
import LineChart from "./lineChart/LineChart";
import { api } from "../../../model/model";
import { useSelector } from 'react-redux';
import GraphDataBox from './GraphDataBox/GraphDataBox'


const Graph = ({ myLocation }) => {
    const user = useSelector(state => state.user.data);
    const [mainCategory, setMainCategory] = useState('/visit/selectwhere');
    const [subCategory, setSubCategory] = useState('views');
    const [howManyRecords, setHowManyRecords] = useState(10);
    const [graphData, setGraphData] = useState({
        all: [],
        cart: [],
        detail: [],
        list: [],
        order: [],
        day: [],
        month: [],
        select: [],
    });



    useEffect(() => {
        myLocation();
        let orderType;
        if (mainCategory == '/item/admingraph') {
            orderType = 'views'
        } else {
            orderType = 'visit_count';
        }
        api(`${mainCategory}`, 'get', null, user.token
        ).then(res => {
            setGraphData(pre => ({
                ...pre,
                all: res.data,
                select: res.data,
            }))
        })

    }, [mainCategory])

    const checkMainCategory = (event) => {
        if (event.target.value == 'x') return
        else if (event.target.value == '');
        let uri = event.target.value;
        event.target.closest('select').nextElementSibling.style.display = 'initial';
        setMainCategory(uri);
    }

    const checkSubCategory = (event) => {
//         1. 페이징 기능 정리
//             => ㄱ.부모컴포넌트에서 사용할 데이터를 DB에서 가지고 온 후,
//                 해당 데이터를 화면에 표시해줄 paging 함수
//         currPage, size 그리고 list라는 상태값을 갖는다.
//              paging 함수는 list 와 현재페이지, 출력해줄 아이템의 갯수 를 받아서
//              list를 페이지별 아이템 갯수에 맞게 화면에 출력시킨다.
// => ㄴ. < PagingBox /> 컴포넌트도 마찬가지로 list 와 현재페이지, 출력해줄 아이템의 갯수를 받아서
// 	list를 화면에 출력시킬 아이템 갯수에 맞게 나눠서 페이지박스를 만들어주고,
//     페이지를 이동시키면 currPage라는 상태값이 변화가 되고,
//         paging 함수를 통해 출력중인 아이템리스트도 변화가 일어난다.
// => ㄷ.대부분의 페이지에서 특정list를 사용하는 경우가 많아서
// 	DB에서 매번 새로 가져오는 경우가 아니라면, 만들어둔 paging함수와 PagingBox 컴포넌트를
// 	이용할 수 있게 된다.

// 3.장바구니 > 상품담기는 부분들(로컬, 세션, 전역상태값 등의 정확한 이해)

// 4. queryDSL 특정 메서드 제시해서
//    어떤식으로 동적검색이 되는지 설명할 수 있도록 이해하기.

// 4. 그래프 기능은 이해 다 되면 시작하기


// 발표를 할때, 어떤 데이터를 어떤 상태값을 가지고 어떤 컴포넌트를 활용했으며
// 어떤 기능을 구현했다.
// 좀 논리적으로 설명했으면 좋겠다.


// 보기만해도 로그인 한 사람의 장바구니 에 수량 0으로 들어가기(O) 
// => 1.  장바구니에서 삭제를 누르면 나머지 상품들이 화면에서 사라지는 문제(데이터는 남아있다.)
//              에러를 겪고 난 후에만 발생하는 문제!!!!!
// 	에러없이 진행하면 잘 되다가,
//     에러를 한번이라도 겪고 나면 그 후엔 삭제기능에 문제가 생김

//         => 2.  구매페이지에서 수량 0 아래로 내려가면 에러 발생

// 방문페이지 api로 수정하기

//     * 백
// 1. 스프링부트
// 2. jpa - hibernate(queryDSL 등)
// 3.

//     * DB
// mysql

//     * 프론트
// 리액트
// 리덕스
// axios

//     * 라이브러리


//     * 관리자 메인영역
// 날씨, 뉴스등 특정한 정보제공으로 채우기


    }

    return (
        <div id="GraphContainer">
            <div id="graphHead">
                <h3>
                    <i className="fa-solid fa-list"></i>자료 조회
                </h3>
                <div id='optionBar'>
                    <label htmlFor=""> DATA -
                        <select name="" id="">
                            <option value="">🍅🍅🍅🍅</option>
                            <option value="">페이지</option>
                            <option value="">상품</option>
                        </select>
                    </label>
                    <label htmlFor=""> 조회대상 -
                        <select name="" id="">
                            <option value="">🍅🍅🍅🍅</option>
                            <option value="">페이지</option>
                            <option value="">상품</option>
                        </select>
                    </label>
                    <label htmlFor=""> 조회기준 -
                        <select name="" id="">
                            <option value="">🍅🍅🍅🍅</option>
                            <option value="">일별</option>
                            <option value="">월별</option>
                            <option value="">누적</option>
                        </select>
                    </label>
                    <label htmlFor=""> 조회기간 -
                        <input type="month" />
                        ~
                        <input type="month" />
                    </label>
                    <div id='optionBTN'>조회</div>
                </div>
            </div>
            <div id="graphBox">
                {graphData && <LineChart graphData={graphData} />}
            </div>
            <GraphDataBox />
        </div>
    );
}

export default Graph;