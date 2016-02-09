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
  background(random(255),5,10);
  fill(45,random(255),15);
  rect(mouseX,mouseY,75,100);
}
