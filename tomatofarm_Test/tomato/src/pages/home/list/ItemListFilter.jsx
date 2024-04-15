import { useSearchParams } from "react-router-dom";
import './ItemListFilter.css'
import { useEffect, useMemo, useRef, useState } from "react";

const ItemListFilter = ({ itemListSort, changeDeletedSort, deletedSort, priceRange, setPriceRange }) => {
    const listfilter = useRef(null);
    const mealkit = useRef(0);
    const ingre = useRef(0);

    mealkit.current = 0;
    ingre.current = 0;

    for (let e of itemListSort) {
        if (e.sort1 == '밀키트') {
            mealkit.current += e.count;
        }
        else
            ingre.current += e.count
    }

    const handlePriceRange = (event) => {
        setPriceRange((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const showList = (event) => {
        let target = event.target.closest('li');
        if (target.classList.contains('opened')) {
            target.classList.remove('opened');
        } else {
            target.classList.add('opened');
        }
    }

    useEffect(() => {
        const listScroll = () => {
            listfilter.current.style.height = `calc(100vh - 320px - 30px + ${window.scrollY}px)`;
            if (window.scrollY <= 300) {
                listfilter.current.style.top = `calc(325px - ${window.scrollY}px)`;
            } else {
                listfilter.current.style.top = `30px`;
            }
        }

        window.addEventListener('scroll', listScroll);
        return () => {
            window.removeEventListener('scroll', listScroll)
        }
    }, [itemListSort])

    return (
        <div id="listfilter" ref={listfilter}>
            <ul>
                <li onClick={showList} className={mealkit.current > 0 ? 'sortB opened selected' : 'sortB'}>
                    <i className="fa-regular fa-circle-check" ></i>
                    밀키트
                    <span className="itemList_count">
                        {mealkit.current}
                    </span>
                    <ul>
                        {itemListSort.filter((e) => e.sort1 == '밀키트').sort((b, a) => a.count - b.count).map((e, i) => (
                            <li onClick={changeDeletedSort} key={i} className={e.count && !deletedSort.includes(e.sort2) > 0 ? 'selected' : ''}>
                                <i className="fa-regular fa-circle-check"></i>
                                <span>{e.sort2}</span><span className="itemList_count">{e.count}</span>
                            </li>
                        ))}
                    </ul>
                </li>
                <hr />
                <li onClick={showList} className={ingre.current > 0 ? 'sortB opened selected' : 'sortB'}>
                    <i className="fa-regular fa-circle-check"></i>식재료
                    <span className="itemList_count">
                        {ingre.current}
                    </span>
                    <ul>
                        {itemListSort.filter((e) => e.sort1 == '식재료').sort((b, a) => a.count - b.count).map((e, i) => (
                            <li onClick={changeDeletedSort} key={i} className={e.count > 0 && !deletedSort.includes(e.sort2) ? 'selected' : ''}>
                                <i className="fa-regular fa-circle-check"></i>
                                <span>{e.sort2}</span><span className="itemList_count">{e.count}</span>
                            </li>
                        ))}
                    </ul>
                </li>
                <hr />
                <li>
                    <i className="fa-regular fa-circle-check"></i>행사
                    <ul>
                        <li><i className="fa-regular fa-circle-check"></i>채선당</li>
                        <li><i className="fa-regular fa-circle-check"></i>도리깨침</li>
                    </ul>
                </li>
                <hr />
                <li id="filterPrice">
                    <i className="fa-regular fa-circle-check"></i>가격
                    <form>
                        <input type="number" placeholder="최소금액" name='min' value={priceRange.min} onChange={handlePriceRange} />
                        &nbsp;&nbsp;~&nbsp;&nbsp;
                        <input type="number" placeholder="최고금액" name='max' value={priceRange.max} onChange={handlePriceRange} />
                    </form>
                </li>
            </ul>
        </div>
    );
}

export default ItemListFilter;

