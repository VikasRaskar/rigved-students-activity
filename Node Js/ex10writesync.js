
let fs = require("fs");
let message = "Hello everyone My name is Vikas\n";
fs.writeFileSync("ex10msg.txt", message, {flag: 'a+'});
console.log("Done..");