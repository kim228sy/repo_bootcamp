import { dirname } from "path";
import { fileURLToPath } from "url";

// console.log("file", __filename); // .js 확장자에서는 가능, .mjs 확장자에서는 안됨
// console.log("dir", __dirname); // .js 확장자에서는 가능, .mjs 확장자에서는 안됨
// js는 commonJS, mjs는 es6

const __filename = dirname(fileURLToPath(import.meta.url));
const __dirname = dirname(__filename);
console.log("file", __filename);
console.log("dir", __dirname);

console.log(JSON.stringify(import.meta));
