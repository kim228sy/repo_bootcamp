// app.js
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// 정적 파일 미들웨어 등록
app.use(express.static(path.join(__dirname, "public")));

// body-parser 미들웨어 등록
app.use(bodyParser.urlencoded({ extended: true }));

// 라우팅
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "views", "index.html"));
});

// 결과 페이지 라우팅
app.post("/result", (req, res) => {
  const inputValue = req.body.inputValue; // 요청의 내용에서 inputValue 속성을 가져옴
  // TODO: inputValue를 처리한 결과
});

// const express = require("express");
// const app = express();
// const path = require("path");

// // 정적 파일 미들웨어 등록
// app.use(express.static(path.join(__dirname, "public")));

// // 라우팅
// app.get("/", (req, res) => {
//   res.render("baseball");
// });
// // 라우팅
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "views", "index.html"));
// });

// // 서버 실행
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`서버 실행 중: http://localhost:${PORT}`));

// const express = require("express");
// const app = express();
// const path = require("path");
// const baseball = require("./public/baseball"); // baseball.js 모듈 불러오기

// // 정적 파일 미들웨어 등록
// app.use(express.static(path.join(__dirname, "public")));

// // 라우팅
// app.get("/", (req, res) => {
//   res.render("baseball");
// });

// // 서버 실행
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`서버 실행 중: http://localhost:${PORT}`));

// const express = require("express");
// const app = express();
// const path = require("path");
// const baseball = require("./public/baseball"); // baseball.js 모듈 불러오기

// // 숫자 야구 게임 라우팅
// app.get("/game", (req, res) => {
//   let answer = baseball.generateAnswer(); // 게임의 정답 생성
//   console.log(answer);

//   res.render("game", {
//     answer: answer,
//     NUM_DIGITS: baseball.NUM_DIGITS, // 모듈 내부의 NUM_DIGITS 상수 불러오기
//   });
// });

// // 서버 실행
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`서버 실행 중: http://localhost:${PORT}`));

// const express = require("express");
// const app = express();

// app.use(express.static("public")); // public 폴더를 static 파일 서비스 경로로 설정

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html"); // index.html 파일을 응답으로 보내기
// });

// app.listen(3000, function () {
//   console.log("서버가 3000번 포트에서 실행 중입니다.");
// });
// const express = require("express");
// const app = express();
// const path = require("path");

// // 정적 파일 미들웨어 등록
// app.use(express.static(path.join(__dirname, "public")));

// // 라우팅
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "baseball.html"));
// });

// // 서버 실행
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`서버 실행 중: http://localhost:${PORT}`));
