import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amountValue, setAmountValue] = useState(0);
  const addValue = Number(amountValue) || 0;

  const resetAll = () => {
    setAmountValue(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
      </div>
      <input
        type="text"
        value={amountValue}
        onChange={(e) => {
          setAmountValue(e.target.value);
        }}
      />
      <div>
        <button
          onClick={() => {
            dispatch(incrementByValue(addValue));
          }}
        >
          Add amount
        </button>
        <button onClick={resetAll}>reset</button>
      </div>
    </section>
  );
};

export default Counter;
