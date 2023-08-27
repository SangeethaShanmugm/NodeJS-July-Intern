const express = require("express");
const axios = require("axios");

const PORT = 8800;
const HOST = "0.0.0.0";
const app = express();

const searchUrl = `https://restcountries.com/v3.1/all`;

app.get("/", (req, res) => {
  axios
    .get(searchUrl)
    .then((response) => {
      const responseJson = response.data;
      console.log(responseJson);
      return res
        .status(200)
        .json({ source: "Docker Microservice", ...responseJson });
    })
    .catch((err) => {
      return res.json(err);
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
