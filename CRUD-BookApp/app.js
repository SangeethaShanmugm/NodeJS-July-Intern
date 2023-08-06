// const express = require("express");
// const { MongoClient } = require("mongodb");
import express from "express";
import { MongoClient } from "mongodb";
import { booksRouter } from "./routes/books.js";
export const app = express();
const PORT = 7000;

app.use(express.json()); //Inbuilt middleware => transpilor
//Mongodb connection
const MONGO_URL = "mongodb://0.0.0.0:27017";

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongodb is connected");
  return client;
}

export const client = await createConnection();

app.get("/", (req, res) => {
  res.send("Hello Everyone 🥳🥳🥳");
});
//express router
app.use("/books", booksRouter);

app.listen(PORT, () => console.log(`Server started on the PORT ${PORT}`));
