"use strict";

// 모듈 가져와서 할당
const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

let users = [];

// fs.readFile 함수를 사용하여 JSON 형식의 사용자 데이터를 읽기
fs.readFile(
  path.join(__dirname, "../mock/users.json"),
  "utf-8",
  (err, data) => {
    if (err) {
      console.log("파일 읽기 오류:", err);
      return;
    }
    users = JSON.parse(data);
  }
);

// GET 요청을 처리하는 라우트
router.get("/", (req, res, next) => {
  res.status(200).json(users);
});

// ID를 통해 특정 사용자를 조회하는 GET 요청을 처리하는 라우트
router.get("/:id", (req, res, next) => {
  const userId = Number(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (!user) {
    res.status(404).json({
      errorMessage: `ID ${req.params.id}의 사용자가 존재하지 않습니다.`,
    });
    return;
  }
  res.status(200).json(user);
});

// 사용자를 생성하는 POST 요청을 처리하는 라우트
router.post("/", (req, res, next) => {
  if (!req.body.email || !req.body.password || !req.body.name) {
    res.status(400).json({
      errorMessage: "이메일, 비밀번호, 이름을 포함해야 합니다.",
    });
    return;
  }

  req.body.id = users.length + 1;
  users.push(req.body);

  fs.writeFile(
    path.join(__dirname, "../mock/users.json"),
    JSON.stringify(users, null, 2),
    (err) => {
      if (err) {
        res.status(500).json({ errorMessage: "서버 내부 오류." });
        return;
      }
      res.status(201).json(req.body);
    }
  );
});

module.exports = router;
