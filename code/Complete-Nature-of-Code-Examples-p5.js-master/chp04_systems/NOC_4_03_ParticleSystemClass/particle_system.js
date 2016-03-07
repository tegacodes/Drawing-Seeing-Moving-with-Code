// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var ParticleSystem = function(position) { //give it a location
	this.origin = position.get(); //put the vector into origin
	this.particles = []; //make an empty array

  this.addParticle = function() {
  	this.particles.push(new Particle(this.origin)); //push new particle to the end.
  };

  this.run = function() {
  	for (var i = this.particles.length-1; i >= 0; i--) { //go through backwards
      var p = this.particles[i]; // get each one
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1); //remove if dead
      }
    }
  };
};
