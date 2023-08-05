const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const PORT = 9000;

//Mongodb connection

const MONGO_URL = "mongodb://0.0.0.0:27017";

//mongodb://localhost:27017

function createConnection() {
  const client = new MongoClient(MONGO_URL);
  client.connect();
  console.log("Mongodb is connected");
  return client;
}

const client = createConnection();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log("Server started on the PORT", PORT));
