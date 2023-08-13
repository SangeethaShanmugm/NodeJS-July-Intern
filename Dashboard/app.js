import express from "express";
const MongoClient = require("mongodb").MongoClient;
import bodyParser from "body-parser";
const PORT = 8000;
const app = express();
let db;
const MONGO_URL = "mongodb://127.0.0.1:27017";
const collectionName = "userList";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", "./views");

// app.get("/", (req, res) => {
//   res.send("Welcome to Dashboard");
// });

//get data
app.get("/", (req, res) => {
  db.collection(collectionName)
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.render("index.ejs", { data: result });
    });
});

//post data
app.post("/addData", (req, res) => {
  db.collection(collectionName).insert(req.body, (err, result) => {
    if (err) throw err;
    console.log("data inserted successfully");
  });
  res.redirect("/");
});

//delete user
app.delete("/delete_user", (req, res) => {
  db.collection(collectionName).findOneAndDelete(
    { name: req.body.name },
    (err, result) => {
      if (err) return res.send(500, err);
      res.send({ message: "success" });
    }
  );
});

//find user by name
app.post("/find_by_name", (req, res) => {
  let name = req.body.name;
  db.collection(collectionName)
    .find({ name: name })
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//update user

app.put("/update_user", (req, res) => {
  db.collection(collectionName).findOneAndUpdate(
    { name: req.body.name },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      },
    },
    { upsert: true },
    (err, result) => {
      if (err) res.send(err);
      res.send(result);
    }
  );
});

//opening add user page
app.get("/addUser", (req, res) => {
  res.render("admin");
});

MongoClient.connect(MONGO_URL, (err, client) => {
  if (err) throw err;
  db = client.db("July_dashboard");
  console.log("MongoDb is connected");
  app.listen(PORT, () => console.log(`Server started on ${PORT}`));
});

//server
//express config
//mongo connect
//apis endpoint
