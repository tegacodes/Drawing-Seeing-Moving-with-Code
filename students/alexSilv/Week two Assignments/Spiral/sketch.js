// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

var r =0;
var theta = 0;

function setup() {
  createCanvas(480, 480);
background(255);
}

function draw() {
  var x = r*cos(theta);
  var y = r *sin(theta);
  noStroke();
  fill(0);
  ellipse(x+width/2, y+height/2,16,16);

  theta += 0.01;
  r += 0.1;
}
