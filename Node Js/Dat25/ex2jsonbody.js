let express = require("express");
let app =express();
let parser = require("body-parser");
let PORT = 2700;

app.listen(PORT, ()=>{
    console.log(`Server is runnign at ${PORT} port`);
});

app.use(parser.json());

app.post('/user',(req, res) =>{
    let content = req.body;
    console.log(content);
    res.send(`Hello ${content.name}, your age is :${content.age}`);
});
app.post('/user/:id',(req, res) =>{
    let content = req.body;
    let id = req.params.id;
    console.log(id,content);
    let user ={userId: id, username: content.name, age : content.age};
    res.json(user);
});