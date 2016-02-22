// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-2: Bouncing Ball, with p5.Vector!
var position;
var velocity;

function setup() {
  createCanvas(640,360);
  background(0,100,105,100);
  position = createVector(70,140);
  velocity = createVector(2.5,7);
  smooth(); 
};

function draw() {
  // Add the current speed to the position.
  position.add(velocity);

  if ((position.x > width) || (position.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  if ((position.y > height) || (position.y < 0)) {
    velocity.y = velocity.y * -1;
  }

  // Display circle at x position
  stroke(0);
  strokeWeight(2);
  fill(120,100,100);
  ellipse(position.x, position.y, 4, 13);
  ellipse(position.x-100, position.y-100, 4, 13);
  ellipse(position.x+100, position.y+100, 4, 13);
};