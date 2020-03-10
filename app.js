const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql'
});

const app = express();

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySql Connected...');
});

// Create DB;
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE nodemysql';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Database created...');
  });
});

app.get('/addpost1', (req, res) => {
  let post = { title: 'Post One', body: 'This is post number one' };
  let sql = 'INSERT INTO posts SET ?';
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('post 1 added');
  });
});

app.listen('3000', () => {
  console.log('server started on port 3000');
});
