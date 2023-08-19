const express = require("express");
const User = require("../model/user");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("signup.ejs");
});
module.exports = router;
