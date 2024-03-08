// ** JSX 컴포넌트 기본규칙
// => 컴포넌트명은 대문자로 시작 (1컴포넌트 1화일, 대부분 컴포넌트명과 화일명 동일)
// => {JS 표현식} : 기본자료형, 산술식,..객체, 배열 등
// => 단, 컨텐츠 또는 값(리터럴) 을 표현하는 위치에서
//    객체, 배열명 직접사용은 불허
// => class속성은 class가 JS 예약어이므로 className으로 사용
// => 모든 Tag는 닫힘 규칙
// => 최상위 Tag 규칙 (필요시 <div> 또는 <React.Fragment> Tag로 감싸줌)
// => 조건부 랜더링 : 삼항식({} 내에서 가능), 조건문 (JSX에서는 사용불가능)

// ** Css, 스타일 적용하기
// => 인라인 스타일링 : style={{스타일...}}
//    HTML의 경우 <h1 style="color:black; backgroundColor:Orange">
// => 스타일파일 분리
//    Body.css (컴포넌트화일명과 동일),
//    import './Body.css'
// => css import는 real_File_path만 명시함

// ** Props, 컴포넌트에 값 전달하기
// => Props(Properties)객체 : 부모에서 자식으로 값 전달
// => 그러므로 Body 컴포넌트에 Props로 값을 전달하기 위해서는
//    App 컴포넌트에서 전달해야함. ( name 값을 Body로 전달)

// ** React Event (Html과 차이점)
// => 이벤트 핸들러 카멜표기
// => 콜백함수처럼 함수 그자체를 전달
// => onClick={onClickHandler}
// => 기본이벤트 제거 ( return false 대신 e.preventDefault() 명시적으로 호출해야함 )

// ** 이벤트객체 활용 실습

// ** State


//==============================================================================

// ** 리액트 훅 (HOOK)
// => 클래스 컴포넌트가 가지고 있던 유용한 기능을
//    함수컴포넌트에서도 사용가능하도록 개발하여 제공하는 기능들
//    use~~로 명명됨 (useEffect, useContext, useReducer, useCallBack, useMemo 등)
//    HOOK(갈고리) : 클래스 기능을 낚아채듯 가져와 사용한다데서 유래..

// ** useRef (Reference)
// => DOM 요소를 직접 제어 할 수 있음.
//    ( DOM 노드, 엘리먼트, 리액트 컴포넌트의 주소값 참조 가능
//      JS 비교 : document.getElementById('root') )

// => useRef는 상태 값을 참조하되 그게 렌더링을 일으키지는 않게 하기 위해 사용하는 리액트 훅

// => current 속성을 가지고 있는 객체를 반환.
//    인자로 넘어온 초깃값을 이 current 속성에 할당하며 이 속성은 값을 변경하여도
//    리액트 컴포넌트는 리렌더링 되지 않으며,
//    리액트 컴포넌트가 리렌더링 되는 경우도 이 속성의 값을 잃지 않음.

// => ref는 렌더링 중에 읽거나 쓰려고 할 경우 순수기능을 잃고 예상치 못한 결과를 낼 수도 있어서
//    event handler에서 주로 사용함.

// => 입력폼 초기화, 포커스하기 등에 사용

export default function Body(props) {

    // ** 부모로부터 전달된 props 확인
    // => props 객체 구조분해 적용
    console.log(`** Body, props=${props}`);
    const { name, country } = props;

    return(
        <div className="body">
            <h2>여기는 Body영역 입니다~~</h2>
            <h3>* props.name={name}, props.country={country}</h3>
        </div>
    ); //return
};//Body

//** 다른방법 : 아래와 같이 기재해도 가능. 보통 이걸 많이 사용
// function Body() {

// };
// export default Body;

