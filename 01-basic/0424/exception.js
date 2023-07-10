setInterval(() => {
  console.log("시작");
  try {
    throw new Error("서버 고장");
  } catch (err) {
    console.log(err);
  }
}, 1000); // 에러가 발생할 만한 곳을 try catch로 감쌈
