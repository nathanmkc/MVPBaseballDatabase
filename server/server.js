var express = require('express');
var app = express();
var mysql = require('mysql');
var db = mysql.createConnection({user: 'root', password: '', database: 'Baseball'});

app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

db.connect((err) => {
  if (err) {
    console.error('error connecting to database:' + err.stack);
    return;
  }
  console.log('succesfully connected to database');
});

app.post('/pitcher', (req, res) => {
  var queryString = 'INSERT INTO Pitchers SET ?';
  db.query(queryString, req.body)
  res.send('Pitcher succesfully added to the database.');
})

app.get('/pitcher', (req, res) => {
  var queryString = 'SELECT * FROM Pitchers';
  db.query(queryString, (err, results) => {
    if (err) {
      throw err;
    } else {
      console.log(results);
      res.send(results);
    }
  })
})

app.post('/positional', (req, res) => {
  var queryString = 'INSERT INTO Positionals SET ?';
  db.query(queryString, req.body)
  res.send('Positional player succesfully added to the database.');
})

app.get('/positional', (req, res) => {
  var queryString = 'SELECT * FROM Positionals';
  db.query(queryString, (err, results) => {
    if (err) {
      throw err;
    } else {
      console.log(results);
      res.send(results);
    }
  })
})

app.listen(3000, () => {
  console.log('express app listening on port 3000');
})