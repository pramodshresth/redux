import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   count : 12,
   
  
}

export const counterSlice = createSlice({
   name :'Counter',
   initialState,
   reducers: {
       incre: (state)=>{
           state.count += 1;
       },        
       decre: (state)=>{
           state.count -= 1;
       },
   }
})

export const {incre, decre }= counterSlice.actions;

export default counterSlice.reducer;