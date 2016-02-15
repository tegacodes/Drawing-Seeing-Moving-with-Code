var numCircles = 100;
var x = [];
var y = [];
var xSpeed = [];

var setup = function() {

  createCanvas(800, 400);
  strokeWeight(2);
  smooth();

  for (var i=0; i < numCircles; i++) {
    x[i] = (width/2) + random(-10,10);
    y[i] = random(height);

    if(i%2 == 0){
    xSpeed[i] = 0.5 + random(4);
  } else {
    xSpeed[i] = 0.5 - random(4);
  }
}
};

var draw = function() {

  background(80,150,255);

  for (var i = 0; i < x.length; i++) {

    x[i] += xSpeed[i];
    if (x[i] > width) {
      x[i] = 0;
      }

    if (mouseIsPressed == true) {
      if (mouseButton == LEFT) {
        xSpeed[i] += random(-2, 2);
      } else if (mouseButton == RIGHT){
        xSpeed[i] *= -1;
      }
    }
    
    fill(240,230,140, i+150);
    stroke(200,180,140);
    ellipse(x[i], y[i], 20, 20);
  }
};
