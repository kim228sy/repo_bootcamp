import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  };

  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  );
}
