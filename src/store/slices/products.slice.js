import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setisLoading } from './isLoading.slice';

export const products = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
                setproducts:(state, action)=>{
                    return action.payload
                }
    }
})

export const { setproducts } = products.actions;

export const getproducts = () => (dispatch) => {
    dispatch(setisLoading(true));
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
        .then(res => dispatch(setproducts(res.data)))
        .finally(() => dispatch(setisLoading(false)));
}

export const filterrr = (query) => (dispatch) => {
    dispatch(setisLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${query}`)
        .then(res => dispatch(setproducts(res.data)))
        .finally(() => dispatch(setisLoading(false)));
}
export const filterrrcateg = (id) => (dispatch) => {
    dispatch(setisLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`)
        .then(res => dispatch(setproducts(res.data)))
        .finally(() => dispatch(setisLoading(false)));
}
export default products.reducer;

