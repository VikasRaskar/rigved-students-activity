let express = require("express");
let app = express()
let parser = require("body-parser");
let PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT} port`);
});

app.post("/user/:id", (req, res)=>{
    let queryData = req.query;
    let id = req.params.id;
    let age = queryData.age;
    res.send(`${id} is the path parameter and ${age} is query parameter`);
});
app.post("/", (req, res)=>{
    res.send('hello World');
});