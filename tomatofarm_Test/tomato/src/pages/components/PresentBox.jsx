import { useEffect, useRef, useState } from 'react';
import './PresentBox.css';
import Loading from './Loading';
import Error from './Error';
import axios from 'axios';
import ItemBox from './ItemBox';
import { Link } from 'react-router-dom';

const PresentBox = ({ brand }) => {
    const [brandItem, setBrandItem] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    const slideBox = useRef(null);
    const slideBoxLeftBtn = useRef(null);
    const slideBoxRightBtn = useRef(null);

    useEffect(() => {
        axios.get('http://localhost:8090/item/searchtype?column=item.brand&keyword=' + brand
        ).then(res => {
            setBrandItem(res.data);
            setLoading(false);
        }).catch(err => {
            console.log(err.message)
            setLoading(false);
            setError(true);
        })
    }, [])

    if (loading) return <Loading />
    if (error) return <Error />

    function thirdContainerSlideRightBth() {
        let margin = slideBox.current.style.marginLeft.replace('px', '');
        let maxMargin = -220 * (slideBox.current.children.length - 3);
        if (margin > maxMargin) {
            margin -= 220;
            slideBox.current.style.marginLeft = `${margin}px`;
        }
        if (margin == maxMargin) {
            slideBoxRightBtn.current.style.display = "none";
        }
        if (margin != 0) {
            slideBoxLeftBtn.current.style.display = "block";
        }
    }

    function thirdContainerSlideLeftBth() {
        let margin = slideBox.current.style.marginLeft.replace('px', '');
        let maxMargin = -220 * (slideBox.current.children.length - 3);
        if (margin >= maxMargin) {
            margin = +margin + 220;
            slideBox.current.style.marginLeft = `${margin}px`;
        }
        if (margin != maxMargin) {
            slideBoxRightBtn.current.style.display = "block";
        }
        if (margin == 0) {
            slideBoxLeftBtn.current.style.display = "none";
        }
    }

    const makeComa = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (
        <div className="typeBox hide2">
            <div className="typeBoxTag">
                <div className="typeBoxTagTitle">
                    <img src={"http://localhost:8090/resources" + `/img/brand/${brand}.png`} alt={brand} />
                    {brand}
                </div>
                {/* <ul className="typeBoxTagList">
                    <li><a href="">스테이크</a></li>
                    <li><a href="">파스타</a></li>
                    <li><a href="">감바스</a></li>
                </ul> */}
            </div>
            {
                brandItem != null ?
                    <Link to={`/home/detail?code=${brandItem[0].code}`} className="typeBoxImg">
                        <div className="itemImgPresent">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <img src={"http://localhost:8090/resources" + `/img/itemImg/${brandItem[0].code}_1.jpg`} alt={brandItem[0].name} />
                        </div>
                        <div className="typeBoxImgTitle">
                            <div className="typeBoxImgTitleName"> {brandItem[0].name} </div>
                            <p className="typeBoxImgTitlePrice">{makeComa(brandItem[0].price)}원</p>
                        </div>
                        <div className="typeBoxImgTitleBest">Best 상품</div>
                    </Link>
                    : ''
            }
            {
                brandItem != null ?
                    <div className="typeBoxList">
                        <div className="slideBox" ref={slideBox} style={{ marginLeft: '0px' }}>
                            {brandItem.slice(1, 5).map((e, i) => <ItemBox item={e} key={i} />)}
                            <Link to={'/home/list?keyword=' + brand} className="linkBox">
                                <p>{brandItem[0].brand}</p>
                                <i className="fa-regular fa-circle-play"></i> 상품 더 보러가기
                            </Link>
                        </div>
                        <div ref={slideBoxLeftBtn} onClick={thirdContainerSlideLeftBth} className="thirdContainerLeftBtn">
                            <i className="fa-sharp fa-solid fa-arrow-left"></i>
                        </div>
                        <div ref={slideBoxRightBtn} onClick={thirdContainerSlideRightBth} className="thirdContainerRightBtn">
                            <i className="fa-sharp fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    : ''
            }
        </div>

    );


}

export default PresentBox;
