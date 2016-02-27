
// Mover Class
function Mover() {
  this.position = createVector(width/2,height/2);
  this.velocity = createVector();
  this.acceleration = createVector(0, 0);
  this.topspeed = 10;

  this.update = function() {
    if (keyIsPressed === true){
      if(keyCode==UP_ARROW){
      this.acceleration.y=this.acceleration.y-0.01;
    }
    else if(keyCode==DOWN_ARROW){
      this.acceleration.y=this.acceleration.y+0.01;
    }
    }
    //velocityX=velocityX+acceleration
    this.velocity.add(this.acceleration); //add acceleration
    this.velocity.limit(this.topspeed);

    //ADD ACC TO VEL
    // x=x+speedX;   y=y+speedY
    this.position.add(this.velocity);  //add velocity
  }

  // display mover
  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.position.x, this.position.y, 48, 48);
  }

  // functions
  this.checkEdges = function() {

    if (this.position.x > width) {
      this.position.x = 0;
    }
    else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    }
    else if (this.position.y < 0) {
      this.position.y = height;
    }
  }

}
