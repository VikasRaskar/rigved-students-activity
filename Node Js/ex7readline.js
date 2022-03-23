let read = require("readline-sync");
let name = read.question("Enter your Name : ");
let age = read.question("Enter your Age : ");
console.log(`Hello ${name}, Your age is ${age}`);

let num1 = read.questionInt("Enter First Number : ");
let num2 = read.questionInt("Enter Second Number : ");
let result = num1 * num2;
console.log(`Result = ${result}`);
