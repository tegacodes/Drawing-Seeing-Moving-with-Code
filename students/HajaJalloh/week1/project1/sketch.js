// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function setup() {
  createCanvas(480, 270);
  stroke(0);
  fill(0,0,255);
}

function draw() {
  background(255,0,0);
  rect(mouseX,mouseY,75,100);
}
