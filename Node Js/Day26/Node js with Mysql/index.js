   
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');

app.use(bodyParser.json());

app.listen(5000,() =>{
    console.log('Server started on port 5000');
});

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employeedb'
  });

conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connection successed.');
  });
     

app.get('/employee',(req, res) => {
let sqlQuery = "SELECT * FROM employee";

let query = conn.query(sqlQuery, (err, results) => {
    if(err) 
    throw err;
    res.send((results));
});
});

app.get('/employee/:id',(req, res) => {
    let sqlQuery = "SELECT * FROM employee WHERE id=" + req.params.id;
      
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send((results));
    });
});

app.post('/employee',(req, res) => {
    let data = {id: req.body.id,name: req.body.name, salary: req.body.salary};
    
    let sqlQuery = "INSERT INTO employee SET ?";
    
    let query = conn.query(sqlQuery, data,(err, results) => {
      if(err) throw err;
      res.send((results));
    });
});

app.put('/employee/:id',(req, res) => {
    let sqlQuery = "UPDATE employee SET salary='"+req.body.salary+"', name='"+req.body.name+"' WHERE id="+req.params.id;
    
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send((results));
    });
  });

app.delete('/employee/:id',(req, res) => {
    let sqlQuery = "DELETE FROM employee WHERE id="+req.params.id+"";
      
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
        res.send((results));
    });
  });
