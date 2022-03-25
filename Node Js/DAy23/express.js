let fs = require("fs");
data = fs.readFileSync("user.json");
dataString = data.toString();
jsArray = JSON.parse(dataString);
console.log(jsArray);
//response json 
let express = require("express");
let app = express();
app.listen(3003,()=>{
    console.log('Server is running on 3003');
});
app.get('/',(request,response)=>{
    response.json(jsArray)
});