import { useState } from "react";


const Study_state = () => {

    const [number, setNumber] = useState(0);
    const [text, setText] = useState('');
    const [array, setArray] = useState(["가", "나", "다"]);
    const [object, setObject] = useState({
        id: 'manager',
        password: '12345!'
    })

    const changeNumber = (e) => {
        setNumber(e.target.value)
    }

    const handleInputChage = (e) => {
        const value = e.target.value;
        changeNumber(value);
    }
    const changeText = (e) => {
        setText(e.target.value);
    }

    const handleButton = () => {
        changeArray();
    }

    const changeArray = () => {
        setArray([...array, text])
    }
    const changeArray2 = () => {
        setArray(array.filter(e => e != text))
    }

    const handleButton2 = () => {
        changeArray2();
    }

    const changeObject = (value)=>{
        setObject({
            ...object,
            id : value
        })
    }
    return (
        <div>
            <input type="number" value={number} onChange={handleInputChage} />
            <hr></hr>
            {array.map((e, i) => <p key={i}>{e}</p>)}
            <input type="text" value={text} onChange={(e) => changeText(e)} />
            <button onClick={handleButton}>추가</button>
            <button onClick={handleButton2}>제거</button>
            <hr></hr>
            <p>{object.id}</p>
            <p>{object.password}</p>
            <input type="text" value={text} onChange={(e) => changeText(e)} />
            <button onClick={(e) => changeObject(text)}>id변경</button>
        </div>
    )
}

export default Study_state;