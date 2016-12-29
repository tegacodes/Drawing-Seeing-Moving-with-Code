
function Pen() {
  //THESE ARE YOUR VARIABLES FOR YOUR OBJECT
  this.position = createVector(random(width),random(height));
  this.velocity = createVector();
  this.acceleration = createVector();
  this.topspeed = 5;

  //FUNCTIONS FOR YOUR PENGUIN OBJECT
  this.update = function() {
    // Compute a vector that points from position to mouse
    var mouse = createVector(mouseX,mouseY);
    this.acceleration = p5.Vector.sub(mouse,this.position);
    // Set magnitude of acceleration
    this.acceleration.setMag(0.2);

    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
        //random acceleration
this.move = function(){
positionX = positionX + random(-0.2,.2);
positionY = positionY+ random(-0.5,.5);
  } 
  };


  this.display = function(positionX,positionY) {

//put your animation in here!!!!!!

this.position.x = positionX;
this.position.y = positionY;
positionX = positionX-1;
positionY = positionY-2;
 strokeWeight(0);
      //ICE
      fill(255);
      ellipse(200, 220, 1000, 700);

      //PENGUIN
      //body
      fill(128, 128, 128);
      rect(this.position.x-10, this.position.y-50, 170, 160, 200, 200, 50, 50);
      //inner body
      fill(255);
      rect(this.position.x+20, this.position.y, 110, 100, 90, 90, 50, 50);
      //arms
      fill(128, 128, 128);
      triangle(this.position.x+10, this.position.y-20, this.position.x-30,
       this.position.y+80, this.position.x+10, this.position.y+70);
        triangle(this.position.x+140, this.position.y-20, this.position.x+150, 
          this.position.y+70, this.position.x+180, this.position.y+80);
      //feet
      fill(255, 215, 0);
      ellipse(this.position.x+40, this.position.y+110, 40, 20);
      ellipse(this.position.x+110, this.position.y+110, 40, 20);
      //eyes
      fill(0);
      ellipse(this.position.x+30, this.position.y-10, 20, 20);
      ellipse(this.position.x+120, this.position.y-10, 20, 20);
      //beak
      fill(255, 215, 0);
      rect(this.position.x+50, this.position.y-10, 50, 20, 200, 200, 50, 50);

      //FISH
      fill(70, 70, 70);
      ellipse(this.position.x+300,this.position.y,100,50);
      triangle(this.position.x+330,this.position.y,this.position.x+380,
        this.position.y+20,this.position.x+380,this.position.y-20);
      fill(0);
      line(300,200,310,210);
};
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
  