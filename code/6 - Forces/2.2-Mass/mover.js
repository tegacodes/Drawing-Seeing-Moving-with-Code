//MOVER CLASS//
function Mover() {
  //initial values
  this.mass=random(0.5,4);
  this.position = createVector(random(width),0);
  this.velocity = createVector(0,0);
  this.acceleration = createVector(random(-1,1),-1);

  //Newton's second law with mass.
  this.applyForce = function(f){

    //force = force/mass.
    var f = p5.Vector.div(f, this.mass*.5);
    this.acceleration.add(f);
  }


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
    ellipse(this.position.x, this.position.y, this.mass*20, this.mass*20);
  }

  //check boundaries
  this.checkEdges=function(){
    if(this.position.y<0){
      this.velocity.y*=-1;
      this.position.y=0;
    }else if(this.position.y>height){
      this.velocity.y*=-1;
      this.position.y=height;
    }

    if(this.position.x<0){
      this.velocity.x*=-1;
      this.position.x=0;
    }else if(this.position.x>width){
      this.velocity.x*=-1;
      this.position.x=width;
    }
  }


}
