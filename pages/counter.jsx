import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmout,
} from "@/src/redux/Slices/counterSlice";
import Layout from "@/src/components/Layout";

const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("counter useEffect()")
  },[])

  return (
   <Layout>
     <div className="flex items-center flex-col">
      <p className="text-lg">Value is {value}</p>
      <div className="flex gap-3 mt-4 ">
        <button
          className="bg-slate-500 w-32 rounded-sm h-8 text-white cursor-pointer"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-slate-500 w-32 rounded-sm h-8 text-white cursor-pointer"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="bg-slate-500 w-32 rounded-sm h-8 text-white cursor-pointer"
          onClick={() => dispatch(incrementByAmout(5))}
        >
          Increment By 5
        </button>
      </div>
    </div>
   </Layout>
  );
};

export default Counter;
