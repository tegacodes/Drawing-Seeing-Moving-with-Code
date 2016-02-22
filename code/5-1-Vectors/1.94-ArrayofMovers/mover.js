//MOVER CLASS//
function Mover() {
  this.position = createVector(random(width),random(height));
  this.velocity = createVector();
  this.acceleration = createVector();
  this.topspeed = 5;

  //Functions ---------------
  this.update = function() {

    var mouse = createVector(mouseX, mouseY);
    //STEP 1
    //Use the static method to assign acceleration the value of the mouse subtracted from
    //position. ie get the difference between them.
    this.acceleration = p5.Vector.sub(mouse,this.position);

    //STEP 2: Either normalize - > reduce to just this direction.
    // this.acceleration.normalize();

    //STEP 3 & 4: And scale up to 0.2
    // this.acceleration.mult(0.2);
    this.acceleration.setMag(0.2); //or do in one step - does the same as normalize and then multiply
    println("acceleration:"+this.acceleration);
    //move car with velocity
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);  //add the velocity to position
    this.velocity.add(this.acceleration); //add acceleration to velocity
  }

  //display the mover ---------------
  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    rect(this.position.x, this.position.y, 20, 10);
  }
  //check edges for x ---------------
  this.checkEdges=function(){
    if(this.position.x>width){
      this.position.x=0;
    }else if(this.position.x<0){
      this.position.x=width;
    }
    //check boundaries for y
    if(this.position.y>height){
      this.position.y=0;
    }else if (this.position.y<0){
      this.position.y=height;
    }
  }


}
