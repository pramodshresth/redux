 import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    count : 6,
    pra: [1,2,3,4,5,6,7,8],
    sar: {
        name: "Pramod Kumar Shrestha",
    }
 }

 export const counterSlice = createSlice({
    name :'Counter',
    initialState,
    reducers: {
        increment: (state)=>{
            state.count += 1;
        },        
        decrement: (state)=>{
            state.count -= 1;
        },
    }
 })

 export const {increment, decrement }= counterSlice.actions;

 export default counterSlice.reducer;