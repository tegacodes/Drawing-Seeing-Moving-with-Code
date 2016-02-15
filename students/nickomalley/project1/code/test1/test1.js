var x1 = 200;
var x2 = 200;
var dx = 1;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(230);
  fill(30);
  ellipse(x1,50,20,20);
  ellipse(x2,350,20,20);
  stroke(30);
  strokeWeight(5);
  line(x1,50,x2,350);

  x1 = x1 + dx;
  if (x1 > 300) {
    dx = -1;
  }
  if (x1 < 200) {
    dx = 1;
  }

  x2 = x2 - dx;
  if (x2 < 100) {
    dx = 1;
  }
  if (x2 > 200) {
    dx = -1;
  }

}
