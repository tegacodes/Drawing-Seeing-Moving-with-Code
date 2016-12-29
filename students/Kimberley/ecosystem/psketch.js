
// Demonstration of the basics of motion with vector.
// A "Mover" object stores position, velocity, and acceleration as vectors
// The motion is controlled by affecting the acceleration (in this case towards the mouse)

var penguins = [];
var recPosition = 90;
var positionX = 100;
var positionY = 200;

function setup() {
  createCanvas(900,540);
  for (var i = 0; i < 20; i++) {
     penguins[i] = new Pen(); 
  }
}

function draw() {
background(135, 206, 250);
  for (var i = 0; i < penguins.length; i++) {
    penguins[i].update();
    penguins[i].display(positionX,positionY); 
    penguins[i].move();
  }
}

