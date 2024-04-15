
import { useReducer } from 'react';

function reducer(signValue, action) {
    switch (action.type) {
        case "Create": { 
            return {
                ...signValue,
                id: "CreateId",
                password: "CreatePassword"
            };
        }
        case "UpdatePassword": {
            return {
                ...signValue,
                password: "UpdatePassword",
            };
        }
        case "UpdateId": {
            return {
                ...signValue,
                id: "UpdateId",
            };
        }
        case "Delete": {
            return {
                ...signValue,
                id: "",
                password: "",
            };
        }
        default: return signValue;
    }; 
} 

function App() {
    //1)const [상태값(변수,state), dispatch(함수의 기능을 나눈다)] = useReducer(reducer (작동시킬 함수), 초기값)
    
    const [signValue, dispatch] = useReducer(reducer, {
        id:"initId",
        password:"initPassword"
    });

    const onUpdatePassword = ()=> {
        dispatch({
            type:"UpdatePassword",
        })
    }
    const onCreate = ()=> {
        dispatch({
            type:"Create",
        })
    }
    console.log(`id = ${signValue.id}, password = ${signValue.password}`);


    return (

        <div className="App">
            <button onClick={onCreate}>Create</button>
            <button onClick={onUpdatePassword}>UpdatePassword</button>
        </div>
    );
}

export default App;
