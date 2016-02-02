var x = 0;
var speed = 1;

function setup() {
  createCanvas (300,300);
}

function draw() {
  background (0);
  
    
  //
  stroke(0);
  fill(175);
  ellipse(x,100,32,32);
  
  x = x + speed;
  
  if ((x > width) || (x < 0)) {
    speed = speed * -1;
  }
}