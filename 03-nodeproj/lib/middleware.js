const logger = require("./logger");
const tokenUtil = require("./tokenUtil");

const middleware = {
  isLoggedIn(req, res, next) {
    const token = req.headers && req.headers.token;

    if (token) {
      const decoded = tokenUtil.verifyToken(token);

      if (decoded) {
        const newToken = tokenUtil.makeToken(decoded);
        res.set("token", newToken);
        next();
      } else {
        // 2. 토큰 검증이 실패한 경우 401 에러 처리
        const err = new Error("토큰 정보가 없습니다.");
        logger.error(err.toString());

        res.status(401).json({ err: err.toString() });
      }
    } else {
      // 토큰이 없는 경우 401 에러 처리
      const err = new Error("토큰이 없습니다.");
      logger.error(err.toString());

      res.status(401).json({ err: err.toString() });
    }
  },
};

module.exports = middleware;
