const mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'Vishal', // Use the new user created
  password: 'Vishal@123', // Use the new user's password
  database: 'Winjit'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

connection.query('select * from employee', (err, result)=>{
    if(err)
    {
        console.log(err);
        return
    }
    console.log(result);
});

connection.query(`insert into employee values(3, 'Aditya', 'Nashik')`, (err, result)=>{
    if(err)
    {
        console.log(err);
        return
    }
    console.log(result);
});

connection.query(`update employee set rollno = 4 where name='Pratik';`, (err, result)=>{
    if(err)
    {
        console.log(err);
        return
    }
    console.log(result);
});

connection.query(`delete from employee where rollno = 3;`, (err, result)=>{
    if(err)
    {
        console.log(err);
        return
    }
    console.log(result);
});

// Perform database operations here

