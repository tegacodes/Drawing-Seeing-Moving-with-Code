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
  this.acceleration = createVector(-0.001,0.01);
  this.topspeed = 10;

  //Functions

  this.update = function(){

    this.velocity.add(this.acceleration); //add acceleration to velocity
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);  //add the velocity to position
  }

  //display the mover
  this.display = function(){
    stroke(0);
    fill(175);
    ellipse(this.position.x, this.position.y, 16,16);
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
