var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 5000);

//Routing
app.use(express.static('public'));

//array to store users
var users = [];

//when server gets a call 'connection', we perform the function that follows it
io.on('connection', function (socket) {
  socket.emit('all-users', users);
  //emits an event called 'connection' to all connected clients.
  socket.emit('connected', {msg: "You're connected!"});
  // when socket detects new connection, push to users array and broadcast the whole array to other users
  socket.on('new-user', function(data){
    data.id = socket.id;
    users.push(data);
    socket.broadcast.emit('new-user', {data});
  });

//when socket detects disconnection, splice from array
  socket.on('disconnect', function () {
    console.log('client disconnected');
    for (var i = users.length-1; i >= 0; i--) {
      if (users[i].id == socket.id) {
        users.splice(i, 1);
      }
    }
    socket.broadcast.emit('remove-user', {id: socket.id});
  });
});
