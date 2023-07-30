const express = require("express");
const request = require("request");
const app = express();
const PORT = 9000;
//to get city weather => https://api.openweathermap.org/data/2.5/weather?q=London&appid=019c012e8e9bcdc7c84a82c0bf685c83
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=11.02&lon=77.06&appid=019c012e8e9bcdc7c84a82c0bf685c83";

//setups
app.use(express.static(__dirname + "/public")); //css
app.set("views", "./src/views"); //pages
app.set("view engine", "ejs"); //choosing ejs template

app.get("/", (req, res) => {
  res.send("Welcome to Weather App 🥳🥳");
});

//get weather info
app.get("/getWeather", (req, res) => {
  request(url, (err, response, body) => {
    if (err) {
      console.log(err);
    } else {
      const output = JSON.parse(body);
      //   res.send(output);
      res.render("main", { output, title: "Weather App" });
    }
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server started on the port", PORT);
  }
});
