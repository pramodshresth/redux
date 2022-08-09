import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  const c = useSelector((state)=> state.count.count);
    const count = useSelector((state)=> state.c.count);
    const dispatch = useDispatch();

  return (
    <div>
        <p>{count}</p>
        <p>{c}</p>
        <div>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>
        </div>
    </div>
  )
}

export default Counter