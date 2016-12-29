//Biggie is pretty similar to the vehicle in terms of display,
//but only has an echo for a body.
//It provides a drone of the root note, C (or occasionally F/A), and acts as an attractor.

function Biggie(m, x, y) {
  this.mass = m;
  this.position = createVector(x, y);
  this.r = m * 4;
  this.trans = random(100, 200);
  this.transSpeed = 3;
  this.blue = 50;
  constrain(this.blue, 0, 255);

  this.fade = function() {
    this.trans += this.transSpeed;
    if (this.trans > 255 || this.trans <= 0) {
      this.transSpeed = this.transSpeed * -1;
    }

//If this.blue is close to maxed out, a different tone plays.
    if (this.trans >= 255 && this.blue < 200 && this.blue > 40) {
      xyl.play();
    } else if (this.trans >= 255 && this.blue > 200) {
      xylFBow.play();
    } else if (this.trans >= 255 && this.blue < 40) {
      xylABow.play();
    }
  }

  this.display = function() {
    for (var i = 0; i < 8; i++) {
      noFill();
      stroke(80, 80, this.blue, this.trans - 30 * i);
      strokeWeight(5 + this.rad / 2);
      this.rad = i * this.r;
      this.speed = this.rad / 4;
      ellipse(this.position.x, this.position.y, this.rad + this.speed * i, this.rad + this.speed * i);
    }
  }
};
