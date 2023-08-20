const express = require("express");
const app = require("./app");
const bodyParser = require("body-parser");
const PORT = 4000;

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index", {
    error: req.query.valid ? req.query.valid : "",
    msg: req.query.msg ? req.query.msg : "",
  });
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
