let fs = require("fs");
let data = fs.readFileSync("ex9User.txt");
let userInfo = data.toString();
let userItems = userInfo.split(";");

let[name,age,gender]= userItems;
console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
