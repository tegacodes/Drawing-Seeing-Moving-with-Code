// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-3: Vector subtraction
var position;
var velocity;

function setup() {
  createCanvas(640, 360);
  position = createVector(70, 140);
  velocity = createVector(2.5, 7);
};

function draw() {
  background(0,100,105,10);

  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width / 2, height / 2);
  mouse.sub(center);

  translate(100, 100); // sets "center" point
  strokeWeight(4);
  stroke(255);
  line(0, 0, mouse.x, mouse.y);

};