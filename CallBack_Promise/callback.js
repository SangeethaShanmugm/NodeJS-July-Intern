//1. callback => function inside another function => helps us to achieve asynchronous behaviour in js

console.log("Hello Everyone");

console.log("Good Day");

console.log("Live more worry less🥳");

function person(name, callback) {
  console.log("Hi", +name);
  callback();
}

//callback function
function callMe() {
  console.log("I am a callback function ");
}

person("jack", callMe);
//Hi jack
//I am a callback function

// setTimeout(function () {
//   console.log("Hello");
// }, 5000);

const cart = ["pants", "shoes", "kurtas", "tshirts"];

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.updateWallet();
//     });
//   });
// });

//callback hell => pyramid of doom

//2. Inversion of Control
//we lose control of the code when we use callback

//Promise => object

let promise = new Promise(function (resolve, reject) {
  console.log("Hi");
});

//states =>pending, fulfilled, rejected

let count = false;

// let countValue = new Promise(function (resolve, reject) {
//   if (count) {
//     resolve("There is a count value");
//   } else {
//     reject("There is a no count value");
//   }
// });

// console.log(countValue);

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.updateWallet();
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(result);
//       }
//     });
//   });
// });

//.then => to handle promise chaining
// createOrder()
//   .then(function (result) {
//     return proceedToPayment();
//   })
//   .then(function (result2) {
//     return showOrderSummary();
//   })
//   .then(function (result3) {
//     return updateWallet();
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//promise.all

let p1 = Promise.resolve(30);
let p2 = 100;
let p3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 200, "🥳");
});

Promise.all([p1, p2, p3]).then(function (values) {
  console.log(values); //[30, 100, '🥳']
});
