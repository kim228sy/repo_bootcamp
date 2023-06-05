import React from "react";
import styled from "styled-components";

const BorderedBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  // background-image: url(${(props) => props.bgImg});
  background-image: ${(props) => props.bgImg};
  background-size: ${(props) => props.bgSize};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.Circle};
`;

export default function Task() {
  return (
    <>
      <BorderedBox
        width="250px"
        height="250px"
        bgImg="url(./dog01.jpg)"
        // bgImg="./dog01.jpg"
        bgSize="cover"
        border="2px solid teal"
        Circle="50%"
      />
    </>
  );
}
