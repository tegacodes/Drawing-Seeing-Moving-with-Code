var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 5000);

//Routing
app.use(express.static('public'));


//when server gets a call 'connection', we perform the function that follows it
io.on('connection', function (socket) {
  socket.broadcast.emit('user');
  //emits an event called 'connection' to all connected clients, which is existing spots array.
  socket.emit('connected', {msg: "You're connected!"});
  // when the client emits 'connection', this listens and executes
});
