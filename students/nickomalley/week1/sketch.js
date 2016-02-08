// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(0);
  fill(230);
}

function draw() {
  background(200);
  rect(mouseX,mouseY,50,50);
}

