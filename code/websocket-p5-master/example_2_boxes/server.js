var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var boxes = [];

server.listen(process.env.PORT || 5000);

app.use(express.static('public'));
// app.get('/', function (req, res) {
//   res.sendfile(__dirname + '/public/index.html');
// });
//

app.get('/jiggle/:amount', function(req, res) {
  var amount = req.params.amount;
  io.sockets.emit('jiggle', { jiggle: amount });
  res.send('new jiggle amount: ' + amount);
});

io.on('connection', function (socket) {
  socket.emit('all-boxes', boxes);
  socket.on('color-box', function (data) {
    console.log(data);
    boxes.push(data)
    socket.broadcast.emit('color-box', data);
  });
});
