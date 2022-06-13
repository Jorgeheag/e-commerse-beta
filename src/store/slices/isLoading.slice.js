import { createSlice } from '@reduxjs/toolkit';

export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState: true,
    reducers: {
            setisLoading: (state , action)=>{
                return action.payload
            }
    }
})

export const { setisLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
