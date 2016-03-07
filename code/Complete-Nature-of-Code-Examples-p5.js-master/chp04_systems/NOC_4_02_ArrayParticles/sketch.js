// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var particles = [];

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);
  //adding a particle object to our empty arrays...
  particles.push(new Particle(createVector(width/2, 50)));

  // Looping through backwards to delete
  for (var i = particles.length-1; i >= 0; i--) {
    var p = particles[i];
    p.run();
    if (p.isDead()) {
      //remove the particle
      particles.splice(i, 1);
    }
  }

  println(particles.length);

}
