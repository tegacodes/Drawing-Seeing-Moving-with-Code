//Virtually identical to the biggies, but smaller, and not attractive.
//Also, each small has a randomized pan for their notes.
function Small(m, x, y) {
  this.mass = m;
  this.position = createVector(x, y);
  this.r = m;
  this.trans = random(0, 200);
  this.transSpeed = 4;
  this.pan = random(-1, 1);

  this.fade = function() {
    this.trans += this.transSpeed;
    if (this.trans > 255 || this.trans <= 0) {
      this.transSpeed = this.transSpeed * -1;
    }

//If this.blue is close to maxed out, a different tone plays.
    if (this.trans >= 255 && b.blue > 250) {
      xylAHi.play();
      xylAHi.pan(this.pan);
  } else if (this.trans >= 255 && b.blue <250) {
    xylGHi.play();
    xylGHi.pan(this.pan);
    }
}
  this.display = function() {
    for (var i = 0; i < 8; i++) {
      noFill();
      stroke(240, this.trans - 30 * i);
      strokeWeight(5 + this.rad / 2);
      this.rad = i * this.r;
      this.speed = this.rad / 4;
      ellipse(this.position.x, this.position.y, this.rad + this.speed * i, this.rad + this.speed * i);
    }
  }
}
