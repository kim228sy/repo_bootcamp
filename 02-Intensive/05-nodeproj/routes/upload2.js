const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const { isLoggedIn } = require('../lib/middleware');
const fs = require('fs')
const multer = require('multer')

const uploadDir = 'uploads'

//파일 저장할 폴더가 있는지 체크후 없으면 새로 생성
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir)
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //파일이 저장될 경로 지정
    cb(null, uploadDir)
  },
  filename: (req, file, cb) => {
    //파일명을 설정하는 부분
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})
const upload = multer({ storage: storage })
// 등록
router.post('/', isLoggedIn, upload.single('file'), async (req, res) => {
  try {

    if (!req.file) {
      const err = new Error('파일 업로드에 실패했습니다.')
      logger.error(err.toString())
      res.status(500).json({ err: err.toString() })
    }
    const result = {
      originalname: req.file.originalname,
      filename: req.file.filename,
      path: req.file.path
    }
    // 비즈니스 로직 호출
    logger.info(`(post.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});


module.exports = router;
