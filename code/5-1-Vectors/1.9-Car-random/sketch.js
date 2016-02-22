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
  this.position = createVector(random(width), random(height));
  this.velocity = createVector(0, 0);

  this.topspeed = 10;

  //Functions

  this.update = function(){

    //random acceleration
    this.acceleration = p5.Vector.random2D(); //random normalised vector
    this.acceleration.mult(random(2));//scale vector randomly


    //move car with velocity
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);  //add the velocity to position
    this.velocity.add(this.acceleration); //add acceleration to velocity
  }





  //display the mover
  this.display = function(){
    stroke(0);
    fill(175);
    rect(this.position.x, this.position.y, 20,10);
  }

  //check boundaries
  this.checkEdges=function(){
    if(this.position.x>width){
      this.position.x=0;
    }else if(this.position.x<0){
      this.position.x=width;
    }

    if(this.position.y>height){
      this.position.y=0;
    }else if (this.position.y<0){
      this.position.y=height;
    }
  }
};
