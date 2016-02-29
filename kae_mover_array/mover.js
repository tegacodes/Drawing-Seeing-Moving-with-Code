// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var Mover = function(m,x,y) {
  this.mass = 1;
  this.position = createVector(m,x,y);
  this.velocity = createVector(0,0);
  this.acceleration = createVector(3.0, 1);

this.applyForce=function(force){
  var f = p5.Vector.div(force, this.mass);
  this.acceleration.add(f); //add to force.
}

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0); // set acceleration back to zero.

  };

  this.display = function() {
    // stroke(0);
    // strokeWeight(2);
    noStroke();
    fill(random(255), 127, 0);
    fill(random(255), random(127), 0);
    // fill(random(255, 127, 0));
    rect(this.position.x, this.position.y, random(4), random(4));
      ellipse(this.position.x, this.position.y, random(2), random(2));
  };

  this.checkEdges = function() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }
  };

};
