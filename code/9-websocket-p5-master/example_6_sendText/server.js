var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 5000);

//Routing
app.use(express.static('public'));

//Array for strings
var anxiousStrings = [];
anxiousStrings[0] = "hello world";


//when server gets a call 'connection', we perform the function that follows it
io.on('connection', function (socket) {
console.log("connected!");


  // when the client here the anxious event
  // socket.on('anxious-button', function (data) {
  //   //send a string every time a client connects
  //
  //
  // });
socket.emit('anxious-reply', anxiousStrings[0]);
  // when the client emits 'userInput', this listens and executes
  socket.on('anxious-string', function (data) {

    console.log("data:"+data);
    //pushes data passed onto spots array
    anxiousStrings.push(data)
      console.log("array"+anxiousStrings);

  });
});
