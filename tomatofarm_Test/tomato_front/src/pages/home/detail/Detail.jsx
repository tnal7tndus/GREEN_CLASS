import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Detail_descript from './descript/Detail_descript';
import Detail_review_box from './review/Detail_review_box';
import Detail_ask from './ask/Detail_ask';
import { api } from '../../../model/model';

const Detail = ({ propscode }) => {

    const user = JSON.parse(sessionStorage.getItem('userinfo'))
    const [searchParams] = useSearchParams();
    const itemCode = searchParams.get("code");
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    if (searchParams.size == 0)
        navigate("/home/list?keyword=");

    useEffect(() => {
        api(`/item/detailn?column=item.code&keyword=${propscode || itemCode}`, 'get', null, user && user.token)
            .then(res => {
                setItem(res.data);
                setLoading(false);
            }).catch(err => {
                console.log(err.message)
                setLoading(false);
                setError(true);
            })
        api(`/visit/update?page=detail`, 'get')
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