// Using a for loop to initialize values.
// Using a for loop to draw.
// Adapted from Getting Started with Processing.

var numCircles = 150;
var x = [];
var y = [];
var speed = [];
var value = 20;

var setup = function() {

  createCanvas(600, 400);
  strokeWeight(0);

  for (var i = 0; i < numCircles; i++) {
    x[i] = i; // Set initial position
    y[i] = random(height); // Set initial position
    speed[i] = .2 + random(15); // Set initial speed
  }
};

var draw = function() {

  background(50, 4);
  fill(value);

  for (var i = 0; i < x.length; i++) {

    x[i] += speed[i]; // Update ellipse position
    if (x[i] > width) { // If off the right,
      x[i] = 0; // return to the left
    }
    ellipse(x[i], y[i], 20, 20); // Draw ellipse
  }

}

function mousePressed() {
  if (value == 20) {
    value = 255;
  } else {
    value = 20;
  }
}