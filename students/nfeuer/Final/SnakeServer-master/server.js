var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// =============================================
//              Server Variables
// =============================================

var firm = [0,1]; //Holds previous direction
var user = true;
var snake = [[0, 0],[1, 0],[2, 0]]; //Default snake
var allColors = [[255,0,0],[255,0,0],[255,0,0]]; //Default snake colors
var allClients = []; //Actuve connection list
var userNames = []; //List of connected user names
var prime = true; //For 'host'

// ============================================
//                   Server
// ============================================

server.listen(process.env.PORT || 5000);

app.use(express.static('public'));

io.on('connection', function (socket) {

// ============================================
//             Emit on connection
// ============================================

  allClients.push(socket); //On connection add user to active user list
  userNames.push("The Monkey"); //Default user name until user submits new one
  if(allClients.indexOf(socket) == 0) {
    socket.emit('host', prime); //Check if user is first connection and make 'host'
  }
  socket.emit('hold', firm); //Update user's default direction
  console.log(firm);

// ============================================
//             Server Listeners
// ============================================

  socket.on('input name', function(data) { //Listen for when user submits their user name
    var index = allClients.indexOf(socket);
    var loc = data.col;
    var mess;
    if(data.nam === ""){ //If left input empty, leave default name
    } else {
      userNames.splice(index,1,data.nam); //Switch out deafult with input
    }
    mess = "User " + userNames[index] + " connected!!";
    socket.broadcast.emit('update messages', {mes:mess, col:loc});
  });

  socket.on('loaded', function() { //Listen for when user ready to get updated
    allClients[0].emit('new guy', allClients.indexOf(socket)); //Request info from 'host'
  }); //This was created to hopefully reduce the latency even more



  socket.on('host report', function(info) { //Listen for data update from 'host'
    var data = info.dir;
    var index = info.who; //Index of new user in list

    allClients[index].emit('serverQ', data); //Send the current queue to new user
    allClients[index].emit('server color', allColors); //Send color list to new user
  });

  socket.on('receiveB', function(info) { //Listen for snake body update
    var data = info.bod;
    var index = info.who;

    allClients[index].emit('current', data); //Update new user with current snake body
  });

  socket.on('target', function(loc) { //Listen for when user collects apple
    console.log(loc);
    allColors.push(loc); //Update color list

    socket.emit('locked', allColors); //Update the user who collected the apple the updated color list
    socket.broadcast.emit('locked', allColors); //Update all users with new list
  }); //This also reduced latency as the collector get the data at about the same time as the other users

  socket.on('keyEvent', function (data) { //Listen for key action data
    var directionX = data.dirX;
    var directionY = data.dirY;

    if(directionX != -firm[0] && directionY != -firm[1]) { //Check if incoming direction command is in opposite direction of previous command
      //This prevents the snake from being able to backtrack on itself
      socket.emit('add', {dirX:directionX,dirY:directionY}); //Send direction data back if valid
      socket.broadcast.emit('add', {dirX:directionX,dirY:directionY}); //Send direction data to rest of users
      firm[0] = directionX; //Holds direction of previous direction command
      firm[1] = directionY;
    }
  }); //This reduced a lot of latancy since less info needed to be sent and the server wouldn't need to hold the whole queue
  //The difficulty of the server holding the queue was that it would need to be constantly updated which required extra calls

  socket.on('notify', function(data) { //Updates the chat on key press
    var index = allClients.indexOf(socket);
    var note = userNames[index] + ":         " +data.com; //Gets user's name
    var loc = data.col;

    socket.emit('update messages', {mes:note,col:loc}); //Updates the chat
    socket.broadcast.emit('update messages', {mes:note,col:loc});
  });

  socket.on('check host', function() { //Check if this user is next to be made the 'host'
    if(allClients.indexOf(socket) == 0) {
      socket.emit('host', prime); //Migrate 'host' responsibilities to this user
    }
  });

// ============================================
//             Disconnect Event
// ============================================

  socket.on('disconnect', function() { //Listen for when a user disconnects
      console.log('Disconnected');

      var i = allClients.indexOf(socket);
      allClients.splice(i, 1); //Remove user from active connections list
      if(i == 0) { //Check if user was 'host'
        socket.broadcast.emit('new host'); //Request users to check if they are new 'host'
      }
   });

});
