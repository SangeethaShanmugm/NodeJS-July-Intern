// var => can be redeclared and reassigned ✅
// let => cannot be redeclared but can reassiged ✅
// const -> neither redeclare nor reassign is possible ✅
//var  -> function scope, global scope
//let, const => block scope

var a = 10;
// var a  => declaration
// a =10 => assignment

var a = 10;
var a = 11;
console.log(a); //11

let b = 10;
b = 20;

console.log(b); //20

// const x = 50;
// x = 20;
// console.log(x);

function double() {
  var n = 50;
  return n * 2;
}
// console.log(double(n));
// console.log(first)

//hoisting + lexical scope
var price = 1000;

function getPrice() {
  console.log("The old price is", price);
  var price = 500;
  console.log("The new price is ", price);
  return price;
}

console.log(getPrice());

// grandfather   => 🏠

// father  => 🚗 => own scope + lexical scope(grandfather => 🏠) => father's closure

// child => 🖥️ pc=> own scope + lexical scope(father => car) => child closure

//hositing

// console.log(s); //undefined
// var s = 10;
// console.log(s); //10

// //JIT -> JS, context

// //1. compilation phase
// console.log(s); //skip
// var s = 10; //Js => Do you know s? No | What is the value? => context => undefined
// console.log(s); //skip

// //2, Execution Phase
// console.log(s); //Js => Do you know s? yes| What is the value? => context => undefined
// var s = 10; //Js => Do you know s? yes | What is the value? => context => note down => s = 10
// console.log(s); //Js => Do you know s? yes | What is the value? => context =>10

//arrow function

var price = 1000;

// const getPrice = () => console.log("The new price is ", price);

// console.log(getPrice());

//object => {K:V}
const student = {
  name: "John",
  age: 20,
};

//dot notation
console.log(student.name);

//object destructuring
const { name, age } = student;

console.log(name);
console.log(age);

var o1 = {
  firstName: "John",
  LastName: "Andrew",
};

var o2 = {
  age: 20,
  city: "Bangalore",
};
//ES5
var o3 = Object.assign(o1, o2);
console.log("ES5 => ", o3);

//ES6 => spread operator

var o3 = { ...o1, ...o2 };
console.log("ES6 => ", o3);

//String literals  => ES5

var mname = "Avengers";
var type = "Action";
var category = "Hollywood";
var rating = 5;

// "An Avengers is an Action movie with rating of 5 and from the category Hollywood"

var output = "An " + mname + " is an " + type + " movie with rating of " + rating +" and from the category " + category;

console.log("ES5=> ", output);

//template literals => ES6
//  => backtick => ``  + interpolation =>  ${} => substitute the value
var output = `An ${mname} is an ${type} movie with rating of ${rating} and from the category ${category}` 

console.log("ES6=> ", output);