var express = require('express');
var app = express();
app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.post('/pitcher', (req, res) => {
  console.log(req.body);
  res.send('Pitcher succesfully added to the database.');
})

app.post('/positional', (req, res) => {
  console.log(req.body);
  res.send('Positional player succesfully added to the database.');
})

app.listen(3000, () => {
  console.log('express app listening on port 3000');
})