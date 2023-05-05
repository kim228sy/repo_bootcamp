const express = require("express"); // 익스프레스 모듈을 블러온다
const morgan = require("morgan"); // morgan 모듈을 블러온다
const cookieParser = require("cookie-parser"); // cookie-parser 모듈을 블러온다
const session = require("express-session"); // express-session 모듈을 블러온다
const dotenv = require("dotenv"); // dotenv 모듈을 블러온다
const path = require("path"); // path 모듈을 블러온다

// nunjucks
const nunjucks = require("nunjucks");

dotenv.config(); // .env 파일에서 변수를 로드하여 process.env 객체에 등록
const indexRouter = require("./routes");
const uploadRouter = require("./routes/upload");

const app = express(); // express() 함수를 호출하여 새로운 Express 애플리케이션을 생성하고, app 상수에 할당
app.set("port", process.env.PORT || 3000); // Express 애플리케이션의 설정 값을 지정, port 설정 값을 지정하고 있으며, 이 값은 process.env.PORT 환경 변수 값 또는 기본값으로 3000을 사용

// nunjucks
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use(morgan("dev")); // Express 애플리케이션에서 로그를 기록하는 미들웨어인 morgan을 사용하는 코드,  console.log()를 이용하여 로그를 출력할 필요 없이, morgan 미들웨어가 자동으로 로그를 출력
app.use("/", express.static(path.join(__dirname, "public"))); //Express 애플리케이션에서 정적 파일을 제공하기 위한 미들웨어를 등록하는 코드, 이후에는 public 디렉토리 내에 위치한 정적 파일에 접근
app.use(express.json()); //  Express 애플리케이션에서 JSON 형식의 요청 본문을 해석하기 위한 미들웨어를 등록하는 코드, req.body 객체를 이용하여 클라이언트에서 전송된 데이터에 접근
app.use(express.urlencoded({ extended: false })); //Express 애플리케이션에서 URL-encoded 형식의 요청 본문을 해석하기 위한 미들웨어를 등록하는 코드,  req.body 객체를 이용하여 클라이언트에서 전송된 데이터에 접근
app.use(cookieParser(process.env.COOKIE_SECRET)); //Express 애플리케이션에서 쿠키를 해석하기 위한 미들웨어를 등록하는 코드, req.cookies 객체를 이용하여 클라이언트에서 전송된 쿠키에 접근
app.use(
  session({
    resave: false, // 세션 내용이 바뀌지 않아도 세션을 다시 저장할지 여부를 결정
    saveUninitialized: false, // 초기화되지 않은 세션을 저장할지 여부를 결정
    secret: process.env.COOKIE_SECRET, //세션 ID를 암호화하는 데 사용할 비밀 키
    cookie: {
      //클라이언트에게 발급할 쿠키의 설정값을 지정
      httpOnly: true, //JavaScript에서 쿠키에 접근할 수 없도록
      secure: false, //HTTPS 프로토콜에서만 쿠키를 전송하도록
    },
    name: "session-cookie", //세션 쿠키의 이름을 지정
  }) //express-session 미들웨어가 클라이언트에게 발급한 세션 쿠키는 session-cookie라는 이름으로 저장되며, httpOnly와 secure 옵션을 이용하여 보안성을 강화
); // Express 애플리케이션에서 세션을 사용하기 위한 미들웨어인 express-session을 등록하는 코드, req.session 객체를 이용하여 세션 데이터에 접근

app.use("/", indexRouter);
app.use("/upload", uploadRouter);

const fs = require("fs"); // Node.js에서 파일 시스템에 접근하기 위한 모듈인 fs를 불러오는 코드, fs 모듈을 이용하여 파일 시스템 작업을 수행

try {
  fs.readdirSync("uploads"); //uploads 폴더가 존재하는지 확인
} catch (error) {
  // uploads 폴더가 없을 경우 readdirSync() 메소드는 ENOENT 에러를 발생
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다."); //console.error()를 사용하여 에러 메시지를 출력
  fs.mkdirSync("uploads"); //동기적으로 디렉토리를 생성하며, 디렉토리가 이미 존재하는 경우 에러를 발생
} // fs 모듈을 사용하여 현재 디렉토리에 uploads 폴더가 없을 경우 uploads 폴더를 생성하는 코드, 파일 업로드를 처리하는 데 사용될 uploads 폴더가 준비

app.get(
  // HTTP GET 요청이 "/" 경로로 전달될 때, 두 개의 미들웨어 함수를 실행하는 라우팅 핸들러, app.get() 메서드를 이용하여 "/" 경로에 대한 GET 요청을 처리하는 핸들러를 등록, 두 개의 미들웨어 함수를 등록
  "/",
  (req, res, next) => {
    // console.log() 구문을 사용하여 "GET / 요청에서만 실행됩니다."를 콘솔에 출력
    console.log("GET / 요청에서만 실행됩니다.");
    next(); //next() 함수를 호출하여 다음 미들웨어 함수로 요청을 전달
  },
  (req, res) => {
    throw new Error("에러는 에러 처리 미들웨어로 갑니다."); // 에러를 발생시키는 throw 구문을 사용하여 에러를 발생, 에러 객체를 생성하고 메시지를 설정, 에러 처리 미들웨어로 요청을 전달하기 위해 next() 함수를 호출
  }
); // "/" 경로로 GET 요청이 전달될 때, 두 개의 미들웨어 함수를 실행하고, 첫 번째 미들웨어 함수에서는 콘솔에 메시지를 출력하고, 두 번째 미들웨어 함수에서는 에러를 발생시키는 코드. 이후, 에러 처리 미들웨어로 요청을 전달

app.use((req, res, next) => {
  res.status(404).send("Not Found"); // res.status(404) 메서드를 사용하여 HTTP
}); // 커먼 에러 처리 (지정 외엔 전부 에러 처리)

app.use((err, req, res, next) => {
  // Express 애플리케이션에서 에러 처리를 담당하는 미들웨어 함수, app.use() 메서드를 이용하여 미들웨어 함수를 등록. err을 설정, 이전 미들웨어에서 발생한 에러 객체를 전달. 두 번째 매개변수 req 객체를 설정,세 번째 매개변수 res 객체를 설정, 마지막 매개변수로 next 함수를 설정
  console.error(err); // console.error() 구문을 사용하여 에러 메시지를 콘솔에 출력
  res.status(500).send(err.message); // res.status(500) 메서드를 사용하여 HTTP 응답 상태 코드를 500으로 설정, send() 메서드를 사용하여 에러 객체의 메시지를 응답 본문으로 전송
}); // err 객체를 이용하여 에러를 처리하고, res 객체를 이용하여 HTTP 응답을 전송
// 커먼 에러 처리 (지정 외엔 전부 에러 처리)

app.listen(app.get("port"), () => {
  // Express 애플리케이션을 실행하고, 클라이언트의 요청을 대기하는 코드, app.listen() 메서드를 이용하여 Express 애플리케이션을 실행, 첫 번째 매개변수로 app.get("port")를 사용하여 포트 번호를 지정,  app.get() 메서드는 app.set() 메서드를 통해 설정한 Express 애플리케이션의 속성 값을 반환
  //두 번째 매개변수로는 콜백 함수를 지정, 이 함수는 서버가 시작되었을 때 실행, 이 콜백 함수에서는 console.log() 구문을 사용하여 서버가 대기 중임을 알림.

  // console.log(app.get('port'), '번 포트에서 대기 중');
  console.log(`http://localhost:${app.get("port")}`, "빈 포트에서 대기 중");
}); //  Express 애플리케이션을 실행하고, 클라이언트의 요청을 대기하는 코드, app.listen() 메서드를 이용하여 서버를 실행하고, 콘솔에 서버가 대기 중임을 출력
