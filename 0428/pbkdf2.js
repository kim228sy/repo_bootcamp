const crypto = require("crypto");

crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString("base64");
  console.log("salt:", salt);
  crypto.pbkdf2("비밀번호입력값자리", salt, 1000, 64, "sha512", (err, key) => {
    console.log("key:", key);
    console.log("password:", key.toString("base64"));
  });
});
