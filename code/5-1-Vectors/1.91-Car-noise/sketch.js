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

  this.topspeed = 5;
  this.tx=random(0,500);
  this.ty=random(0,500);

  //Functions
  this.update = function(){

    this.acceleration = createVector(map(noise(this.tx),0,1,0,20),map(noise(this.ty),0,1,0,20));


    //move car with velocity
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);  //add the velocity to position
    this.velocity.add(this.acceleration); //add acceleration to velocity
    this.tx+=0.01;
    this.ty+=0.01;
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
