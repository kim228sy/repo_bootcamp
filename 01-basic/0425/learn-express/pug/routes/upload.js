const express = require("express");
const path = require("path"); // path 모듈을 블러온다
const multer = require("multer"); //파일 업로드를 처리하기 위한 미들웨어인 multer를 불러오는 코드, multer를 이용하여 파일 업로드를 처리

const router = express.Router();

// // GET /user 라우터
// router.get("/", (req, res) => {
//   res.send("Hello, User");
// });

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

router.get("/", (req, res) => {
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
router.post(
  // app.post() 메서드를 이용하여 "/upload" 경로에 대한 POST 요청을 처리하는 핸들러를 등록
  "/",
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

module.exports = router;
