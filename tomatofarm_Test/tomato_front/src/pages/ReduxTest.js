import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/axios/actions';

const ReduxTest = () => {
    const dispatch = useDispatch();
    const dataState = useSelector(state => state.itemList);
    // dispatch(fetchData('/item/search?keyword=${keyword}', 'get'));
    console.log(dataState)

    useEffect(() => {
        dispatch(fetchData('/item/search?keyword=프레시지', 'get'));
    }, [dispatch]);
    return (
        <div>
            asdf
            {dataState.loading ?
                <p>Loading...</p>
                :
                dataState.error ?
                    <p>Error: {dataState.error}</p>
                    :
                    <ul>
                        {dataState.data.map(item => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
            }
        </div>
    );
};

export default ReduxTest;