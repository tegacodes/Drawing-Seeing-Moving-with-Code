//SOCKET EVENTS

var socket = io.connect(window.location.origin);

//Whenever the server emits 'new-user', client detects it and
//make a new spot.

socket.on('new-user', function (data) {
  var newSpot = new Spot(data.r, data.b, data.g, data.x, data.y, data.id);
  spots.push(newSpot);
});
//Whenever the server emits 'new-user', client detects it and
//splices out spot.
socket.on('remove-user', function (data) {
  for (var i = spots.length-1; i >= 0; i--) {
    if (spots[i].id == data.id) {
      spots.splice(i, 1);
    }
  }
});
//get user array and make a spot for each user
socket.on('all-users', function(users){
  for (var i = 0; i < users.length; i ++){
    var data = users[i];
    var newSpot = new Spot(data.r, data.g, data.b, data.x, data.y, data.id);
    spots.push(newSpot);
  }
})

var spots =[];

function setup() {
  colorMode(HSB);
  createCanvas(800, 800);
  var mySpot = new Spot(random(255), random(255), random(255), random(width), random(height), 0);
  spots.push(mySpot);
  //when setup runs, it emits a 'new user' call to the server 
  socket.emit('new-user', {r: mySpot.r, g: mySpot.g, b: mySpot.b, x: mySpot.x, y: mySpot.y});
}

function draw() {
  background(0);
  for(var i=0;i<spots.length;i++){
    spots[i].display();
  }
}

function Spot(r,g,b,x,y,id){
  this.r=r;
  this.g=g;
  this.b=b;
  this.x=x;
  this.y=y;
  this.id = id;
}

Spot.prototype.display = function(){
  fill(this.r,this.g,this.b);
  ellipse(this.x,this.y,30,30);

}
