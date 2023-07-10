const express = require("express");
const path = require("path");
// import express from "express"; // 안됨
// import path from "path"; // 안됨

const app = express();
app.set("port", process.env.Port || 3000);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(app.get("port"), () => {
  console.log("Server started on port " + app.get("port"));
});
