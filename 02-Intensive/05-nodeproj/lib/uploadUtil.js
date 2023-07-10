const multer = require("multer");
// 파일 저장을 위한 Multer 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // 파일이 저장될 경로를 지정합니다.
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // 파일명을 설정합니다. 원하는 방식으로 파일명을 변경할 수 있습니다.
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Multer 미들웨어를 생성합니다.
const upload = multer({ storage: storage });
console.log(upload)

module.exports = upload