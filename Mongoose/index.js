const express = require("express");
const mongoose = require("mongoose");
var userModel = require("./model/user");
const app = express();
const PORT = 7000;

app.use(express.json());
//Mongodb connection
const MONGO_URL = "mongodb://0.0.0.0:27017/mongooseuserDB";

mongoose.connect(MONGO_URL);

app.get("/", (req, res) => {
  res.send("Welcome to UserList");
});

//add user
app.post("/addUser", (req, res) => {
  userModel.create(req.body).then(() => {
    res.send("User Added Successfully");
  });
});

//get user

app.get("/users", (req, res) => {
  userModel
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

//update user

app.put("/updateUser", (req, res) => {
  userModel
    .findOneAndUpdate(
      { name: req.body.name },
      {
        $set: {
          name: req.body.name,
          age: req.body.age,
          city: req.body.city,
        },
      },
      { upsert: true }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

//delete user
app.delete("/deleteUser", (req, res) => {
  userModel
    .findOneAndDelete({ name: req.body.name })
    .then((result) => {
      res.send("User Deleted");
    })
    .catch((err) => {
      res.status(500).send("DB Query Failed");
    });
});

app.listen(PORT, () => console.log("Server started on the PORT", PORT));
