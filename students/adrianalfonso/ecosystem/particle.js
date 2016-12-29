var Particle = function() {
  this.position = createVector(random(-1000,width+1000),random(height/3,height));
  this.noff = createVector(random(100),random(100));

  this.display = function() {
    strokeWeight(2);
    fill(207,random(50,85));
    noStroke();
    ellipse(this.position.x, this.position.y, 1,1);
    ellipse(this.position.x/2, this.position.y, 2,2);
      ellipse(this.position.x*2, this.position.y, 3,3);
      ellipse(this.position.x+50, this.position.y+5, 1,1);
      ellipse(this.position.x/2.5, this.position.y+10, 2.5,2.5);
        ellipse(this.position.x*2.5, this.position.y+15, 3.3,3.3);
  }

  this.walk = function() {
    this.position.x = map(noise(this.noff.x),0,1,-1000,width+2000);
    this.position.y = map(noise(this.noff.y),0,1,height/3,height);
    this.noff.add(0.00008,0.00009,0);
  }
}
