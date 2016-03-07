// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Child class constructor
var Confetti = function(position) {
  Particle.call(this, position); //<<<<-------- take particle object as parent

  // Override the display method
  this.display = function(){
    rectMode(CENTER);
    fill(127, this.lifespan);
    stroke(0, this.lifespan);
    strokeWeight(2);
    push();
    translate(this.position.x, this.position.y);
    var theta = map(this.position.x, 0, width, 0, TWO_PI * 2);
    rotate(theta);
    rect(0, 0, 12, 12);
    pop();
  };
};

// Inherit from the parent class
Confetti.prototype = Object.create(Particle.prototype); //<---- create confetti object from particle prototype
Confetti.prototype.constructor = Confetti; //<------ use the constructor above instead of the particle one.
