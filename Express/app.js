const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8080;

//http  -get - read, post-insert/add, put -update, delete-delete
app.get("/", function (req, res) {
  res.send("Hello Everyone 🥳🥳🥳");
});

app.get("/getMovies", function (req, res) {
  fs.readFile("./movies.json", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.parse(result));
    }
  });
});

app.listen(PORT, () => console.log(`Server started on the PORT ${PORT}`));
