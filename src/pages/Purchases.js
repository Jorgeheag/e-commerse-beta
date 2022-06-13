import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPurchases } from '../store/slices/purchases.slice';

const Purchases = () => {

    const dispatch = useDispatch();

    const purchases = useState(state=> state.purchases);

    console.log(purchases)

    useEffect(()=>{
       dispatch(getPurchases());
    },[dispatch])

    return (
        <div>
            <h1>purchase</h1>
            <ul>
             {
                purchases.map(purchase=>(
                    <li>
                        {purchase}
                    </li>
                ))
             }   
            </ul>
        </div>
    );
};

export default Purchases;