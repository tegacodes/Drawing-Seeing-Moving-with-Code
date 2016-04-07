var express = require('express')
var app = express();
var server = require('http').Server(app);

server.listen(process.env.PORT || 5000);

app.use(express.static('public'));
