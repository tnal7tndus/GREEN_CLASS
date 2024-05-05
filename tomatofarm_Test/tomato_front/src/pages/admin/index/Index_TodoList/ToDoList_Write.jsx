import "./ToDoList_Write.css";
import { useState } from "react";
import { api } from "../../../../model/model";
import Loading from './../../../components/Loading';
import Error from './../../../components/Error';

const ToDoList_Write = ({ setTodoWrite, date, setEvents }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [todoInput, setTodoInput] = useState("");

    const submitTodo = async () => {

        await api('/todo/insert', 'post', { content: todoInput, enddate: date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0') })
            .then(res => {
                setLoading(false);
                setEvents(res.data)
            }).catch(err => {
                setLoading(false);
                setError(true);
            });
        setTodoWrite(false);
    }

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <div className="newScheduleBox">
            <h3 className="newScheduleTitle">새로운 일정 등록하기</h3>
            <div className="newScheduleWrite">
                <input
                    placeholder="새로운 일정 입력하세요..." value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)} />
                <button onClick={submitTodo}>등록</button>
            </div>
        </div>
    );
}

export default ToDoList_Write;


