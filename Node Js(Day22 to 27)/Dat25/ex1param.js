let express = require("express");
let app = express();
let PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT} port`);
});

app.get('/user/:userId/:username', (req, res)=>{
    let userId = req.params.userId;
    let username = req.params.username;
    let user ={ id : userId, name : username};
    res.json(user);
});

app.post('/user/:userId/:username', (req, res)=>{
    let userId = req.params.userId;
    let username = req.params.username;
    console.log(`Id =${userId} and Name = ${username}`);
    res.send('Called post method');
});