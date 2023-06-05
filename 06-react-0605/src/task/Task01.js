import React, { useState } from "react";

function Box({ bgColor }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 200,
        backgroundColor: bgColor,
      }}
    >
      Styled Box
    </div>
  );
}

export default function Task() {
  const [color, setColor] = useState("");

  const onChangeColor = (param) => {
    setColor(param);
  };

  return (
    <>
      <input
        type="text"
        placeholder="색상 정보를 입력하세요"
        onChange={(e) => onChangeColor(e.target.value)}
      />
      <Box bgColor={color} />
    </>
  );
}
