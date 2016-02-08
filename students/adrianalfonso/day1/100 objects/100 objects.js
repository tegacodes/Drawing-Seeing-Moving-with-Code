
var numCircles = 100;
var x = [];
var y = [];
var speed = [];
var f= 0;
var diameter=0;

var setup = function() {
  createCanvas(600,600);


  for (var i=0; i < numCircles; i++) {
    x[i] = i; // Set initial position
    y[i] = random(height); // Set initial position
    speed[i] = 0.1 + random(5); // Set initial speed
  }

};

var draw = function() {
fill(f,f,f,f);


  for (var i = 0; i < x.length; i++) {
    x[i] += speed[i]; // Update ellipse position
    if (x[i] > width) { // If off the right,
      x[i] = 0; // return to the left
    }
    ellipse(x[i], y[i], i-diameter, i-diameter); // Draw ellipse
    diameter= diameter + .01;//change diameter
    if (diameter>100+f){//reset diameter
      diameter=0;
    }
    translate(random(-.5,.5),random(-.5,.5));//add visual interest to tail
    rotate(mouseX/31200);
    stroke(f-i);
  }
};

var mousePressed = function() {
  f = f + 20;//change values of various properties
  if (f>255){
    f=0;
    i=0;
  }
};
