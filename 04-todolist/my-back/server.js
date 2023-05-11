const express = require("express");
const mysql = require("mysql2");
const app = express();

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: "localhost",
  user: "your_username",
  password: "your_password",
  database: "your_database_name",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// API 엔드포인트
app.get("/api/data", (req, res) => {
  const query = "SELECT * FROM your_table_name";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing MySQL query:", err);
      res.status(500).json({ error: "Failed to fetch data" });
      return;
    }
    res.json(results);
  });
});

// 기타 미들웨어 및 라우팅 로직

// 서버 실행
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
