const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use("/", (req, res) => {
  res.send("Welcome to my app");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
