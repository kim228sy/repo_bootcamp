const fs = require("fs");

// // 1. 파일 생성 및 쓰기
// fs.writeFile("example.txt", "Hello World!", (err) => {
//   if (err) throw err;
//   console.log("파일에 문구를 썼습니다.");

//   // 2. 파일 읽기
//   fs.readFile("example.txt", (err, data) => {
//     if (err) throw err;

//     // 3. 새로운 문자열 생성
//     const addData = "새로운 문자열!";

//     // 4. 기존 파일의 내용과 새로운 문자열을 합치기
//     const concatData = Buffer.concat([data, Buffer.from(addData)]);

//     // 5. 파일에 다시 쓰기
//     fs.writeFile("example.txt", concatData, (err) => {
//       if (err) throw err;
//       console.log("파일에 추가 데이터를 썼습니다.");
//     });
//   });
// });

fs.readFile("file.txt", (err, data) => {
  if (err) {
    fs.writeFile("file.txt", "파일 생성!", (err) => {
      if (err) throw err;
      console.log("파일에 데이터 생성.");
    });
  } else {
    const addData = "새로운 문자열!";
    const concatData = Buffer.concat([data, Buffer.from(addData)]);
    fs.writeFile("file.txt", concatData, (err) => {
      if (err) throw err;
      console.log("파일에 데이터 추가.");
    });
  }
});
