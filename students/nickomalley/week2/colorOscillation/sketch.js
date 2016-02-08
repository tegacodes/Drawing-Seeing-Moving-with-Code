var r = 0;
var g = 0;
var b = 0;
var a = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(40);
  r = constrain(sin(a + PI)* 255,0,255); //sin varies from -1 to 1 and we multiply this by diamter/2.
  g = constrain(sin(a + PI/2)* 255,0,255);
  b = constrain(sin(a)* 255,0,255);
  noStroke();
  fill(r,g,b);
  ellipse(width/2,height/2,200,200);
  a = a + 0.02;
}
