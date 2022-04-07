let fs = require("fs");
let read = require("readline-sync");

let data = fs.readFileSync('emp.json');
let dataString = data.toString();
let jsArray = undefined;
if(dataString.length < 1 || dataString == ""){
    jsArray =[];
}else{
    jsArray = JSON.parse(dataString);
}
let n = read.question("Enter Your Name: ");
let a = read.question("Enter your age: ");
let emp = {name : n, age :a};
jsArray.push(emp);
let jsonArray = JSON.stringify(jsArray);
fs.writeFileSync("emp.json", jsonArray);