// object  = {k : v}

const students = {
  name: "jack",
  age: 25,
  skill: "nodejs",
};

console.log(students);
console.log(students.name);

//Array of objects
const students1 = [
  {
    name: "jack",
    age: 25,
    skill: "nodejs",
  },
  {
    name: "john",
    age: 26,
    skill: "mongodb",
  },
  {
    name: "peter",
    age: 24,
    skill: "javascript",
  },
];

console.log(students1);
var a = JSON.stringify(students1);
console.log(a);
