
var movers = [];

function setup() {
  createCanvas(640,360);
  for (var i = 0; i < 20; i++) {
    movers[i] = new Mover();
  }
}

function draw() {
  background(51);
  for (var i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].display();

  }
}
