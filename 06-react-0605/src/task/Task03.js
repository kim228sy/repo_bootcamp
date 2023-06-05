import React from "react";
import styled, { keyframes } from "styled-components";

const moving = keyframes`
  from{
    left: 20px;
  }
  to{
    left: 180px;
  }
`;

const Eyes = styled.div`
  display: flex;
  justify-content: center;
`;
const Eye = styled.div`
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
  position: relative;
`;
const Ball = styled.div`
  width: 50px;
  height: 50px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 50px;
  left: 20px;

  animation: ${moving} 2s 0s infinite;
  animation-direction: alternate;
`;

export default function Task() {
  return (
    <>
      <Eyes>
        <Eye>
          <Ball />
        </Eye>
        <Eye>
          <Ball />
        </Eye>
      </Eyes>
    </>
  );
}
