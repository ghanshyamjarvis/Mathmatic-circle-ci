var calculator = require('./calculator');
var a=10, b=5;


console.log("Addition : "+calculator.add(a,b));





/*const mysql = require('mysql');
const express = require('express');
const app = express();

//create connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user:'root',
  password: 'password',
  database: 'Emp'
});

app.get('/all',(req,res) => {
  const sql = `select * from emp`;
  const query = db.query(sql,(err,results) => {
    if (err) throw err;
    res.json({data:results})
  })
});


app.listen(3000, ()=>{
  console.log('server start on 3000 port')
});*/