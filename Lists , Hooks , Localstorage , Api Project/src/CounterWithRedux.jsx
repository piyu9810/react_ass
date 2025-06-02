import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CounterWithRedux = () => {
  const count = useSelector((state) => state.counter); 
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default CounterWithRedux;
