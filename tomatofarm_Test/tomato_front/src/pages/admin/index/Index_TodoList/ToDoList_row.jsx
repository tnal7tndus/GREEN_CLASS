import { useState } from "react"
import { api } from "../../../../model/model";
import Loading from './../../../components/Loading';
import Error from './../../../components/Error';

const ToDoList_row = ({ events, setEvents, e }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [update, setUpdate] = useState(false)
    const [inputValue, setInputValue] = useState(e.content)

    const changeCheck = (seq, state) => {
        if (state)
            api(`/todo/uncheck`, 'post', { seq: seq })
                .then(res => {
                    setEvents(res.data)
                    setLoading(false);
                }).catch(err => {
                    setLoading(false);
                })
        else
            api(`/todo/check`, 'post', { seq: seq })
                .then(res => {
                    setEvents(res.data)
                    setLoading(false);
                }).catch(err => {
                    setLoading(false);
                })
    }

    const deleteEvent = (seq) => {
        api(`/todo/delete`, 'post', { seq: seq })
            .then(res => {
                setEvents(res.data)
                setLoading(false);
            }).catch(err => {
                setLoading(false);
            })
    }

    const updateEvent = (event) => {
        event.preventDefault();
        api('/todo/update', 'post', { seq: e.seq, content: inputValue })
            .then(res => {
                setEvents(res.data)
                setLoading(false);
            }).catch(err => {
                setLoading(false);
            })
        setUpdate(false)
    }

    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }
    console.log(events);

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <li key={e.seq}>
            <label type="text">
                <input type="checkbox" onChange={() => changeCheck(e.seq, e.state)} checked={e.state == 1} />
                {update ?
                    <>
                        <input type="text" value={inputValue} onChange={handleOnChange} />

                        <button onClick={(e) => updateEvent(e)}>수정</button>
                    </>
                    :
                    <span>{e.content}</span>
                }
            </label>
            <div className="buttonBox">
                <i onClick={() => setUpdate(!update)} className="fa-solid fa-pen-to-square"></i>
                <i onClick={() => deleteEvent(e.seq)} className="fa-solid fa-trash"></i>
            </div>
        </li>

    );
}


export default ToDoList_row;