import React from 'react'
import './features/counter/counterSlice';
import {useSelector,useDispatch} from "react-redux";
import { increase,decrease,reset } from './features/counter/counterSlice';
const TestRedux = () => {
    const {count} = useSelector((store)=> store.counter);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>
            TestRedux
        </h1>
        <p>Count:{count}</p>
        <button onClick={()=>dispatch(increase())}>increase</button>
        <button onClick={()=>dispatch(decrease())}>decrease</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}

export default TestRedux