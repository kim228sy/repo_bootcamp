"use strict";

const app = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./routes/user");

const PORT = Number(process.env.SERVER_PORT) || 8080;

app.use(bodyParser.json({ strict: false }));
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}.`);
});
