// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill
var c = 40;
var amplitude = 100;
var period = 120;
function setup() {
  createCanvas(480, 480);

}

function draw() {
  var x = amplitude * sin(TWO_PI * frameCount / period);
var color = c*x;
  fill(color,255,255);
  ellipse(width/2,height/2,200,200);

}
