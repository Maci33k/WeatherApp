const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'weatherappdb',
  port: 3306
})

// checking database connection
db.connect(err =>{
  if(err){console.log("err");}
  console.log("Database connected succesfully");
})


const app = express();
app.use(cors());
app.use(bodyparser.json());

//connecting MySQL database


app.listen(3000, ()=>{
  console.log("Server is running on 3000 PORT");
})

app.put('/users', (req, res) => {

  const updatedData = req.body;




  const response = {
    message: 'Dane zostały zaktualizowane',

  };


  res.json(response);
});

// Getting all data
app.get('/users',(req,res)=>{
  // console.log("Get all data");
  let qrr = `SELECT * FROM weatherdata`;
  db.query(qrr,(err,results)=>{
    if(err) {
      console.log(err,'errs');
    }
    if(results.length > 0) {
      res.send({
        message:'All data',
        data:results
      })
    }
  })
})
