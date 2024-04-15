import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from './../../components/Loading';
import Error from './../../components/Error';
import ItemDetailBox from './descript/ItemDetailBox';
import ReviewBoardBox from './review/ReviewBoardBox';
import AskBoardBox from './ask/AskBoardBox';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../../model/model';
import { getUserCart } from '../../redux/userCart/action';

const ItemDetail = ({ propscode }) => {

    const [searchParams] = useSearchParams();
    const itemCode = searchParams.get("code");
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    

    useEffect(() => {
        axios.get(`http://localhost:8090/item/detailn?column=item.code&keyword=${propscode || itemCode}`
        ).then(res => {
            setItem(res.data);
            setLoading(false);
        }).catch(err => {
            console.log(err.message)
            setLoading(false);
            setError(true);
        })
        axios.get(`http://localhost:8090/visit/update`, {
            params: {
                page: 'detail',
            }
        })
    }, [])

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <>
            <ItemDetailBox item={item} />
            <hr className='container' />
            <ReviewBoardBox item={item} />
            <hr className='container' />
            <AskBoardBox item={item} />


        </>
    );
}

export default ItemDetail