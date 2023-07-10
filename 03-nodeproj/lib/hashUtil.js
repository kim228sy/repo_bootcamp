const crypto = require("crypto");

const iterations = 1005;

const hashUtil = {
  makePasswordHash(password) {
    return new Promise((resolve, reject) => {
      if (!password) {
        reject(new Error("Not allowed null (password)"));
      }

      // 1. salt
      const salt = crypto.randomBytes(64).toString("base64");

      // 2. hash 생성
      crypto.pbkdf2(
        password,
        salt,
        iterations,
        64,
        "sha256",
        (err, derivedKey) => {
          if (err) throw err;
          const hash = derivedKey.toString("hex");

          // 최종 패스워드 (password=slat, hash)
          const encryptedPassword = `${salt}.${hash}`;

          resolve(encryptedPassword);
        }
      );
    });
  },

  // 비밀번호 확인
  checkPasswordHash(password, encryptedPassword) {
    return new Promise((resolve, reject) => {
      if (!password || !encryptedPassword) {
        reject(new Error("Not allowed null (password, encryptedPasswords"));
      }

      // 1. slat와 hash를 분리
      const encryptedPasswordSplit = encryptedPassword.split(".");
      const slat = encryptedPasswordSplit[0];
      const encryptedHash = encryptedPasswordSplit[1];

      // 2.  입력된 password로부터 hash 생성
      crypto.pbkdf2(
        password,
        slat,
        iterations,
        64,
        "sha256",
        (err, derivedKey) => {
          if (err) throw err;
          const hash = derivedKey.toString("hex");

          // 생성된 hash 값과 db에 저장된 hash가 동일한지 비교
          if (hash === encryptedHash) {
            resolve(true);
          } else {
            resolve(false);
          }
        }
      );
    });
  },
};

module.exports = hashUtil;
