// const { odd, even } = require("./var.js");
import { odd, even } from "./var.mjs";

function checkOddOrEven(num) {
  if (num % 2) {
    return odd; // 짝수면
  }
  return even;
}

// module.exports = checkOddOrEven;
export default checkOddOrEven;
