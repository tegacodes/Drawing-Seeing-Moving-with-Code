// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var m;

function setup() {
  createCanvas(640, 360);
  m = new Mover();
}

function draw() {
  background(51);




  m.update();
  m.display();
  m.checkEdges();

}
