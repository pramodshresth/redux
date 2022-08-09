import { configureStore } from  '@reduxjs/toolkit';
import counterReducer from '../feature/counter/counterSlice';
import countReduces from '../feature/counter/countSlice';

export const store = configureStore({
    reducer: {
       count: counterReducer,
       c: countReduces,
    }
});