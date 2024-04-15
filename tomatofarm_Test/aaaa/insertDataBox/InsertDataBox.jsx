import "./InsertDataBox.css";
// import DataColumn from "./DataColumn";
import { useEffect, useState } from 'react';
import axios from 'axios';


const AddDataHead = ({ myLocation }) => {
    const [column, setColumn] = useState(null);
    const [length2, setLength] = useState(null);
    const [formData, setFormData] = useState([])
    const [formDataArray, setFormDataArray] = useState([]);

    const numbers = Array.from({ length: length2 }, (_, index) => index);
    useEffect(() => {
        axios.get(`http://localhost:8090/item/allitem`)
            .then(res => {
                setColumn(Object.keys(res.data[0]));
                setLength(10);
            })
            .catch(err => {
                console.log(err.message);
            });

        myLocation();
    }, []);






    const insertAll = () => {
        console.log(formData);
        axios.post(`http://localhost:8090/item/insert`, [{
            code: "1",
            sort1: "a"
        },
        {
            code: "2",
            sort1: "b"
        }
        ]
            , {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => console.log(res.data)
            ).catch(err => console.log(err.message));
    }




    const checkInputChange = (event, col) => {
        const value = event.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [col]: value
        }));
    };

    const changeRowCount = (num) => {
        const count = length2 + 1 * num;
        setLength(count);
    }


    return (
        <div id="excelBox" className="containerA">
            <div id="topBox">
                <div style={{ fontWeight: 'bold' }}><i className="fa-solid fa-list"></i>&nbsp;&nbsp;식자재 등록</div>
                <div id="topButtonBox">
                    <div onClick={() => changeRowCount(1)}>+</div>
                    <div onClick={() => changeRowCount(-1)}>-</div>
                    <div onClick={insertAll}>등록</div>
                </div>
            </div>
            <div id="excelHead">
                {column ? column.map((col, i) => <div style={{ width: `calc(100% / ${column.length})` }} id={col} key={i}>{col}</div>) : ""}
            </div>

            {numbers.map((e, i) =>
                <div className="excelData" key={i} >
                    {column ? column.map((col, i) => (
                        <input
                            onChange={(event) => checkInputChange(event, col)}
                            type="text"
                            style={{ width: `calc(100% / ${column.length})` }}
                            id={col}
                            key={i}
                        />
                    )) : ""}
                </div>
            )}
        </div>
    );
}


export default AddDataHead;