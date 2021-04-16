const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  //res.send("<h1>Welcome back!!</h1>");
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

router.get("/about", (req, res) => {
  //res.send("<h1>Welcome back!!</h1>");
  res.sendFile(path.join(__dirname, "../public", "about.html"));
});

module.exports = router;
