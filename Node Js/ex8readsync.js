let fs = require('fs');
let data  = fs.readFileSync("ex8Simple.txt");
let content = data.toString();
console.log(content);