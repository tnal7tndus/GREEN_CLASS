import './ThirdContainer.css';
import PresentBox from './../../../components/PresentBox';


const ThirdContainer = () => {
  const thirdContainer = document.getElementById('thirdContainer');
  let writeTarget = ['프레시지', '김구원선생', '마이셰프', '하림', '하루한킷'];
  function thirdContainerSlideRightBth(event) {
    let box = event.target.closest('.typeBoxList').children;
    let margin = box[0].style.marginLeft.replace('px', '');
    let maxMargin = -220 * (box[0].children.length - 2);
    if (margin > maxMargin) {
      margin -= 220;
      box[0].style.marginLeft = `${margin}px`;
    }
    if (margin == maxMargin) {
      box[2].style.display = "none";
    }
    if (margin != 0) {
      box[1].style.display = "block";
    }
  }

  function thirdContainerSlideLeftBth(event) {
    let box = event.target.closest('.typeBoxList').children;
    let margin = box[0].style.marginLeft.replace('px', '');
    let maxMargin = -220 * (box[0].children.length - 2);
    if (margin >= maxMargin) {
      margin = +margin + 220;
      box[0].style.marginLeft = `${margin}px`;
    }
    if (margin == 0) {
      box[1].style.display = "none";
    }
    if (margin != 0) {
      box[2].style.display = "block";
    }
  }



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