const express = require("express");
const app = express();
const User = require("../model/user");
const router = express.Router();
const bodyParser = require("body-parser");
//For encrypting password
const bcrypt = require("bcryptjs");
const config = require("../config");
const jwt = require("jsonwebtoken");
const LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("../scratch");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", "./views");

router.post("/register", (req, res) => {
  // if (
  //   !/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#!@%&_]).{8,}$/g.test(
  //     req.body.password
  //   )
  // ) {
  //   res.status(400).send("Password pattern does not match");
  // }
  const hashedPassword = bcrypt.hashSync(req.body.password, 8); //no. of rounds

  User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  }).then((registeredUser) => {
    var token = jwt.sign({ id: registeredUser._id }, config.secret, {
      expiresIn: 86400, //expires in 24 hours
    });
    // res.status(201).send({ msg: "Successful registration" });
    res.redirect("/");
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send("Error on the server");
    console.log(user);
    if (!user) {
      return res
        .status(401)
        .send({ auth: false, token: null, msg: "Invalid credentails" });
    }
    console.log(user.password);
    const storedDbPassword = user.password;
    const isPasswordMatch = bcrypt.compare(req.body.password, storedDbPassword);
    if (!isPasswordMatch)
      return res
        .status(401)
        .send({ auth: false, token: null, msg: "Invalid credentails" });

    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400, //expires in 24 hours
    });
    var data = localStorage.setItem("authtoken", token);
    console.log(data);
    // res.send({ auth: true, token: token, msg: "Successful login" });
    res.redirect(`/users/profile`);
  });
});

router.get("/loggedInUser", (req, res) => {
  var token = req.headers["x-auth-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token Provided" });

  jwt.verify(token, config.secret, (err, validatedToken) => {
    if (err) {
      console.log("Error in JWT", err);
      return res.status(500).send("Authentication failed");
    }
    User.findById(validatedToken.id, { password: 0 })
      .then((userDetails) => {
        console.log("user Info", userDetails.name);
        res.status(200).send(userDetails);
      })
      .catch((err) => console.log("Error", err));
  });

  // res.send(userDetails);
});

module.exports = router;

// password@123 + fdihhfrlkshgfdkjh (random string => salting ) =>52425483685
// 1. fhkdjhfdsk -> 2 rounds - 2s -> Too short & can be repeated
// 2. fgieyreoiueigjdkgngfdjhn  -> 10 rounds  -> 8s  => Balance security vs User experience(pick) ✅
// 3. dsity9843768ehtrjdsbgkjsfdjkxhoiaudp9qwruoiefsamclad86478hfjdnf[klj] -> 100 rounds - 4min(pick) ❌
