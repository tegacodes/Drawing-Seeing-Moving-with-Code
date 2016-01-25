// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function setup() {
  createCanvas(480, 720);
  stroke(0);
  fill(255);
}

function draw() {
  background(0);
  fill(0,0,255);
  ellipse(mouseX,mouseY,75,100);
}
