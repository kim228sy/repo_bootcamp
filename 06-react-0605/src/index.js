import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import App from "./Lecture08";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// <React.StrictMode> 문법 확인 차 한 번 더 렌더 하는 엄격한 모드
reportWebVitals();
