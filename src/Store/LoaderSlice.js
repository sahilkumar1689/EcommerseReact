import { createSlice } from "@reduxjs/toolkit";

const LoaderSlice = createSlice({
    name:"LoaderState",
    initialState:false,
    reducers:{
        setLoaderTrue:(state)=>{
            return (true);
        },
        setLoaderFalse:(state)=>{
            return (false);
        }
    }
})

export const LoaderSliceAction = LoaderSlice.actions;
export default LoaderSlice;