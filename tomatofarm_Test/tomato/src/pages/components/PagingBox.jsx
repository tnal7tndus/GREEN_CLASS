import { useRef, useState } from "react";
import "./PagingBox.css";


// ** PagingBox 사용법
// => 부모컴포넌트에서 4개 값을 보내줘야 한다.
// 1. limit : 페이지당 출력하고자 하는 데이터의 개수
//    => limit 상태값 변수를 이용하면 페이징 컴포넌트의 사용이 쉬워진다.
//       list 형태의 데이터를 출력하는 페이지라면 몇개씩 출력할지 정하는 경우가 많다.
//       limit 변수를 사용하는거 어떤가 ????
// 2. list : 사용하려는 DataList   ex) itemList
// 3. currPage : 현재 페이지를 알리기 위한 상태값
//    부모컴포넌트에  const [currPage, setCurrPage] = useState(1);  지정
// 4. setCurrPage 함수도 같이 보내줘야한다.

// 5. 부모컴포넌트에 필요한 메서드
//    const paging = () => (list, currPage, limit) => {
//        const start = limit * (currPage - 1);
//        const end = currPage * limit;
//        return list.slice(start, end);
//    }
//    화면에 출력시키고자 하는 List를 map 돌리고 있을텐데
//    그 List 자리에 paging(사용할List, 상태값으로 쓸 currPage, 상태값으로 쓸 limit) 를 전달해주면
//    현재 페이지, limit에 맞게 slice해서 화면에 출력해준다.

const paging = (list, currPage, limit) => {
    const start = limit * (currPage - 1);
    const end = currPage * limit;
    return list.slice(start, end);
}

const PagingBox = ({ limit, list, currPage, setCurrPage }) => {
    // 페이징 할 <div> 태그 만들때 쓰는 함수
    let needPageCount = 1;
    let arr = [];
    if (list) {
        needPageCount = Math.ceil(list.length / limit);
        for (let i = 0; i < needPageCount; i++) {
            arr.push(i + 1);
        }
    }
    return (
        <div className="pagingBox">
            {currPage != 1 && <i onClick={() => setCurrPage(1)} className="fa-solid fa-angles-left left2" ></i>}
            {currPage != 1 && <i onClick={() => setCurrPage(currPage - 1)} className="fa-solid fa-chevron-left left1"></i>}
            <div className="pagingBoxNumber">
                <p onClick={() => setCurrPage(currPage - 2)}>{arr[currPage - 1 - 2]}</p>
                <p onClick={() => setCurrPage(currPage - 1)}>{arr[currPage - 1 - 1]}</p>
                <p className="selected" onClick={() => setCurrPage(currPage)}>{arr[currPage - 1]}</p>
                <p onClick={() => setCurrPage(currPage + 1)}>{arr[currPage - 1 + 1]}</p>
                <p onClick={() => setCurrPage(currPage + 2)}>{arr[currPage - 1 + 2]}</p>
            </div >
            {currPage < arr.length && <i onClick={() => setCurrPage(currPage + 1)} className="fa-solid fa-chevron-right right1"></i>}
            {currPage < arr.length && <i onClick={() => setCurrPage(arr.length)} className="fa-solid fa-angles-right right2"></i>}
        </div >
    );
    // 우리가 보고자 하는 데이터의 개수를 가지고 필요한 페이지 수를 계산  
    // ex) 필요한 페이지 수 7 => [1,2,3,4,5,6,7] 배열 return
    // return [1, 2, 3, 4, 5, 6, 7];
}

export { paging };
export default PagingBox;