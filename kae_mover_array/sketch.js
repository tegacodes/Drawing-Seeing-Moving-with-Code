// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var noiseScale=0.02;
var m;
// var f;
var movers = [];
// var fireflies = [];

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 300; i++) { // go through array
      movers[i] = new Mover(random(1),random(640),random(360)); // new mover object
  }
  // for (var j = 0; j < 30; j++) { // go through array
  //     fireflies[j] = new Firefly(random(1),random(640),random(360)); // new mover object
  // }
}

function draw() {
  // background(255,10);
  // for (var x=0; x < width; x++) {
  //   var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
  //   stroke(noiseVal*255);
  //   line(x, mouseY+noiseVal*80, x, height);
  // }

for(var i=0; i<movers.length;i++){
var c = 0.01; //friction constant
var friction = movers[i].velocity.copy();
friction.mult(-1); //reverse direction
friction.normalize();
friction.mult(c);


// var wind = createVector(noise(mouseX), 0);
var wind = createVector(noise(random(100)), 0);
var gravity = createVector(0,0.03);

movers[i].applyForce(wind);
movers[i].applyForce(gravity);
movers[i].applyForce(friction)


movers[i].update();
movers[i].display();
movers[i].checkEdges();

 }

 // for(var j=0; j<fireflies.length;j++){
 // var c = 0.01; //friction constant
 // var friction = fireflies[i].velocity.copy();
 // friction.mult(-1); //reverse direction
 // friction.normalize();
 // friction.mult(c);
 //
 //
 // // var wind = createVector(noise(mouseX), 0);
 // var wind = createVector(noise(random(100)), 0);
 // var gravity = createVector(0,0.03);
 //
 // movers[i].applyForce(wind);
 // movers[i].applyForce(gravity);
 // movers[i].applyForce(friction)
 //
 //
 // movers[i].update();
 // movers[i].display();
 // movers[i].checkEdges();
 //
 //  }
}
