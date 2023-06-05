import React from "react";
import styled from "styled-components";

// 템플릿 리터럴을 함수에 붙여서 인수 전달에 쓴다? tagged template literal

// const Box = styled.div`
//   width: 200px;
//   height: 200px;
//   background-color: ${(props) => props.bgColor};
// `;

// export default function App() {
//   return (
//     <>
//       <Box bgColor="teal" />
//     </>
//   );
// }

const Circle = styled.div`
  width: 250px;
  height: 250px;
  background-image: url(./dog01.jpg); // 정적파일이라 경로를 이렇게 지정해야 한다.
  background-size: cover;
  border-radius: 50%;
`;
const ColoredCircle = styled.div`
  width: 250px;
  height: 250px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

export default function App() {
  return (
    <>
      <Circle />
      <ColoredCircle bgColor="tomato" />
    </>
  );
}
