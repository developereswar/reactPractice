var express = require('express');
const bodyParser = require('body-parser');
var app = express();
// var file = require('fs'); 
//Db connection
var mongoose = require("mongoose");

mongoose.connect(
    "mongodb://devEswar:Eswaresu*12@ds253587.mlab.com:53587/m_practice",
    { useNewUrlParser: true });


const expCtr = require('./server/Controllers/_exepensesController')
// Using Node.js `require()`
app.listen(8080)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//Origin
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//Api routes
app.use('/api/expenses', expCtr)


