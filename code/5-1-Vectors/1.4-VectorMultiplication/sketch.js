function setup() {
  createCanvas(640,360);
};

function draw() {
  background(255);
  var mouse = createVector(mouseX,mouseY);
  var center = createVector(width/2,height/2);
  mouse.sub(center);
  mouse.mult(.5);
  line(0,0,mouse.x,mouse.y);

};
