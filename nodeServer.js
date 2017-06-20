const http = require('http');
const url = require('url');
const bodyParser= require('body-parser');


const hostname = '127.0.0.1';
const port = 3000;

// express
const express = require('express');
var app = express();
app.use(bodyParser.urlencoded({extended: true}))

//router js
require ("./router.js")(app);

// require config global // DB
var Config = require('./ConfigGlobal.js');

// css / js / html files
app.use(express.static(__dirname));

// initialize db before running client.
Config.initialize(function(err) {
	if(err) throw err; // bad DB initialization
	app.listen(port, hostname, () => {
		console.log('listening on 3000')
	})
})
