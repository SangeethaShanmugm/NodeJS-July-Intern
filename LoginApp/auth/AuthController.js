const express = require("express");
const User = require("../model/user");
const router = express.Router();
const bodyParser = require("body-parser");
//For encrypting password
const bcrypt = require("bcryptjs");
const config = require("../config");
const jwt = require("jsonwebtoken");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/register", (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8); //no. of rounds

  User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  }).then((registeredUser) => {
    var token = jwt.sign({ id: registeredUser._id }, config.secret, {
      expiresIn: 86400, //expires in 24 hours
    });
    res
      .status(201)
      .send({ auth: true, token: token, msg: "Successful registration" });
  });
});

module.exports = router;

// password@123 + fdihhfrlkshgfdkjh (random string => salting ) =>52425483685
// 1. fhkdjhfdsk -> 2 rounds - 2s -> Too short & can be repeated
// 2. fgieyreoiueigjdkgngfdjhn  -> 10 rounds  -> 8s  => Balance security vs User experience(pick) ✅
// 3. dsity9843768ehtrjdsbgkjsfdjkxhoiaudp9qwruoiefsamclad86478hfjdnf[klj] -> 100 rounds - 4min(pick) ❌
