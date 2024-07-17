import { createSlice } from "@reduxjs/toolkit"; 

const BagItemsSlice = createSlice({
    name:"BagItems",
    initialState: [],
    reducers:{
        addInBag:(state,action)=>{
            // console.log(state.length);
            state.push(action.payload);
            // console.log(state.length);
        },
        removeItem:(state,action)=>{
            let deleteIndex = action.payload;
            state.splice(deleteIndex,1);
        }
    }
})

export const BagSliceAction = BagItemsSlice.actions;
export default BagItemsSlice;