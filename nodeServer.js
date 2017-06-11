const http = require('http');
const url = require('url');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient

const hostname = '127.0.0.1';
const port = 3000;

// express
const express = require('express');
var app = express();
app.use(bodyParser.urlencoded({extended: true}))

require ("./router.js")(app);

// css / js / html files
app.use(express.static(__dirname));

var db

MongoClient.connect("mongodb://<root>:<root>@ds163181.mlab.com:63181/sherlock", (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(port, hostname, () => {
    console.log('listening on 3000')
  })
})
