// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
var bugs = []; // array of Jitter objects




// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 5;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}
var Shaker = function(mass, x, y) {
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.mass = mass;
  this.eat=false;

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
    fill(0,0,255);
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
      if(dist(a.position.x,a.position.y,this.position.x,this.position.y)<(a.mass*8+this.mass*8)){

        this.eat =true;

        // println("collision");

      }

      if(this.eat == true) {


        this.eat=false;
      }

    };
  }
