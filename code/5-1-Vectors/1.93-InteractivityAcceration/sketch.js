/* Make movers accelerate towards the mouse

1. Calculate a vector that points from the object to the target location (mouse)
2. Normalize that vector (reducing its length to 1)
3. Scale that vector to an appropriate value (by multiplying it by some value)
4. Assign that vector to acceleration of the mover (ie accelerate the mover in that direction
//with that magnitude)

*/



var mover;

function setup() {
  createCanvas(640,360);
  mover = new Mover();
};

function draw() {
  background(255);
  mover.update();
  mover.checkEdges();
  mover.display();
};

//MOVER CLASS//
var Mover = function(){
  //Use vectors as our variables
  this.position = createVector(width/2, height/2);
  this.velocity = createVector();
  this.acceleration= createVector();
  this.topspeed = 5;

  //Functions ---------------
  this.update = function(){
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
  this.display = function(){
    stroke(0);
    fill(175);
    rect(this.position.x, this.position.y, 20,10);
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
};
