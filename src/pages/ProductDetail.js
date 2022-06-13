import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { filterrrcateg } from '../store/slices/products.slice';

const ProductDetail = () => {
    const [product, setproduct] = useState({})
    const { id } = useParams();
    const productsss = useSelector(state => state.products.data?.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(productsss);
    useEffect(() => {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
            .then(res => {
                setproduct(res.data.data.product);
                dispatch(filterrrcateg(res.data.data.product.id))
            })
        /*axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/`)
        .then(res=> {
            const productsearch = res.data.data.product?.find(productitem => productitem.id === Number(id))
            setproduct(productsearch);
                dispatch(filterrrcateg(productsearch?.category.id))
        })*/

        //  <img src={product?.productImgs[0]} alt="" />

    }, [navigate])
    console.log(product);

    return (
        <div>
            <h1>{product?.title}</h1>
            <div className='imgsss'>
                {product.productImgs?.map(imgss => (
                    <img src={imgss} alt="" />
                ))}
            </div>

            <h1>{product.price}</h1>

            <b>{product.description}</b>
            <div className='sug'>
                {
                    productsss?.map(newlist => (
                        <div onClick={() => navigate(`/product/${newlist.id}`)} className='sugp'>
                            <div>
                                <img src={newlist.productImgs[0]} alt="" />
                            </div>
                            {newlist.title}</div>
                    ))
                }
            </div>


        </div>
    );
};

export default ProductDetail;