import Myheader from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// ** import
// => 컴포넌트는 MyComp from real_File_path; 
//    내부 코드에서 MyComp 이름으로 인식

function App() {
  // 실습: 객체를 정의하고 컴포넌트로 전달하여 출력하기
  // Test1) Header로 전달
  const bestDress = {
    color: 'Red',
    style: 'long',
    price: 99000,
    size: ['samll', 'medium', 'large']
  }

  // Test2) Body로 전달
  const name = "GreenComputer";
  
  return (
    <div className="App">
      <Myheader bestDress={bestDress} />
      <Body name={name} country={'경기도 성남시'} />
      <Footer/>
    </div>
  );
}

export default App;
