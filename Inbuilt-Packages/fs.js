// callback  => passing a function inside an another function
const { clear } = require("console");
const fs = require("fs");

const quote = "No beauty shines than that of a good heart 🥳🥳🥳";

// fs.writeFile("awesome.html", quote, (err) => {
//   console.log("Completed writing awesome.html");
// });

// fs.writeFile("text.ppt", quote, (err) => {
//   console.log("Completed writing text.ppt");
// });

// fs.writeFile("notes.csv", quote, (err) => {
//   console.log("Completed writing notes.csv");
// });

const quote2 = "Live more, worry less🥳";
//create the below files with quote2 as the content
// /backup
// text-1.html
// text-2.html
// text-3.html
// .....
// text-10.html
// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//     console.log(`Completed writing text-${i}.html`);
//   });
// }

// console.log(process.argv);
// //destructuring
// const [, , n1, n2] = process.argv;
// console.log(n1, n2);

//node fs.js 5 -> 5 files to be created  |  notes-1.txt, notes-2.txt...notes-5.txt

const [, , noOfFiles] = process.argv;
console.log(noOfFiles);

// for (let i = 1; i <= noOfFiles; i++) {
//   fs.writeFile(`./backup/notes-${i}.txt`, quote2, (err) => {
//     console.log(`Completed writing notes-${i}.txt`);
//   });
// }

//read a files
// callback () =>{}
// fs.readFile("./cool123.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error ❌", err);
//   }
//   console.log("The content of the file is => ", data);
// });

const niceQuote = "\nMake everyday a little less ordinarily";

// fs.appendFile("./nice.txt", niceQuote, (err) => {
//   console.log(`Completed writing nice.txt`);
// });

// fs.unlink("./toRemove.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Deleted Successfully");
// });

// fs.readdir("./backup", (err, files) => {
//   console.log("All file names are", files);
// });

//Delete all the files in backup folder

// fs.readdir("./backup", (err, data) => {
//   data.forEach((fileName) => {
//     fs.unlink(`./backup/${fileName}`, (err) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log(`Deleted Successfully ${fileName}`);
//     });
//   });
// });

// fs.readFile("./json/user.json", (err, jsonData) => {
//   if (err) {
//     console.log(err);
//   } else {
//     const user = JSON.parse(jsonData);
//     console.log(user);
//     // console.table(user);
//     console.log(user[0].role);
//   }
// });

// fs.readFile("./json/user.json", (err, jsonData) => {
//   if (err) {
//     console.log(err);
//   } else {
//     const user = JSON.parse(jsonData);
//     console.log(user);
//     console.table(user);
//     for (let index = 0; index < user.length; index++) {
//       console.log(user[index].name, user[index].role);
//     }
//   }
// });

var city = ["Delhi", "Mumbai", "Helsinki", "Dubai"];
//["Delhi", "Mumbai", "Helsinki", "Dubai"]
//    0         1       2           3   => index/position
console.log(city[1]);
console.log(city.indexOf("Mumbai"))
