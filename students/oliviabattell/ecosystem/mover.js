

var Mover = function(mass, x, y) {
  this.position = createVector(x, y);
  this.velocity = createVector(random(100), random(100));
  this.acceleration = createVector(0.01, .01);
  this.mass = mass;
  this.topspeed = 8;


  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);

     // vector flock to mouse 
    var mouse = createVector(mouseX, mouseY);
    this.acceleration = p5.Vector.sub(mouse, this.position);
    // magnitude of acceleration
    this.acceleration.setMag(.19);
  };

  this.display = function() {
    noFill();
    strokeWeight(3);
    stroke(225,225,225,100);
    //left wing
    ellipse(this.position.x-8, this.position.y, 9, 4);
    //right wing
    ellipse(this.position.x+8, this.position.y, 9, 4);
    fill(200, 200, 0);
    noStroke();
    //body
    ellipse(this.position.x, this.position.y, 7, 7);
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
