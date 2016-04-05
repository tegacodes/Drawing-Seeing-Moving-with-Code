//SOCKET EVENTS

var socket = io.connect(window.location.origin);

//Whenever the server emits 'new-spot', make a new object with the attributes received.
//The push this new spot onto the array
socket.on('new-spot', function (data) {
  var spot = new Spot(data.size, data.x, data.y, data.color);
  spots.push(spot);
});

//Whenever the server emits all-spots, take attributes and make new object,
//then push onto the array.
socket.on('all-spots', function(allspots) {
  for (var i = 0; i < allspots.length; i ++) {
    var data = allspots[i];
    var spot = new Spot(data.size, data.x, data.y, data.color);
    spots.push(spot);
  }
});



var spots = [];
var myColor;

function setup() {
  colorMode(HSB);
  createCanvas(800, 800);
  //make a random color.
  myColor = random(255);


}

function draw() {
  background(0);

  //run through spots array
  for (var i = 0; i < spots.length; i++){
    //display each spot.
    spots[i].display();
  }

  println("length:"+spots.length);
}

function makeSpot(){
  //if pressed add new ellipse
  var newSpot = new Spot(30, mouseX, mouseY, myColor);
  spots.push(newSpot);
  println("spot!");
//emit the attributes from the object you are sending (you can not send the functions)
  socket.emit('new-spot', {size:newSpot.size, x: newSpot.x, y:newSpot.y, color:newSpot.color});  //*******************SAM can i do this???? does this send an spot obejct?

}

function mousePressed() {
  //set color to random color
  makeSpot();
}


function mouseDragged() {
  //set color to random color
  makeSpot();
}

//*************** This is a different way to write a class in javascript *************
//it's fine to do it the other way
function Spot(size, x, y, color) { //it has 3 arguments size, x and y
  this.size = size;
  this.x = x;
  this.y = y;
  this.color=color;

}

//and a function called 'make' which draws it
Spot.prototype.display = function() {
  fill(this.color, 255, 255);
  ellipse(this.x,this.y,this.size,this.size);

}
