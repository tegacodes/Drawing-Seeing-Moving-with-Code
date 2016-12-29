function Fly(dx, dy, dsize){
  this.x = dx;
  this.y = dy;
  this.size = dsize;
  this.noff = createVector(random(1000), random(1000));

  this.position = createVector();
  this.velocity = createVector();
  this.acceleration = createVector();
  this.topspeed = 5;

  this.update = function() {
    this.position.x = map(noise(this.noff.x), 0, 1, width/2, width);
    this.position.y = map(noise(this.noff.y), 0, 1, 0, height/2);
    this.noff.add(0.01, 0.01, 0);
  };
  this.display = function(){
image(fly,this.position.x,this.position.y,this.size,this.size);
  }
}