import "./CustomerQA.css";
import { useEffect, useState } from 'react';
import { api } from '../../model/model'
import { useDispatch, useSelector } from 'react-redux';
import { changeAlert } from "../redux/basic/actions";
import Alert from "../components/alert/Alert";
const CustomerQA = (setRefresh) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const user = useSelector(state => state.user.data);
    const alert = useSelector(state => state.basic.alert)
    const [form, setForm] = useState({
        type: '회원',
        title: '',
        contents: '',
    })
    const [questionList, setQuestionList] = useState(null);

    console.log(questionList)
    useEffect(() => {
        api('/page/question', 'get')
            .then(res => {
                setQuestionList(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])

    const bestQACdivck = (event) => {
        const ele = event.target.closest('.bestQARow').nextElementSibling;
        if (ele.style.display != "block") {
            ele.style.display = "block";
        } else {
            ele.style.display = "none";
        }
    };

    const resetForm = () => {
        setForm({
            type: '회원',
            title: '',
            contents: '',
        })
    }
    const changeForm = (event) => {
        setForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const submitQA = async () => {
        if (user) {
            await api(`/itemask/merge`, 'post', form, user.token
            ).then(res => {
                setLoading(false);
                dispatch(changeAlert({
                    title: '제출 성공!',
                    content: ``,
                    time: 3,
                    style: {
                        top: '50%',
                        left: 'calc(50% - 150px)',
                        zIndex: 5
                    }
                }));
            }).catch(err => {
                console.log(err.message)
                setLoading(false);
                setError(true);
            });
            resetForm();
        }
        else {
            dispatch(changeAlert({
                title: '로그인 필요!',
                content: `1:1 문의시 로그인이 반드시 필요합니다.`,
                time: 3,
                style: {
                    top: '50%',
                    left: 'calc(50% - 150px)',
                    zIndex: 5
                }
            }));
        }
    }



    return (
        <>
            <div id="customerQABox" className="container">
                <h3><i className="fa-solid fa-circle-question"></i> 자주 묻는 질문 <i className="fa-solid fa-circle-question"></i></h3>
                <h4>자주 묻는 질문 Top5</h4>
                <div id="bestQAForm">
                    {
                        questionList &&
                        questionList.map((e, i) =>
                            <div key={i}>
                                <div onClick={bestQACdivck} className="bestQARow">
                                    <div>{e.seq}</div>
                                    <div>{e.type}</div>
                                    <div>{e.title}</div>
                                </div>
                                <p id="bestQAAnswer">
                                    {e.content}
                                </p>
                            </div>
                        )
                    }
                </div >
                <h3><i className="fa-solid fa-message"></i> 1:1 문의하기 <i className="fa-solid fa-message"></i></h3>
                <div id="customerQABottom">
                    {alert && <Alert />}
                    <div className="customerQAKeword">
                        <div id='kewordSelectQA'>문의 유형</div>
                        <div id='kewordListQA'>
                            <label><input onChange={(e) => changeForm(e)} type='radio' name='type' value='회원' checked={form.type == '회원'}></input>회원</label>
                            <label><input onChange={(e) => changeForm(e)} type='radio' name='type' value='상품' checked={form.type == '상품'}></input>상품</label>
                            <label><input onChange={(e) => changeForm(e)} type='radio' name='type' value='이벤트' checked={form.type == '이벤트'}></input>이벤트</label>
                            <label><input onChange={(e) => changeForm(e)} type='radio' name='type' value='홈페이지' checked={form.type == '홈페이지'}></input>홈페이지</label>
                        </div>
                    </div>
                    <div className="customerQATag">
                        <div>문의 제목</div>
                        <textarea name="title" type="text" placeholder="제목을 입력해주세요." value={form.title} onChange={(e) => changeForm(e)}></textarea>
                    </div>
                    <div className="customerQATag">
                        <div>문의 내용 </div>
                        <textarea id='customerQATag_detail' name="contents" placeholder="내용을 입력해주세요." value={form.contents} onChange={(e) => changeForm(e)}></textarea>
                    </div>
                </div>
                <div id="customerQAButton">
                    <button onClick={() => resetForm()} id="customerQACancle">취소하기</button>
                    <button onClick={form.title.length > 0 && form.contents.length > 0 ? () => submitQA() : null}
                        style={{
                            backgroundColor: form.title.length > 0 && form.contents.length > 0 ? '#9b1b20' : '#e0e0e0',
                            color: form.title.length > 0 && form.contents.length > 0 ? '#fff' : 'black'
                        }}
                        id="customerQAEnter">문의하기</button>
                </div>
            </div >
        </>
    );
}

export default CustomerQA;