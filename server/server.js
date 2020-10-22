var express = require('express');
var app = express();
app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.listen(3000, () => {
  console.log('express app listening on port 3000');
})