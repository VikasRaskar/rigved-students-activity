let fs = require("fs");
data = fs.readFileSync("user.json");
dataString = data.toString();
jsArray = JSON.parse(dataString);
console.log(jsArray);
let express = require("express");
let app = express();
app.listen(2800,()=>{
    console.log('Server is running on 2800');
});
app.get('/',(request,response)=>{
    response.json(jsArray)
});