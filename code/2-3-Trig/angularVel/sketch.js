
var angle=0; //start angle
var aVelocity= 0; //p5 interprets angle in radians but we can
var aAcceleration = 0.01; // use degrees if you convert (see line 15)

function setup(){
  createCanvas(640,360);
}

function draw(){
  background(255);
  stroke(200);
  strokeWeight(2);
  push();  //<------- makes a note of where the sketch grid is 
   translate(width/2,height/2); //translate the coordinate system to the center
   rotate(radians(angle)); //<--- radians() converts degrees to radians
  //then the rotate functions rotates the entire coordinate systems
  line(-50,0,50,0);  //coordinates therefore remain the same
  ellipse(50,0,8,8);
  ellipse(-50,0,8,8);

 pop();  //<-------- puts the origin or grid back to where it was when we called push
  aVelocity= aVelocity+aAcceleration; //increase velocity by acceleration
  angle = angle+aVelocity; //increase angle by velocity

rect(0,0,30,30);
}
