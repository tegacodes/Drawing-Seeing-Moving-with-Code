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
  this.acceleration = createVector(0,0);
  this.topspeed = 10;


  //Functions-------------------------------------

  this.update = function(){

    //CONDITIONAL STATEMENT - if key is pressed increase y of acceleration
    if(keyIsPressed===true){
      if(keyCode==UP_ARROW){
        //increase the y of my acceleration if ke is pressed
        this.acceleration.y=this.acceleration.y-0.01;
      }else if (keyCode==DOWN_ARROW){
        //reduce acceleration
        this.acceleration.y=this.acceleration.y +0.01;

      }

    }
    if(this.velocityX.y<0){
      this.velocity.y=0;
    }
    println(this.acceleration.y);

    //ADD ACC TO VEL
    // velocityX=velocityX+accerationX;
    this.velocity.add(this.acceleration); //add acceleration to velocity


    this.velocity.limit(this.topspeed);

    //ADD VEL TO POSITION
    // x=x+speedX;   y=y+speedY;
    this.position.add(this.velocity);  //add the velocity to position
  }

  //display the mover------------------------------------
  this.display = function(){
    stroke(0);
    fill(175);
    ellipse(this.position.x, this.position.y, 16,16);
  }

  //check boundaries -----------------------------------------
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
