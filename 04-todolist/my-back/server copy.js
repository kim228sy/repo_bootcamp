const express = require("express");
const app = express();

// API 엔드포인트
app.get("/api/data", (req, res) => {
  const data = { message: "Hello from API" };
  res.json(data);
});

// 기타 미들웨어 및 라우팅 로직

// 서버 실행
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
