
var movers = [];

var attractor;
var bg;
var y = 0;


function setup() {

  createCanvas(680, 680);
  for (var i = 0; i < 700; i++) {
    movers[i] = new Mover(random(0.1, 2), random(width), random(height));
    
  }
  attractor = new Attractor();


}


function draw() {
  background(55,80,100);


  attractor.display();

  for (var i = 0; i < movers.length; i++) {
    var force = attractor.calculateAttraction(movers[i]);
    movers[i].applyForce(force);

    movers[i].update();
    movers[i].display();

//check attractor is not colliding with movers[i]
    attractor.collide(movers[i]);
    if(attractor.bang==true){
      movers.splice(i,1);
      attractor.bang=false;
    }
  }
}

function mouseMoved() {
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  attractor.handleHover(mouseX, mouseY);
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  attractor.stopDragging();
}




