var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 5000);

app.use(express.static('public'));

io.on('connection', function (socket) {
  socket.emit('connected', {msg: "You're connected!"});
  socket.on('message', function (data) {
    console.log(data);
    socket.broadcast.emit('message', data);
  });
});