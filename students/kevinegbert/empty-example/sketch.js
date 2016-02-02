// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function setup() {
  createCanvas(700, 700);
  stroke(0);
  // fill(0,0,255);
  rectMode(CENTER);
}

function draw() {
  // background(255,0,0);
  rect(mouseX,mouseY,5,5);
  println("hello world");
}

function mousePressed(){
noFill();
ellipse(mouseX,mouseY,30,30);
}
