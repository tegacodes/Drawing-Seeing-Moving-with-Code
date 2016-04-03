var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


var boids = [];

server.listen(process.env.PORT || 5000);

app.use(express.static('public'));
// app.get('/', function (req, res) {
//   res.sendfile(__dirname + '/public/index.html');
// });

io.on('connection', function (socket) {
  socket.emit('all-boids', boids);
  socket.on('new-boid', function (data) {
    console.log(data);
    boids.push(data)
    socket.broadcast.emit('new-boid', data);
  });
});
