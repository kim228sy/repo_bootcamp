import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);

/* <React.StrictMode> 
<App />
</React.StrictMode> */

// 리액트.스트릭모드 -> 랜더링 단계에 메서드 부작용이 있는 지 검사. 스트릭 모드에서는 랜더링 단계의 메서드를 두 번씩 호출. 부작용 진단할 목적.
// constructor, render, shouldComponentUpdate, getDerivedStateForProps
// 함수 컴포넌트 바디
// State updater
// useState, useMemo, useReducer

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
