import { useEffect, useState } from 'react';
import './Admin_insert.css'
import { api } from '../../../model/model';
import Admin_data_row from '../admin_data/Admin_data_row'


const Admin_insert = () => {
    const [whichTable, setWhichTable] = useState('/user');
    const [forSearch, setForSearch] = useState({
        column: 'id',
        keyword: '',
        howmany: 2
    });
    const [column, setColumn] = useState(null);
    const [waitData, setWaitData] = useState([]);
    const [formData, setFormData] = useState({});
    const user = sessionStorage.getItem('userinfo');

    useEffect(() => {
        setColumn(null);
        api(`${whichTable}/selectwhere?column=${forSearch.column}&keyword=${forSearch.keyword}`, 'get', null, user.token)
            .then(res => {
                setColumn(Object.keys(res.data[0]));
            })
            .catch(err => console.log(err.message))
    }, [whichTable])

    const changeTable = (e) => {
        setWaitData([]);
        setWhichTable(e.target.value);
        switch (e.target.value) {
            case '/event':
                setForSearch({
                    column: 'name',
                    keyword: ''
                })
                break;
            case '/item':
                setForSearch({
                    column: 'sort1',
                    keyword: ''
                })
                break;
        }
    }

    const changeFormData = (e) => {
        setFormData((pre) => ({
            ...pre,
            [e.target.name]: e.target.value
        }))
    }

    const changeWaitData = () => {
        setWaitData((pre) => [...pre, formData]);
    }

    const insertData = () => {
        api(`${whichTable}/merge`, 'post', waitData, user.token);
    }

    return (
        <>
            <div id="topBox">
                <h3>
                    <i className="fa-solid fa-file-import"></i>자료 입력
                </h3>

                <div id="optionBar">
                    <label htmlFor=""> Table -&nbsp;
                        <select name="" id="" onChange={changeTable}>
                            <option value="/item">상품</option>
                            <option value="/event">이벤트</option>
                        </select>
                    </label>
                </div>
            </div>
            <div id='totalContainer'>
                <div id='forInsertBox'>
                    {column && column.map((e, key) =>
                        key != 0 ?
                            <div className='forInsertRow' key={key}>
                                <div>{e}</div>
                                <div>
                                    <input name={e} type={e == 'startdate' || e == 'enddate' ? "date" : "text"} onChange={changeFormData} required />
                                </div>
                            </div>
                            : ""
                    )
                    }
                    <div className='forbuttonBox'><button onClick={changeWaitData}>입력</button><button>초기화</button></div>
                </div>
                <div id='waitInsertBox'>
                    <button onClick={insertData}>입력</button>
                    <div className="dataListBox">
                        <div className="excelHead" style={{ width: `${column && column.length * 150}px` }}>
                            {column ? (column.map((col, i) => (i !== 0 ? <div id={col} key={i}>{col}</div> : null))) : null}

                        </div>
                        {waitData && waitData.map((e, i) =>
                        (<Admin_data_row
                            column={column}
                            item={e} key={i}
                        />))}
                    </div>

                </div>
            </div>
        </>
    );
}

export default Admin_insert;