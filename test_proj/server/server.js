const express = require("express");
const path = require("path");

const app = express();
app.set("port", process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "../client/build/index.html"));
  // res.send(express.static(path.join(__dirname, "../client/build/index.html")));
  // res.sendFile(path.join(__dirname, "index.html")); // 이거 된다.
  res.send(path.join(__dirname, "index.html")); // 얘도 된다.
});

app.listen(app.get("port"), () => {
  console.log(`http://localhost:${app.get("port")}`);
});
