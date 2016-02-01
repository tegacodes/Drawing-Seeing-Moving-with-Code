var angleVel=0.05; //sets how fast we are going around the circles
var angle=0; //angle variable
var offset = 60;
var scalar = 2;

function setup(){
  createCanvas(120,120);
  background(255);
  smooth();
}

function draw(){
  stroke(200);
  noFill();
  rect(0,0,399,449); //edge rectangle

  fill(0);
  //generate x and y of each ellipse. You can also do this using offset and scalar rather than map.
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;

  strokeWeight(1);
  stroke(237,34,93);
  fill(0,50);
  ellipse(x,y,2,2); //draw the ball at each value of x
  angle = angle+ angleVel; //increase the angle by the angular velocity (this will change the y for each ball)
  scalar = scalar + angleVel;
}
