// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var Mover = function(mass, x, y) {
  this.position = createVector(x, y);
  this.velocity = createVector(1, 0);
  this.acceleration = createVector(0, 0);
  this.mass = mass;
  this.bang=false;

  this.applyForce = function(force) {
    var f = p5.Vector.div(force,this.mass);
    this.acceleration.add(f);
  };

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 175);
    ellipse(this.position.x, this.position.y, this.mass*16, this.mass*16);
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



  this.collide = function(a){ //m is each of the mover objects
      if(dist(a.position.x,a.position.y,this.position.x,this.position.y)<(a.mass*8+this.mass)){

        this.bang =true;
        fill(255,0,0);
        // println("collision");

      }

      if(this.bang == true) {
        this.mass=this.mass+0.01;
        this.bang=false;
      }

    };
  }
