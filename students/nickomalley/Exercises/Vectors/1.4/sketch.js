var m;

function setup() {
  createCanvas(640,330);
  m = new Mover();
};

function draw() {
  background(200);

  m.update();
  m.edges();
  m.display();
};


function Mover() {
  var location;
  var velocity;
   function mover(){
     location = createVector(width/2,height/2);
     velocity = createVector(1,3);
   };


this.update = function() {
  location.add(velocity);
};

this.edges = function() {
  if (location.x > width) location.x=0;
  if (location.x < 0) location.x=width;
  if (location.y > height) location.y=0;
  if (location.y < 0) location.y=height;
};

this.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(location.x,location.y,48,48);
};
};
