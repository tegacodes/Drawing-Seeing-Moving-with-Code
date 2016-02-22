

// var nFramesInLoop = 10; // For lenticular export, REMEMBER this should be 10 to generate 10 frames.
// var nElapsedFrames;
// var bRecording;
var x = 0;
var angle=0; //start angle
var aVelocity= 4; //p5 interprets angle in radians but we can
// var aVelocity= 23; //p5 interprets angle in radians but we can
var aAcceleration = 0; // use degrees if you convert (see line 15)
var r = 10; //radius of oscillation
var angleVel=-1; //sets how fast we are going around the circles
var angle=0; //angle variable
var offset = 200; //offsets to center point

function setup(){
  createCanvas(1200,1200);
  smooth();
//   bRecording = false;
//   nElapsedFrames = 0;
//   frameRate(nFramesInLoop);
}

function draw(){
  background(100,0,170,1);
  // noStroke();
  stroke(255);
  noFill();

  push(); // makes a note of where the sketch grid is
  translate(width/2,height/2); //translate the coordinate system to the center
  rotate(radians(angle)); //<--- radians() converts degrees to radians
  //then the rotate functions rotates the entire coordinate systems
  // line(-50,0,50,0);  //coordinates therefore remain the same
    rectMode(CENTER);
    rect(90,0,8,8);
    rect(45,0,8,8);
    ellipse(45,0,28,28);
    rect(180,0,8,8);
    rect(360,0,8,8);
    ellipse(360,0,48,48);
    fill(255,255,255,1);
    var x = offset/4 + cos(angle) * r;
    var y = offset/4 + sin(angle) * r;
    // var j = offset/2 + cos(angle) * r;
    // var s = offset/2 + sin(angle) * r;
    rect(x,y,10,10);
    var j = offset/2 + cos(angle) * r;
    var s = offset/2 + sin(angle) * r;
    rect(j,s,10,10);
    var b = offset + cos(angle) * r;
    var k = offset + sin(angle) * r;
    rect(b,k,70,70);
    var h = offset+100 + cos(angle) * r;
    var g = offset+100 + sin(angle) * r;
    rect(h,g,50,50);
    triangle(h,g,x,y,j,s,b,k);
    // textSize(32);
    // text("∆∑®†¥øπåß", 400, 30);
    ellipse(500,0,48,48);
    // rect(b,k,-100,-100);
  // ellipse(-50,0,8,8);
  pop(); // puts origin or grid back to where it was when we called push
  aVelocity= aVelocity+aAcceleration; //increase velocity by acceleration
  angle = angle+aVelocity; //increase angle by velocity
 // rect(10,10,8,8);
 // text("∆∑®†¥øπåß", 20, 30);
 // text("press keys", 20, 50);
 // text("C & E & F = acceleration", 20, 70);
 // text("A & D = velocity", 20, 90);
 // text("B = background reset", 20, 110);

}

var keyPressed = function() {
	  if (key == 'A') {
    	aVelocity= 23;
	  } else if (key == 'B') {
		  background(255,100,0);
	  } else if (key == 'C') {
		  aAcceleration = -10;
    } else if (key == 'D') {
     aVelocity = -1;
   } else if (key == 'E') {
    aAcceleration = 0;
 } else if (key == 'F') {
    aAcceleration = 4;
 }
};