const express = require("express"); // 익스프레스 모듈을 블러온다
const morgan = require("morgan"); // morgan 모듈을 블러온다
const cookieParser = require("cookie-parser"); // cookie-parser 모듈을 블러온다
const session = require("express-session"); // express-session 모듈을 블러온다
const dotenv = require("dotenv"); // dotenv 모듈을 블러온다
const path = require("path"); // path 모듈을 블러온다

dotenv.config(); // .env 파일에서 변수를 로드하여 process.env 객체에 등록
const app = express(); // express() 함수를 호출하여 새로운 Express 애플리케이션을 생성하고, app 상수에 할당
app.set("port", process.env.PORT || 3000); // Express 애플리케이션의 설정 값을 지정, port 설정 값을 지정하고 있으며, 이 값은 process.env.PORT 환경 변수 값 또는 기본값으로 3000을 사용

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

const multer = require("multer"); //파일 업로드를 처리하기 위한 미들웨어인 multer를 불러오는 코드, multer를 이용하여 파일 업로드를 처리
const fs = require("fs"); // Node.js에서 파일 시스템에 접근하기 위한 모듈인 fs를 불러오는 코드, fs 모듈을 이용하여 파일 시스템 작업을 수행

try {
  fs.readdirSync("uploads"); //uploads 폴더가 존재하는지 확인
} catch (error) {
  // uploads 폴더가 없을 경우 readdirSync() 메소드는 ENOENT 에러를 발생
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다."); //console.error()를 사용하여 에러 메시지를 출력
  fs.mkdirSync("uploads"); //동기적으로 디렉토리를 생성하며, 디렉토리가 이미 존재하는 경우 에러를 발생
} // fs 모듈을 사용하여 현재 디렉토리에 uploads 폴더가 없을 경우 uploads 폴더를 생성하는 코드, 파일 업로드를 처리하는 데 사용될 uploads 폴더가 준비
const upload = multer({
  //multer 모듈은 클라이언트가 업로드한 파일을 처리하는 데 사용되며, upload 변수는 multer의 설정 값을 정의한 객체
  storage: multer.diskStorage({
    //업로드한 파일을 어디에 저장할지 결정, diskStorage() 메서드를 사용하여 uploads/ 디렉토리에 파일을 저장하도록 설정
    destination(req, file, done) {
      // 업로드된 파일이 저장될 경로를 결정. req 매개변수는 HTTP 요청 객체, file 매개변수는 업로드된 파일 객체. done 함수는 파일 저장 경로를 반환하는 콜백 함수
      //destination() 콜백 함수에서는 파일이 저장될 디렉토리를 반환
      done(null, "uploads/"); //업로드된 파일을 uploads 디렉토리에 저장하도록 지정
    }, //업로드된 파일이 저장될 경로를 결정하는 콜백 함수. done() 함수를 이용하여 파일이 저장될 경로를 설정, null 매개변수는 에러가 발생하지 않았음을 의미
    filename(req, file, done) {
      //업로드된 파일의 이름을 결정, req 매개변수는 HTTP 요청 객체, file 매개변수는 업로드된 파일 객체. done 함수는 파일 이름을 반환하는 콜백 함수
      //filename() 콜백 함수에서는 파일 이름을 생성, 업로드한 파일의 원래 이름과 확장자를 이용,파일 이름과 확장자를 분리한 후, 현재 시간을 이용하여 고유한 파일 이름을 생성
      const ext = path.extname(file.originalname); // file.originalname을 이용하여 업로드된 파일의 원래 이름을 가져옴. path.extname() 메소드를 사용하여 파일 확장자를 추출.
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); // path.basename() 메소드를 사용하여 파일 이름에서 확장자를 제외한 부분을 가져옴. 파일 이름과 확장자 사이에 현재 시간 정보(Date.now())를 추가하여, 고유한 파일 이름을 생성. 이렇게 생성된 파일 이름을 done() 함수를 이용하여 반환
    }, // 업로드된 파일의 이름을 결정하는 콜백 함수. done() 함수를 이용하여 파일 이름을 설정하며, null 매개변수는 에러가 발생하지 않았음을 의미
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 업로드하는 파일의 용량을 제한, 최대 파일 크기를 5MB로 제한하도록 설정
}); //multer 모듈을 사용하여 파일 업로드를 처리하기 위한 설정을 정의하는 코드, upload 변수를 이용하여 파일 업로드를 처리
app.get("/upload", (req, res) => {
  // HTTP GET 요청이 "/upload" 경로로 GET 요청이 전달될 때 multipart.html 파일을 응답으로 보내는 라우팅 핸들러, app.get() 메서드를 이용하여 /upload 경로에 대한 GET 요청을 처리하는 핸들러를 등록
  res.sendFile(path.join(__dirname, "multipart.html")); //res.sendFile() 메서드를 사용하여 multipart.html 파일의 경로를 응답으로 보냄, path.join() 메서드는 파일 경로를 조합하는 데 사용. 여러 개의 경로를 인수로 받아, 해당 경로들을 결합하여 유효한 파일 경로 만듦. __dirname은 현재 파일이 위치한 디렉토리를 나타내며, "multipart.html"은 전송할 파일의 이름
});
// app.post("/upload", upload.single("image"), (req, res) => {
//   //HTTP POST 요청이 "/upload" 경로로 전달될 때, 클라이언트가 전송한 파일을 처리하는 라우팅 핸들러, app.post() 메서드를 이용하여 /upload 경로에 대한 POST 요청을 처리하는 핸들러를 등록
//   // upload.single("image") 미들웨어를 사용하여 파일을 처리, upload.single("image") 미들웨어를 사용하여 파일을 처리, ("image") 매개변수는 업로드할 파일 필드의 이름을 지정
//   // upload.single() 미들웨어는 req.file 객체를 생성.
//   console.log(req.file); //req.file 객체를 콘솔에 출력. 이 객체는 업로드된 파일 정보 담고 있음.
//   res.send("ok"); // res.send("ok") 구문을 사용하여 클라이언트에게 ok 문자열을 응답으로 보냄
// });
app.post(
  // app.post() 메서드를 이용하여 "/upload" 경로에 대한 POST 요청을 처리하는 핸들러를 등록
  "/upload",
  upload.fields([{ name: "image1" }, { name: "image2" }]), // upload.fields() 미들웨어를 사용하여 두 개의 파일을 처리, 여러 개의 파일을 업로드할 때 사용.
  // { name: 'image1' }, { name: 'image2' } 매개변수는 업로드할 파일 필드의 이름을 지정
  // upload.fields() 미들웨어는 req.files 객체를 생성
  //  name 매개변수로 지정한 필드 이름을 프로퍼티로 갖음.
  // 두 개의 파일을 업로드할 때는 req.files.image1, req.files.image2 프로퍼티를 사용하여 파일 정보를 가져올 수 있음.
  (req, res) => {
    // 클라이언트가 전송한 파일 정보를 콘솔에 출력하는 코드, req.file 객체는 upload.single() 미들웨어를 사용하여 하나의 파일을 업로드할 때 생성
    // req.file 객체는 upload.single() 미들웨어를 사용하여 하나의 파일을 업로드할 때 생성
    // req.file 객체는 업로드된 파일의 정보를 담고있음.
    console.log(req.file); // req.file 객체를 콘솔에 출력
    res.send("ok"); // res.send("ok") 구문을 사용하여 클라이언트에게 "ok" 문자열을 응답
  }
); // HTTP POST 요청이 "/upload" 경로로 전달될 때, 클라이언트가 전송한 두 개의 파일을 처리하는 라우팅 핸들러, req.files 객체를 출력하는 라우팅 핸들러

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
app.use((err, req, res, next) => {
  // Express 애플리케이션에서 에러 처리를 담당하는 미들웨어 함수, app.use() 메서드를 이용하여 미들웨어 함수를 등록. err을 설정, 이전 미들웨어에서 발생한 에러 객체를 전달. 두 번째 매개변수 req 객체를 설정,세 번째 매개변수 res 객체를 설정, 마지막 매개변수로 next 함수를 설정
  console.error(err); // console.error() 구문을 사용하여 에러 메시지를 콘솔에 출력
  res.status(500).send(err.message); // res.status(500) 메서드를 사용하여 HTTP 응답 상태 코드를 500으로 설정, send() 메서드를 사용하여 에러 객체의 메시지를 응답 본문으로 전송
}); // err 객체를 이용하여 에러를 처리하고, res 객체를 이용하여 HTTP 응답을 전송

app.listen(app.get("port"), () => {
  // Express 애플리케이션을 실행하고, 클라이언트의 요청을 대기하는 코드, app.listen() 메서드를 이용하여 Express 애플리케이션을 실행, 첫 번째 매개변수로 app.get("port")를 사용하여 포트 번호를 지정,  app.get() 메서드는 app.set() 메서드를 통해 설정한 Express 애플리케이션의 속성 값을 반환
  //두 번째 매개변수로는 콜백 함수를 지정, 이 함수는 서버가 시작되었을 때 실행, 이 콜백 함수에서는 console.log() 구문을 사용하여 서버가 대기 중임을 알림.

  // console.log(app.get('port'), '번 포트에서 대기 중');
  console.log(`http://localhost:${app.get("port")}`, "빈 포트에서 대기 중");
}); //  Express 애플리케이션을 실행하고, 클라이언트의 요청을 대기하는 코드, app.listen() 메서드를 이용하여 서버를 실행하고, 콘솔에 서버가 대기 중임을 출력
