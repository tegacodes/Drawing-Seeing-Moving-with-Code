var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 5000);

//Routing
app.use(express.static('public'));

//Array for spots
var spots = [];

//when server gets a call 'connection', we perform the function that follows it
io.on('connection', function (socket) {
  //emits an event called all-spots to all connected clients, which is existing spots array.
  socket.emit('all-spots', spots);
  // when the client emits 'new-spot', this listens and executes
  socket.on('new-spot', function (data) {
    console.log(data);
    //pushes data passed onto spots array
    spots.push(data)
    //emits to other clients.
    socket.broadcast.emit('new-spot', data);
  });

  //when client emits 'kill-spot', this listens and executes
  socket.on('kill-spot', function (data) {
    console.log("data.index:"+data.index);

      spots.splice(data.index,1) //remove spot at index number
    //emits to other clients.
    socket.broadcast.emit('kill-spot', data);
  });

});
