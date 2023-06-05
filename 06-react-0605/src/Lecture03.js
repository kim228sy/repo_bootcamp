import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const handleChange = (param) => {
    setText(param);
  };

  return (
    <>
      <input
        type="text"
        placeholder="내용을 적어주세요"
        onChange={(e) => handleChange(e.target.value)}
      />
      <p>{text}</p>
    </>
  );
}
