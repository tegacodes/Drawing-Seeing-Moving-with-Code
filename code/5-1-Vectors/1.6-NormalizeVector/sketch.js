function setup() {
  createCanvas(640,360);
};

function draw() {
  background(255);

  //set up two vector variables.
  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width/2, height/2);

  //subtract center from mouse.
  //(or what direction is the mouse from the center?)
  mouse.sub(center);

  //normalize - aka get the unit direction.
  mouse.normalize();
  //then scale up by 50 so we can see it
  mouse.mult(50);

  translate(width/2, height/2);
  line(0,0,mouse.x,mouse.y);

};
