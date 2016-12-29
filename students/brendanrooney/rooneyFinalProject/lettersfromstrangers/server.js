var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

var my_data = {0:[],1:[],2:[],3:[]}
var cur_idx = 0;
server.listen(process.env.PORT || 5000);


// console.log('obj:',obj);
//Routing
app.use(express.static('public'));

//Array for strings
var existingStrings = JSON.parse(fs.readFileSync('public/files/test.json', 'utf8'));
var anxiousStrings = {};
if(existingStrings){
  console.log(existingStrings);
  anxiousStrings = existingStrings;
}
else{
  console.log('Cant find file loading default');
    anxiousStrings = {"0":[],"1":[],"2":[],"3":[]}
}

//when server gets a call 'connection', we perform the function that follows it
io.sockets.on('connection', function (socket) {
  console.log("connected!");

  //Logs which button is selected. Will be used to determine which message to give.
  socket.on('button-choice', buttonChoice);
    function buttonChoice(choice){
      // cur_idx = choice['x']
      // console.log("Current choice!");
      // console.log(cur_idx);
      console.log(choice);
    };

  //when the client hears the anxious event
  socket.on('ax-button', function () {
    //send a string every time a client connects
    console.log("button! Sending:"+ anxiousStrings[0]);
    socket.emit('ax-reply', anxiousStrings[0]);
  });

  // when the client emits 'userInput', this listens and executes
  socket.on('ax-string', function (data) {

    console.log("data:",data);
    anxiousStrings[data.id].push(data.text)
    var file = 'public/files/test.json';
    fs.writeFileSync(file,JSON.stringify(anxiousStrings,null,2));
    });
});



//pushes data passed onto spots array
// anxiousStrings.push(data.text);

// for( var i=0; i < anxiousStrings.length;i++){
//   console.log("array: "+anxiousStrings[i]);
// }
  // var file = 'public/files/data.json'
  // var obj = {text: data.text}
  // jsonfile.writeFile(file, obj, {spaces: 2}, function(err) {
  //   console.error(err)
  // })
  // var file = 'test.json';
  // var obj = {text: anxiousStrings};
  // fs.writeFileSync(file,JSON.stringify(obj,null,2));
