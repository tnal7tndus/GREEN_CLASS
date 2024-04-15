import "./CustomerQA.css";
import { useState } from 'react';
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
                    <div onClick={bestQACdivck} className="bestQARow">
                        <div>1</div>
                        <div>교환/반품/환불</div>
                        <div>환불을 신청했는데 환불 기간은 얼마나 소요되나요?</div>
                    </div>
                    <p id="bestQAAnswer">
                        ▶ 결제수단별 환불 기간 상이<br></br>
                        <br></br>
                        환불 접수 완료 후, 결제 수단별 환불 시점은 아래와 같이 소요됩니다.<br></br>
                        (반품환불은 상품 회수 - 업체 입고 - 환불승인단계를 거쳐 진행되오니 참고 부탁드립니다.)
                        <br></br>
                        - 신용카드 : 2 영업일 이내, 카드사 승인 취소(페이코,케이페이,페이나우 등 간편결제 동일)<br></br>
                        - 체크카드 : 2 영업일 이내, 카드사 승인 취소 후 해당 카드에 연계된 계좌로 입금<br></br>
                        - 실시간 계좌이체 : 2 영업일 이내, 승인 취소 후 결제 계좌로 입금<br></br>
                        - 무통장입금 : 2 영업일 이내 환불신청 계좌로 입금<br></br>
                        (Ex. 7월 6일(금) 즉시취소/취소/환불 승인 - 7월 10일(화) 이내 결제사 취소 반영)<br></br>
                        - 토마토팜 포인트 : 즉시 적립<br></br>
                        (단, 무통장입금+포인트 복합 결제시 무통장입금건 환불처리 이후 포인트 적립됩니다.)<br></br>
                    </p>
                    <div onClick={bestQACdivck} className="bestQARow">
                        <div>2</div>
                        <div>구매/결제</div>
                        <div>상품에 대한 추가 정보를 확인하고 싶습니다.</div>
                    </div>
                    <p id="bestQAAnswer">
                        ▶ 상품 상세페이지 - 상품정보, 구매내역 - 주문상세 에 기재된 판매자 연락처 또는 판매자톡, Q&A 게시판을 통해 직접 문의 가능<br></br>
                        <br></br>
                        - 상품 상세 페이지와 주문내역-주문상세보기 에서 판매자정보 확인이 가능합니다.<br></br>
                        (노출정보: 판매자명/상호/대표자명/전화번호/이메일/사업자등록번호/주소 등)<br></br>
                        판매자정보에 기재된 전화번호 또는 상품페이지 내 Q&A 게시판, 판매자톡을 통해 판매자에게 직접 문의할 수 있습니다. <br></br>
                        <br></br>
                        - 판매자톡, Q&A 게시판에 작성하신 질문 및 답변 내역은 마이페이지 - 판매자톡, 상품문의 에서 확인 할 수 있습니다.<br></br>
                    </p>
                    <div onClick={bestQACdivck} className="bestQARow">
                        <div>3</div>
                        <div>배송</div>
                        <div>배송중인 상품의 위치를 확인하고 싶어요.</div>
                    </div>
                    <p id="bestQAAnswer">
                        ▶ 마이페이지 - 주문배송조회 - 배송조회에서 확인 가능<br></br>
                        <br></br>
                        ㆍ토미토팜에서는 상품 출고송장 등록 시, 고객님께 출고 안내 SMS/알림톡을 발송해드리고 있습니다.<br></br>
                        ㆍ마이페이지 - 주문배송조회 - 배송조회 버튼을 클릭하시면 확인하실 수 있습니다.<br></br>
                        ㆍ 운송장 등록 후, 택배사 사정에 따라 실제 송장조회가 반영되는데 까지 영업일기준 1일 정도 소요될 수 있습니다.<br></br>
                        택배사에서 집하된 상품이 배송중 위치추적이 어렵거나, 흐름조회가 어려울 경우 실제 배송을 담당하고 있는 택배사측으로 문의를 부탁드리겠습니다.<br></br>
                        (배송조회시 택배기사 연락처가 확인되지 않는 경우, 택배사 홈페이지를 통해 확인하실 수 있습니다.)<br></br>
                        <br></br>
                        ㆍ 우편배송상품의 경우 출고일을 안내드리고 있습니다.<br></br>
                        우편 발송 물량에 따라 영업일 기준 5일에서 최대 14일 정도 소요될 수 있습니다. (우편함 확인 필요)<br></br>
                        <br></br>
                        ㆍ 가구, 가전 등 대형 화물 배송(직배송)상품의 경우, 업체 사정에 의해 배송예정일이 변동될 가능성이 있기 때문에,<br></br>
                        정확한 배송일정은 상품페이지 - 판매자문의로 문의를 부탁드리겠습니다.<br></br>
                    </p>
                    <div onClick={bestQACdivck} className="bestQARow">
                        <div>4</div>
                        <div>포인트/할인쿠폰</div>
                        <div>포인트는 현금으로 교환할 수 있나요?</div>
                    </div>
                    <p id="bestQAAnswer">
                        ▶ 유료포인트만 환급 가능<br></br>
                        <br></br>
                        ㆍ무료포인트는 현금으로 교환할 수 없습니다.<br></br>
                        ㆍ유료포인트의 경우 5% 환급 수수료로 공제되고 95%가 환급이 가능합니다.<br></br>
                        ㆍ유료포인트 환급 신청 시 유료 포인트는 바로 회수되며, 5% 환급수수료를 제외한 나머지 금액만 환급 처리됩니다.<br></br>
                        (90% 현금 환급, 5% 포인트 환급)<br></br>
                        ㆍ유료포인트 환급은 신청일로부터 3~6일 후 지급됩니다.<br></br>
                        단, 현금환급 신청 금액이 30만원을 넘을 경우 신청일로부터 7~10일 후 지급됩니다.<br></br>
                    </p>
                    <div onClick={bestQACdivck} className="bestQARow">
                        <div>5</div>
                        <div>구매/결제</div>
                        <div>주문한 상품을 취소하고 싶은데 어떻게 해야 하나요?</div>
                    </div>
                    <p id="bestQAAnswer">
                        ▶ 마이페이지 - 주문배송조회 에서 주문취소 가능<br></br>
                        <br></br>
                        [배송상품]<br></br>
                        <br></br>
                        1. 신규주문<br></br>
                        - 판매자 측의 주문확인 전으로 마이페이지 - 주문배송조회에서 직접 취소 가능<br></br>
                        (일부 상품의 경우 즉시취소 어려울 수 있어 1:1문의로 접수 부탁드립니다.)<br></br>
                        <br></br>
                        2. 상품준비중<br></br>
                        - 파트너사(판매업체)에서 고객님의 주문내역을 확인한 상태로, 취소신청이 가능합니다.<br></br>
                        - 즉각적인 취소가 어려우며, 상품이 출고되었을 경우에는 취소가 어려울 수 있습니다.<br></br>
                        - 마이페이지 - 주문배송조회 페이지에서 취소신청 버튼 클릭<br></br>
                        (일부상품의 경우 취소신청이 어려울 수 있어 1:1문의로 접수 부탁드립니다.)<br></br>
                        <br></br>
                        3. 배송중, 배송완료<br></br>
                        - 이미 상품이 발송되어 즉시 취소신청이 어려운 상태로, 택배사측으로 수취거부 의사 전달 상품 수령 후 다음날로부터 7일 이내 마이페이지-취소/교환/반품 페이지에서 반품신청 버튼을 클릭하여 반품접수가 가능합니다.<br></br>
                        - 수취거부 및 반품 접수 시, 반품 배송비가 발생할 수 있습니다.<br></br>
                        - 송장 입력되었으나, 수령하지 못하신 상품의 취소문의는 토마토팜 또는 1:1문의를 이용 부탁드립니다.<br></br>
                    </p>
                </div>
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
            </div>
        </>
    );
}

export default CustomerQA;