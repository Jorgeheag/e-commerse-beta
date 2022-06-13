import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setisLoading } from './isLoading.slice';
import getConfig from '../../utils/getConfig';

export const purchses = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases:(state, action) => {
            return action.payload
        }
    }
}) 

export const { setPurchases } = purchses.actions;

export const getPurchases = () => (dispatch) => {
    dispatch(setisLoading(true));
    return axios.get("https//ecommerce-api-react.herokuapp.com/api/v1/purchases", getConfig())
        .then(res => dispatch(setPurchases(res.data)))
        .finally(() => dispatch(setisLoading(false)));
}


export default purchses.reducer;
