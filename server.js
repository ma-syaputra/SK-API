var express = require('express')
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var routeDishes = require('./routes/dishRoute');
routeDishes(app);
app.listen(3000)
console.log('Running')