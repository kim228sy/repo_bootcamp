import React, { useState, useEffect } from "react";

const INITIAL_FONT = {
  family: "initial",
  style: "normal",
  size: "medium",
  color: "black",
};

export default function FontChanges() {
  // const [fontFamily, setFontFamily] = useState([]);
  // const [fontStyle, setFontStyle] = useState([]);
  // const [fontSize, setFontSize] = useState([]);
  // const [fontColor, setFontColor] = useState([]);

  // const [font, setFont] = useState([]);
  const [font, setFont] = useState(INITIAL_FONT);

  const family = ["serif", "sans-serif", "monospace", "cursive", "fantasy"];
  const style = ["normal", "italic"];
  const size = ["medium", "smaller", "length"];
  const color = ["blue", "red", "yellow", "green"];

  const [count, setCount] = useState(0);
  const rests = count % 4;

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  const onClickFamily = () => {
    // const i = Math.floor(Math.random() * family.length);
    // setFontFamily(family[i]);
    setFont({
      ...font,
      family: family[Math.floor(Math.random() * family.length)],
    });
  };
  const onClickStyle = () => {
    // const i = Math.floor(Math.random() * style.length);
    // setFontStyle(style[i]);
    setFont({
      ...font,
      style: style[Math.floor(Math.random() * style.length)],
    });
  };
  const onClickSize = () => {
    // const i = Math.floor(Math.random() * size.length);
    // setFontSize(size[i]);
    setFont({ ...font, size: size[Math.floor(Math.random() * size.length)] });
  };
  const onClickColor = () => {
    // const i = Math.floor(Math.random() * color.length);
    // setFontColor(color[i]);
    setFont({
      ...font,
      color: color[Math.floor(Math.random() * color.length)],
    });
  };

  return (
    <div>
      <h2
        style={{
          fontFamily: font.family,
          fontStyle: font.style,
          fontSize: font.size,
          color: font.color,
        }}
      >
        안녕하세요
      </h2>
      <button onClick={onClickFamily}>폰트 패밀리 변경</button>
      <button onClick={onClickStyle}>폰트 스타일 변경</button>
      <button onClick={onClickSize}>폰트 사이즈 변경</button>
      <button onClick={onClickColor}>폰트 컬러 변경</button>
      <h2>
        I've rendered
        <span style={{ color: color[rests] }}>{count}</span>
        times!
      </h2>
    </div>
  );
}
