/*
https://vimeo.com/channels/learningp5js/139587732
*/

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0,0,0,3);
  robot(100, 100, 50);
  robot(280, 200, 150);
  robot(420, 100, 100);

}

function robot(x, y, diameter) {
  noStroke();
  fill(0, 200, 255);
  rect(x - 10, y, 20, 150);
  fill(255, 0, 200);
  // rectMode(CENTER);
  rect(x, y, diameter, diameter);
  fill(0,255,255);
  ellipse(x-10, y, diameter/2, diameter/2);
}