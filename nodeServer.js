const http = require('http');
const url = require('url');
const express = require('express');

var app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/',function(req,res){
	res.send ('yolo');
	console.log('uolo');
	})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
