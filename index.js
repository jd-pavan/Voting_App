const express = require("express");
require("dotenv").config();

const app = express();

app.use("/", (req, res) => {
  res.send("Welcome to my app");
});
app.listen(process.env.PORT || 3000, () => {
  console.log(`App listening on port http://localhost:${process.env.PORT}`);
});
