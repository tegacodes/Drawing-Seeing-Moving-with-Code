// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var ParticleSystem = function(position) { //object is passed position vector
	this.origin = position.get(); //put it in origin
	this.particles = []; //one array for anything that is a particle or a particle child

  this.addParticle = function() {
    var r = random(1);
    if (r < 0.5) { //select via probability
      this.particles.push(new Particle(this.origin));
    } else {
      this.particles.push(new Confetti(this.origin));
    }
  };

  this.run = function(){
  	for (var i = this.particles.length-1; i >= 0; i--) { //go backwards through array
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1); //remove dead particles
      }
    }
  };
};
