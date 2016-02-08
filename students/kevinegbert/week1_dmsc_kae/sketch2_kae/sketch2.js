// Using a for loop to initialize values.
// Using a for loop to draw.
// Adapted from Getting Started with Processing.


var numCircles = 100;
var x = [];
var y = [];
var speed = [];

var setup = function() {

  createCanvas(700, 400);
  strokeWeight(0);

  for (var i=0; i < numCircles; i++) {
    x[i] = i; // Set initial position
    y[i] = random(height); // Set initial position
    speed[i] = 0.1 + random(5); // Set initial speed
  }

};

var draw = function() {
  
  background(0,10);
  
  for (var i = 0; i < x.length; i++) {
  
    x[i] += speed[i]; // Update ellipse position
    if (x[i] > width) { // If off the right,
      x[i] = 0; // return to the left
    }

if (mouseIsPressed)
    ellipse(x[i], y[i], 10, 10); // Draw ellipse
else
    fill(255,0,255);
    ellipse(x[i], y[i], 10, 10); // Draw ellipse
  }

  for (var i = 0; i < x.length; i++) {
   
    x[i] += speed[i]; // Update ellipse position
    if (x[i] > width) { // If off the right,
      x[i] = 0; // return to the left
    }


if (mouseIsPressed)
     y[i] = random(height); // Set initial position
else
    fill(0,255,255);
    rect(x[i], y[i], 10, 10); // Draw ellipse
  }


};


