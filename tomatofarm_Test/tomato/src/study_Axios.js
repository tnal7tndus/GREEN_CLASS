// ** 두번째 인자로 보내면 data를 못받는 문제 발생
// => https://live-everyday.tistory.com/219 참고 블로그


// const insertAll = () => {
//     const api = axios.create({
//         baseURL: `http://localhost:8090/item`
//     })
//     api.post(`/insert`, {
//         code: 'asd',
//         sort1: 'soasd'
//     })
// }


// 문제점 1. 서버와의 연결은 확실히 확인했다. 하지만 이클립스에서 data가 매개변수로 들어가지 않음.
// 문제점 2. 매개변수로 entity를 넣어도, DTO를 넣어도 계속 null 이 나오는 문제
// 문제점 3. table 의 컬럼명 'like' 는 예약어라서 insert 불가
//           => ALTER TABLE item CHANGE `like` likes INT;

// ** axios.post(url , [,data(폼데이터 or JSON데이터)], [,config])

// 1 ) JSON.stringify(formData) 를 통해 두번째 인자로 전달해줬지만,
//     컨트롤러에서 받지 못하는 문제
const insertAll1 = () => {
    console.log('동작')
    axios.post(`http://localhost:8090/item/insert`, formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res.data)
    ).catch(err => console.log(err.message));
}

// 2 ) 세번째 인자로 params 라는걸 강제로 인식시켜줘야 한다.
//   => Controller 에서 정상적으로 받게 된다.
const insertAll2 = () => {
    console.log('동작')
    axios.post(`http://localhost:8090/item/insert`, null, {
        params: {
            code: '482211',
            sort1: '대분류',
        }
    });
}

// 3.1 ) 만들어진 fromData 를 전달해보자
//      => 매개변수에 담기지 않는 문제
// const insertAll = () => {
//     axios.post(`http://localhost:8090/item/insert`, formData)
//         .then(res => {
//             console.log("inserted successfully:", res.data);
//         })
//         .catch(err => {
//             console.error("Error :", err.message);
//         });
// };


// 3.2 )  params 라고 강제로 인식 시켜준 후, 작성된 formData를 이용
// => 인식하지 못한 문제 발생
const insertAll3 = (formData) => {
    console.log('동작')
    axios.post(`http://localhost:8090/item/insert`, null, {
        params: {
            code: formData.code,
            sort1: formData.sort1,
        }
    });
}





const checkInputChange = (event, col) => {
    setFormData(prevState => ({
        ...prevState,
        [col]: event.target.value
    }));
    console.log(formData);
};



// ============ 해결방법 ==================
// @restController 지정해 주면 @RequestBody 가 필요없다고 알고 있었다.
// 하지만 @RequestBody 애노테이션 문제 였다.
const insertAll = () => {
    console.log(formData)
    axios.post(`http://localhost:8090/item/insert`, JSON.stringify(formData), {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res.data)
    ).catch(err => console.log(err.message));
}

// ============ 해결방법 ==================
