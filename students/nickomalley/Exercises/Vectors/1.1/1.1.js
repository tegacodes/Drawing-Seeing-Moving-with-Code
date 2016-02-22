// var x = 100;
// var y = 100;
// var xspeed = 1;
// var yspeed = 3.3;
var position;
var velocity;

function setup() {
  createCanvas(640,360);
  background(235);
  position = createVector(100,100);
  velocity = createVector(1,3.3);
};

function draw() {
  background(235);
  position.add(velocity);

  if ((position.x > width) || (position.x < 0)) {
    velocity.x = velocity.x * -1;
  };
  if ((position.y > height) || (position.y < 0)) {
    velocity.y = velocity.y * -1;
  };

  stroke(0);
  fill(50);
  ellipse(position.x,position.y,16,16);
};
