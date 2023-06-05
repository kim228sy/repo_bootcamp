var my_module = require("./mymodule");
// var my_module = require("./my_module"); // 이렇게 작성해야 sueZ 나옴

console.log(
  (function (settings) {
    return settings.split("").reverse().join("");
  })(my_module.name)
);

const express = require("express");
const path = require("path");

const app = express();
app.set("port", process.env.PORT || 8080);

app.get("/listUsers", (req, res) => {});

app.post("/addUser", (req, res) => {});

app.listen(app.get("port"), () => {
  console.log(`http://localhost:${app.get("port")}`);
});

for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    if (i === 3) {
      continue;
    } else if (i === 5) {
      continue;
    } else if (i === 7) {
      continue;
    } else if (i === 9) {
      continue;
    }
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

if (num > 10) {
  console.log("Higher then 10");
}

if (90 <= num) {
  console.log("A");
} else if (80 <= num) {
  console.log("B");
} else if (70 <= num) {
  console.log("C");
} else {
  console.log("F");
}
