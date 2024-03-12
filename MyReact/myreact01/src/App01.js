import Menu from "./components01/Menu";
import Footer from "./components/Footer";

// ** import
// => 컴포넌트는 MyComp from real_File_path; 
//    내부 코드에서 MyComp 이름으로 인식

function App() {

  return(
    <div className="App">
      <h2>* 요리 백과 *</h2>
      <Menu />
      <Footer />
    </div>

    );
}

export default App;
