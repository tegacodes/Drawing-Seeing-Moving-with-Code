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
  this.position = createVector(random(width), random(height)); //car position
  this.velocity = createVector(0, 0); //car velocity
  this.acceleration = createVector(0,-0.01); //car acceleration
  this.topspeed = 10;

  //Class Functions

  this.update = function(){

    //move car with velocity
    this.velocity.limit(this.topspeed); //limit is a PVector function
    this.position.add(this.velocity);  //add the velocity to position (starts as 0)

    if(keyIsPressed){
      if (keyCode === UP_ARROW) { //if key is pressed

        println("up");
        this.velocity.add(this.acceleration); //add acceleration to velocity


      }
      if(keyCode===DOWN_ARROW){ //if down is pressed
        // println("down");
        this.velocity.sub(this.acceleration); //subtract acceleration from velocity

      }
    }

  }

  //display the car
  this.display = function(){
    stroke(0);
    fill(175);
    rect(this.position.x, this.position.y, 10,20);
  }

  //check boundaries to make car appear back at the other side of the screen when it leaves
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
