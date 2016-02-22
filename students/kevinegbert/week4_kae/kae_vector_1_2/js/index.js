// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-2: Bouncing Ball, with p5.Vector!
var position; //
var velocity; // 

var v1;
var v2;


function setup() {
  createCanvas(1000,1000); //
  background(0,100,105,100); //

  position = createVector(70,140); //
  velocity = createVector(2.5,7); //

  v1 = createVector(900,140);
  v2 = createVector(-3.4,1);
  smooth(); 
};

function draw() {

  fox();
  turtle();

textSize(320);
noStroke();
fill(255);
s = "fox/turtles";
text(s, 150, 500, 700, 800); // Text wraps within text box
};

function fox(){

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
  ellipse(position.x, position.y, 4, 48);
  ellipse(position.x-100, position.y-100, 4, 48);


};

function turtle(){

  // Add the current speed to the position.
  v1.add(v2);

  if ((v1.x > width) || (v1.x < 0)) {
    v2.x = v2.x * -1;
  }
  if ((v1.y > height) || (v1.y < 0)) {
    v2.y = v2.y * -1;
  }

  // Display circle at x position
  stroke(0);
  strokeWeight(2);
  fill(120,100,100, 11);
  rect(v1.x, v1.y, 40, 48);


};

// function keyPressed(){
// 'a' = background(255);
// }