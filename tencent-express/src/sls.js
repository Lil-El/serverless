const express = require("express");
let path = require("path");
const app = express();

app.get("*", function (req, res) {
  res.send("i am express");
});
module.exports = app;
