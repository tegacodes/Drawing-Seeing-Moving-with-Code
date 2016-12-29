var Fly = function() {
  this.position = createVector(random(-100,width+100),random(0,height/2.5));
  this.noff = createVector(random(100),random(100));

  this.display = function() {
    strokeWeight(2);
    fill(random(65,255),random(0,255));
    noStroke();
    ellipse(this.position.x, this.position.y, random(2,3),random(2,3));
    fill(207,242,68,random(5,11));
    ellipse(this.position.x, this.position.y, random(1,4),random(1,4));
    fill(207,242,68,random(2,9));
    ellipse(this.position.x, this.position.y, random(5,7),random(5,7));
    fill(207,242,68,random(0,10));
    ellipse(this.position.x, this.position.y, random(7,14),random(7,14));
  }

  this.walk = function() {
    this.position.x = map(noise(this.noff.x),0,1,-1000,width+1000);
    this.position.y = map(noise(this.noff.y),0,1,1,height/2.5);
    this.noff.add(0.001,0.008,0);
  }
}
