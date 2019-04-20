var express = require('express')
var cors = require('cors')
var app = express()
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var routeDishes = require('./routes/dishRoute');
routeDishes(app);
app.listen(3000)
console.log('Running')