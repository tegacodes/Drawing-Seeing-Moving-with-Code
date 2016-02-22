//MOVER CLASS//
function Balloon() {
  //initial values
  this.mass=2;
  this.position = createVector(random(width),height);
  this.velocity = createVector(0,-2);
  this.acceleration = createVector(0,-1);

  //apply force
  this.applyForce = function(f){


    this.acceleration.add(f);
  }

  //functions
  this.update = function(){
    // Set magnitude of acceleration
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  this.display = function() {
    stroke(0);
    strokeWeight(1);
    fill(255,0,0);
    ellipse(this.position.x, this.position.y, 20, 30);
  }

  //check boundaries
  this.checkTop=function(){
    if(this.position.y<0){
      this.velocity.y*=-0.8;
      this.position.y=0;
    }else if(this.position.y>height){
      this.velocity.y*=-0.8;
      this.position.y=height;
    }
  }


}
