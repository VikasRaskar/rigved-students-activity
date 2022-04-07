let express = require('express');
let fs = require('fs');
let Parser = require('body-parser');
let app = express();
let PORT = 5000;

app.listen(PORT, () => console.log(`Server is running at ${PORT} port`));
app.use(Parser.json());
app.post('/user', (request, response) => {
    let data = fs.readFileSync('user.json');
    let dataString = data.toString();
    if (dataString.length < 1 || dataString == "") {
        jsArray = [];
    } else {
        jsArray = JSON.parse(dataString);
    }
    let content = request.body;
    jsArray.push(content);
    let jsObj = JSON.stringify(jsArray);
    fs.writeFileSync('activity.json', jsObj);
    response.send('data inserted successfully')
});

app.get('/user', (req, res) => {
    let data = fs.readFileSync('user.json');
    let datastring = data.toString();
    let jsonObj = JSON.parse(datastring);
    res.json(jsonObj);
});

app.get('/user/:id', (req, res) => {
    let id1 = req.params.id;
    let data = fs.readFileSync('user.json');
    let datastring = data.toString();
    let jsonObj = JSON.parse(datastring);
    for (let i = 0; i < jsonObj.length; i++) {
        if (jsonObj[i].userId == id1) {
            let content = { userId: jsonObj[i].userId, name: jsonObj[i].name, age: jsonObj[i].age };
            res.json(content);
        }
    }
});

app.put('/user/:id/:name/:age', (req, res) => {
    let id1 = req.params.id;
    let name1 = req.params.name;
    let age1 = req.params.age;
    let data = fs.readFileSync('user.json');
    let dataString = data.toString();
    let jsArray = undefined;
    if (dataString.length < 1 || dataString == "") {
        jsArray = [];
    }
    else {
        jsArray = JSON.parse(dataString)
    }
    let emp = { userId: id1, name: name1, age: age1 };
    jsArray.push(emp);
    let jsonArray = JSON.stringify(jsArray);
    fs.writeFileSync("user.json", jsonArray);
    res.json(jsonArray);
});

app.delete('/user/:id', (req, res) => {
    let id1 = request.params.id;
    let data = fs.readFileSync('user.json');
    let datastring = data.toString();
    let jsonObj = JSON.parse(datastring);
    for (let i = 0; i < jsonObj.length; i++) {
        if (jsonObj[i].userId == id1) {
            jsonObj.splice(i, 1);
            let jsObj = JSON.stringify(jsonObj);
            fs.writeFileSync('user.json', jsObj);
            res.json(jsonObj);
        }
    }
});