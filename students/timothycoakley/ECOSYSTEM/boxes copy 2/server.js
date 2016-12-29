// load in express library...
var express = require('express'); 
// create an instance
var app = express();
// create server
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static('public'));
server.listen(3000);
var boxes = [];
//function(socket) is an anonymous function...
// giving io.on a string and a function-
io.on('connection', function(socket){
	socket.emit('initialize', boxes);
	console.log("Someone connected!")
	socket.on('box-clicked', function(data){
	boxes.push(data);
	socket.broadcast.emit('box-clicked', data);
	console.log(data);
	});
});
// this is the same thing as above...
// io.on('connection', connectionFunction){
// function connectionFunction(socket){
// 	console.log("Someone connected!")
// }
// http://localhost:3000/
// a callback function is a a function
// that executes at the end of an
// asynchronous event
// "when this happens, do this"
// Instructions...
// install node
// npm install express
// node server.js
// npm install socket.io https://cdnjs.com/libraries/socket.io