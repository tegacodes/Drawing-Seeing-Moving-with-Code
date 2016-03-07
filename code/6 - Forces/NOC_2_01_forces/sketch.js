// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var movers = [];
var n = 5;

function setup() {
  createCanvas(640, 360);

  for(var i =0;i<20;i++){ //got through array
    movers[i] = new Mover(random(0.5,3),random(0,width), 0); //new mover object into every spot of array
  }
}

function draw() {
  background(51);

//USE PERLIN NOISE TO VARY THE WIND....

  for(var i=0;i<movers.length;i++){

    var c = 0.05 ; //friction constant
    var friction = movers[i].velocity.copy();
    friction.mult(-1); //reverse the direction
    friction.normalize(); //we only want the direction and not magnitude
    friction.mult(c);



    var gravity = createVector(0,0.3*movers[i].mass);
    var wind = createVector(noise(n)-0.5, 0);
    n=n+0.001;
    println(noise(n));

    //call functinos one every element of array
    movers[i].applyForce(wind);
    movers[i].applyForce(gravity);
movers[i].applyForce(friction);

    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
}
