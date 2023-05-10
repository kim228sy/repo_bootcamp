import { useState } from "react";

const Example = () => {
  // const [count, setCount] = useState(0);
  // const Increment = () => setCount(count + 1);
  const [inputValue, setInputValue] = useState("글을 입력하세요");
  let changeContent = (event) => {
    let newValue = event.target.value;
    setInputValue(newValue);
  };
  return (
    <div>
      {/* <h1>{count}</h1> */}
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
      {/* <button onClick={Increment}>Click me</button> */}
      <input onChange={changeContent} />
      <div>{inputValue}</div>
    </div>
  );
};

export default Example;
