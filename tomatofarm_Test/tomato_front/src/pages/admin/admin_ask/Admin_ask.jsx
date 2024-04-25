import "./Admin_ask.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import PagingBox, { paging } from "../../components/PagingBox";
import SelectAskBox_Row from './Admin_ask_row/Admin_ask_row';
import { SERVER_RESOURCE } from "../../../model/server-config";
import { api } from "../../../model/model";


const Admin_ask = () => {

    const [askList, setAskList] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [limit, setLimit] = useState(8);
    const [answered, setAnswered] = useState(2);
    const [searchRequest, setSearchRequest] = useState({
        column: 'title',
        keyword: ''
    });

    const getAskList = async () => {
        await api(`/itemask/select?column=${searchRequest.column}&keyword=${searchRequest.keyword}`)
            .then(res => {
                setAskList(res.data);
            }).catch(err => {
                console.log(err.message);
            })
    }

    useEffect(() => {
        getAskList();
    }, [])

    const filterList = (answered) => {
        if (askList) {
            if (answered == 0) {
                return askList.filter(list => list.reply == "" || list.reply == null);
            } else if (answered == 1) {
                return askList.filter(list => list.reply != "" && list.reply != null);
            } else {
                return askList;
            }
        }
    }

    const CheckAnswered = (num) => {
        if (answered != num) {
            setAnswered(num);
        } else {
            setAnswered(2);
        }
        setCurrPage(1);
    }

    const searchBoxChange = (event) => {
        const { name, value } = event.target;
        setSearchRequest((searchRequest) => ({
            ...searchRequest,
            [name]: value
        }));
    };

    const changeRefresh = (event) => {
        event.preventDefault();
        getAskList();
    }

    return (
        <div className="containerA">
            <div id="annTopBox">
                <h3>문의글
                    &nbsp;&nbsp;
                    <label>모두보기&nbsp;
                        <input
                            type="radio"
                            checked={answered == 2}
                            onChange={() => CheckAnswered(2)}
                        />
                    </label>
                    &nbsp;&nbsp;
                    <label>답변&nbsp;
                        <input
                            type="radio"
                            checked={answered == 1}
                            onChange={() => CheckAnswered(1)}
                        />
                    </label>
                    &nbsp;&nbsp;
                    <label>미답변&nbsp;
                        <input
                            type="radio"
                            checked={answered == 0}
                            onChange={() => CheckAnswered(0)}
                        />
                    </label>
                </h3>
            </div>
            <div id="announceBoard" className="appearContainer">
                <form>
                    <select name="column" onChange={searchBoxChange}>
                        <option value="title">제목</option>
                        <option value="contents">내용</option>
                        <option value="userIdWriter">작성자</option>
                        <option value="type">유형</option>
                    </select>
                    &nbsp;&nbsp;
                    <input type="text" name="keyword" onChange={searchBoxChange} />
                    <button onClick={changeRefresh}><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <div>
                    <div>번호</div>
                    <div>유형</div>
                    <div>제목</div>
                    <div>작성자</div>
                    <div>작성일시</div>
                    <div>답변</div>
                </div>
                <div>
                    <div>2</div>
                    <div>공지</div>
                    <div>토마토팜 홈페이지 이용시 </div>
                    <div><img src={SERVER_RESOURCE + "/img/logo.png"} alt="" /></div>
                    <div>2024-02-02</div>
                    <div></div>
                </div>
                <div>
                    <div>1</div>
                    <div>공지</div>
                    <div>명절 배송지연 관련 공지사항</div>
                    <div>홍길동</div>
                    <div>2024-02-02</div>
                    <div></div>
                </div>
                {filterList(answered) && paging(filterList(answered), currPage, limit).map((ask, i) => (
                    <SelectAskBox_Row setAskList={setAskList} key={i} ask={ask} />
                ))}
            </div>
            {filterList(answered) &&
                <PagingBox
                    limit={limit}
                    list={filterList(answered)}
                    currPage={currPage}
                    setCurrPage={setCurrPage} />}
        </div >
    );
}

export default Admin_ask;