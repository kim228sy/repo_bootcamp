const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Hello</h1>");
    res.end("<h2>kimsy</h2>");
  })
  .listen(8080, () => {
    console.log("http://localhost:8080 서버 대기 중입니다.");
  });
