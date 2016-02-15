var diameter = 0;
var maxDiameter = 50;
var velocity = 1;

function setup() {
  createCanvas(1000, 400);
  smooth();
  noStroke();
  frameRate(30);
  noCursor();

};

function draw() {

  var x = winMouseX/4;
  var y = winMouseX/8;
  var b = random(x+10,255);
  diameter = maxDiameter * sin(frameCount/y);

  background(200, y+100, x+50);
  fill(b,b,100);
  for(var i = 0; i < 7; i ++){
  ellipse(mouseX,(50*[i])+50, diameter,diameter);
}

};
