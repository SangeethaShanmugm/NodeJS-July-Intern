const express = require("express");
const User = require("../model/user");
const router = express.Router();
const LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("../scratch");
const jwt = require("jsonwebtoken");
const config = require("../config");

router.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

router.get("/profile", function (req, res) {
  var token = localStorage.getItem("authtoken");
  console.log(token);
  if (!token) {
    res.redirect("/");
  }
  jwt.verify(token, config.secret, (err, verifiedToken) => {
    if (err) {
      res.redirect("/");
    }
    User.findById(verifiedToken.id, { password: 0 }, (err, user) => {
      if (err) {
        res.redirect("/");
      }
      if (!user) {
        res.redirect("/");
      }
      res.render("profile.ejs", { user });
    });
  });
});

router.get("/logout", (req, res) => {
  localStorage.removeItem("authtoken");
  res.redirect("/");
});

module.exports = router;
