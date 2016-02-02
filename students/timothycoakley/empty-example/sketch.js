// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function setup() {
  createCanvas(480, 270);
  stroke(150);
  fill(25,26,27);
}

function draw() {
  background(255,0,0);
  ellipse(mouseX,mouseY,75,100);
}
