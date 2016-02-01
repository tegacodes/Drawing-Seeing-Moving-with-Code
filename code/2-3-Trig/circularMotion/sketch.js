var angleVel=0.05; //sets how fast we are going around the circles
var angle=0; //angle variable

function setup(){
  createCanvas(400,450);
  background(255);
  smooth();
}

function draw(){
  stroke(200);
  noFill(0);
  rect(0,0,399,449); //edge rectangle

  fill(0);
  //generate x and y of each ellipse.
  var x = map(cos(angle), -1,1,width/4,3*width/4); //map cos(a) to the range width/4 -> 3*width/4
  var y = map(sin(angle), -1,1,height/4,3*height/4); //map sin(a) to the range height/4 -> 3*height/4
  strokeWeight(1);
  stroke(237,34,93);
  fill(0,50);
  ellipse(x,y,30,30); //draw the ball at each value of x
  angle = angle+ angleVel; //increase the angle by the angular velocity (this will change the y for each ball)
}
