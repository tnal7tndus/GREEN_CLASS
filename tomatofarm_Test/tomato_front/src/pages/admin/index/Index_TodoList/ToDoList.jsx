import { useState, useEffect } from "react";
import "./ToDoList.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ToDoList_Write from './ToDoList_Write';
import Loading from './../../../components/Loading';
import Error from './../../../components/Error';
import { api } from "../../../../model/model";
import ToDoList_row from "./ToDoList_row";

const ToDoList = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState([
        { enddate: '2024-04-24', content: 'Meeting', state: 0 }
    ]);
    const [todoWrite, setTodoWrite] = useState(false);
    let completedEvent = events.filter(e => e.state == 1).length;

    useEffect(() => {
        api(`/todo/selectall`, 'get', null)
            .then(res => {
                setLoading(false);
                setEvents(res.data);
            }).catch(err => {
                setLoading(false);
                setError(true);
            })
    }, []);


    const changeDate = (newDate) => {
        // new Date(newDate.setDate(newDate.getDate() + 1))
        setDate(newDate);
    }
    const getEventsForDate = (date) => {
        return events.filter(event => event.enddate == date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0'));
    }

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <div className="todoListBox">
            <h2 className="todoListTitle">ToDo List 📅</h2>
            <div className="scheduleBoxTotal">
                <div>🟢 완료 : {completedEvent} </div>
                <div>🟠 미완료 : {events.length - completedEvent}</div>
            </div>
            <div className="calendar">
                <Calendar
                    onChange={changeDate}
                    value={date}
                    tileContent={({ date }) => {
                        const eventForDate = getEventsForDate(date);
                        return (
                            <div className="todo">
                                {eventForDate.length > 0 &&
                                    eventForDate.map((e, i) =>
                                        <div key={i}>
                                            {e.state == 1 ?
                                                '🟢'
                                                :
                                                '🟠'
                                            }
                                        </div>)
                                }
                            </div>
                        );
                    }}
                />
            </div>

            <div className="todoListWriteBox">
                <div className="newScheduleWriteButton" onClick={() => setTodoWrite(!todoWrite)}>일정 등록</div>
                <h3 className="todayDate">{`${new Date(date).getFullYear()}년 ${new Date(date).getMonth()}월 ${new Date(date).getDate()}일`}</h3>

                <ul className="scheduleBoxList">
                    {events.filter(e => e.enddate == date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0')).map(e =>
                        <ToDoList_row e={e} key={e.seq} setEvents={setEvents} events={events} />
                    )}
                </ul>

                {todoWrite ?
                    <ToDoList_Write setTodoWrite={setTodoWrite} date={date} setEvents={setEvents} />
                    :
                    null}
            </div>


        </div>

    );
}

export default ToDoList;   