var express = require('express');
const bodyParser = require('body-parser');
var app = express();
// var file = require('fs'); 
const path = require('path');
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
// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/api/expenses', expCtr)


