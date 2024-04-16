import './ThirdContainer.css';
import PresentBox from './../../../components/PresentBox';


const ThirdContainer = () => {
  let writeTarget = ['프레시지', '김구원선생', '마이셰프', '하림', '하루한킷'];

  return (
    <>
      <div id="thirdContainer" className="container hide2">
        <h3 className="hide2"><i className="fa-solid fa-bag-shopping"></i> &nbsp;&nbsp; 상품 보기 &nbsp;&nbsp; <i
          className="fa-solid fa-bag-shopping"></i>
        </h3>
        {writeTarget.map((e, i) => <PresentBox brand={e} key={i} />)}
      </div>
    </>

  );
}

export default ThirdContainer;