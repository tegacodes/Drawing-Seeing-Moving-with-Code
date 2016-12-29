//The vehicles have a lot going on.
//It takes arguments for mass, starting x position, and starting y position.
//Each of this is slightly randomized.
//The mass affects not only the size of the vehicles, but the effect that
//friction and other factors play.
//For their movement, I wanted a floaty, spacey type of motion.

function Vehicle(m, x, y) {
  this.mass = m;
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(0, -2);
  this.position = createVector(x, y);
  this.r = m * 6;
  this.maxspeed = m;
  this.maxforce = 0.1;
//redLow changes depending on the amount of natural births that occur.
//It simply acts as the lower limit for the random red value.
  this.redLow = 80;
  constrain(this.redLow, 0, 255);
  this.red = random(this.redLow, 255);
  this.green = random(100, 255);
  this.blue = random(0, 150);
  this.fitness = 0;
  this.trans = random(100, 200);
  this.transSpeed = 1.2;

  this.isDead = function() {

    if (this.trans < 0.0) {
      return true;
      } else {
      return false;
    }
  }

//The fade function controls not only how the vehicles look, but how they sound
//and how they live. When trans = 255, they emit a note, and when it is 0, they
//die of old age.
  this.fade = function() {
    this.trans += this.transSpeed;
    if (this.trans > 255 || this.trans < 0) {
      this.transSpeed *= -1;
    }
    if (this.trans >= 255) {
        xylC.play();
    }
  }

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }


  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }
//A pretty standard arrival/steering pair. The vehicles seek both the center
//of the Biggie and each other.
  this.arrive = function(target) {
    var desired = p5.Vector.sub(target, this.position);
    var d = desired.mag();
    if (d < 100) {
      var m = map(d, 0, 100, 0, this.maxspeed);
      desired.setMag(m);
    } else {
      desired.setMag(this.maxspeed);
    }

    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);
    this.applyForce(steer);
  }
//Collision detection.
  this.collide = function(m) {
    if (dist(m.position.x, m.position.y, this.position.x, this.position.y) < (m.mass * 3 + this.mass * 3)) {
      this.bang = true;
      //this.c = color(255, 0, 0);

    } else {
      //this.c = color(255, 127);
      this.bang = false;
    }
  }

  this.display = function() {
//The triangular part of the vehicles. Very similar to Shiffman's.
    var theta = this.velocity.heading() + PI / 2;
    fill(this.red, this.trans - 50);
    strokeWeight(1);
    push();
    translate(this.position.x, this.position.y);
    rotate(theta);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);
    pop();
//The echoes. Basically, every iteration of the for loop adds a new ring
//with new transparency values. The color of each vehicle is randomized.
    for (var i = 0; i < 8; i++) {
      noFill();
      stroke(this.red, this.green, this.blue, this.trans - 30 * i);
      strokeWeight(5 + this.rad / 2);
      this.rad = i * this.r / 2;
      this.speed = this.rad / 4;
      ellipse(this.position.x, this.position.y, this.rad + this.speed * i, this.rad + this.speed * i);
    }
  };
}
