import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import axios from 'axios';
import Detail_descript from './descript/Detail_descript';
import Detail_review_box from './review/Detail_review_box';
import Detail_ask from './ask/Detail_ask';

const Detail = ({ propscode }) => {

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
            <Detail_descript item={item} />
            <hr className='container' />
            <Detail_review_box item={item} />
            <hr className='container' />
            <Detail_ask item={item} />


        </>
    );
}

export default Detail