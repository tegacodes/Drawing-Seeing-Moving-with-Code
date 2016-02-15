// This is a template for creating a looping animation in p5js.
// It is ported from Golan Levin's example here: http://golancourses.net/2014/assignments/project-1/lenticular-animation/
// When you press a key, this program will export a series of images
// into an "output" directory located in its sketch folder.
// These can then be combined into an animated GIF.
// Prof. Golan Levin, January 2014 - CMU IACD

//===================================================
// Global variables.

var nFramesInLoop = 10; // For lenticular export, REMEMBER this should be 10 to generate 10 frames.
var nElapsedFrames;
var bRecording;
var x = 0;
var x1 = 750;
var x2 = 750;
var x3 = 750;
var x4 = 750;
var x5 = 375;
var x6 = 1125;
var x7 = 1125;
var x8 = 375;


function setup() {
  createCanvas(1500, 1500);

  bRecording = false;
  nElapsedFrames = 0;
  frameRate (nFramesInLoop);
  // stroke(0);
  // fill(150);
}

function draw() {

  // Compute a percentage (0...1) representing where we are in the loop.
  var percentCompleteFraction = 0;
  if (bRecording) { //if recording
    percentCompleteFraction = nElapsedFrames / nFramesInLoop; //percentage through the loop
  }
  else {
    var modFrame = (frameCount % nFramesInLoop); //else if have gone through more than the first 10 frames
    percentCompleteFraction = modFrame / nFramesInLoop; //percentage = modulo / frames in loop
  }

  // Render the design, based on that percentage.
  renderMyDesign (percentCompleteFraction);
  print(percentCompleteFraction);

  // If we're recording the output, save the frame to a file.
  if (bRecording) {
    var  myName = "nickomalley";
    saveCanvas(myName + "-loop-" + nf(nElapsedFrames));

    nElapsedFrames++;
    println(nElapsedFrames);
    if (nElapsedFrames == nFramesInLoop) {
      bRecording = false;
    }
  }




}

//===================================================
function keyPressed() {
  // Press a key to export frames to the output folder
  bRecording = true;
  nElapsedFrames = 0;
  println("yes!");
}


//===================================================
function renderMyDesign (percent) {
  background(200,229,216)

  push();
  scale(2,2);
  // rotate(PI/5.0);
  translate(-400,-360);
  stroke(235);
  strokeWeight(6.5);
  line(x1,300,x4,850); //top to mid
  line(x8,1025,x4,850); //left-bottom to mid-bottom
  line(x6,1025,x4,850); //right-bottom to mid-bottom
  fill(235);
  noStroke();
  ellipse(x4,850,50,50); //mid-bottom
  pop();

  fill(60);
  noStroke();
  ellipse(x1,200,50,50); //top
  ellipse(x2,1100,50,50); //bottom
  ellipse(x3,550,50,50); //mid-top
  ellipse(x4,750,50,50); //mid-bottom
  ellipse(x5,375,50,50); //left-top
  ellipse(x6,925,50,50); //right-bottom
  ellipse(x7,375,50,50); //right-top
  ellipse(x8,925,50,50); //left-bottom
  stroke(60);
  strokeWeight(13);
  line(x1,300,x4,850); //top to mid
  line(x3,650,x2,1200); //mid to bottom
  line(x1,300,x5,475); //top to left
  line(x5,475,x8,1025); //left-top to left-bottom
  line(x8,1025,x2,1200); //left-bottom to bottom
  line(x1,300,x7,475); //top to right-top
  line(x7,475,x6,1025); //right-top to right-bottom
  line(x6,1025,x2,1200); //right-bottom to bottom
  line(x5,475,x3,650); //left-top to mid-top
  line(x7,475,x3,650); //right-top to mid-top
  line(x8,1025,x4,850); //left-bottom to mid-bottom
  line(x6,1025,x4,850); //right-bottom to mid-bottom

  fill(60);
  noStroke();
  ellipse(x1,300,50,50); //top
  ellipse(x2,1200,50,50); //bottom
  ellipse(x3,650,50,50); //mid-top
  ellipse(x4,850,50,50); //mid-bottom
  ellipse(x5,475,50,50); //left-top
  ellipse(x6,1025,50,50); //right-bottom
  ellipse(x7,475,50,50); //right-top
  ellipse(x8,1025,50,50); //left-bottom
  stroke(60);
  strokeWeight(13);
  line(x1,300,x4,850); //top to mid
  line(x3,650,x2,1200); //mid to bottom
  line(x1,300,x5,475); //top to left
  line(x5,475,x8,1025); //left-top to left-bottom
  line(x8,1025,x2,1200); //left-bottom to bottom
  line(x1,300,x7,475); //top to right-top
  line(x7,475,x6,1025); //right-top to right-bottom
  line(x6,1025,x2,1200); //right-bottom to bottom
  line(x5,475,x3,650); //left-top to mid-top
  line(x7,475,x3,650); //right-top to mid-top
  line(x8,1025,x4,850); //left-bottom to mid-bottom
  line(x6,1025,x4,850); //right-bottom to mid-bottom

  push();
  scale(2,2);
  translate(-500,-500);
  fill(60);
  noStroke();
  ellipse(x1,300,50,50); //top
  ellipse(x2,1200,50,50); //bottom
  ellipse(x3,650,50,50); //mid-top
  ellipse(x4,850,50,50); //mid-bottom
  ellipse(x5,475,50,50); //left-top
  ellipse(x6,1025,50,50); //right-bottom
  ellipse(x7,475,50,50); //right-top
  ellipse(x8,1025,50,50); //left-bottom
  pop();

  push();
  translate(-300,200);
  rotate(PI/5.0);
  fill(60);
  noStroke();
  ellipse(x1,300,50,50); //top
  ellipse(x2,1200,50,50); //bottom
  ellipse(x3,650,50,50); //mid-top
  ellipse(x4,850,50,50); //mid-bottom
  ellipse(x5,475,50,50); //left-top


  pop();

  push();
  translate(-100,-200);
  rotate(PI/-5.0);
  fill(60);
  noStroke();
  ellipse(x1,300,50,50); //top
  ellipse(x2,1200,50,50); //bottom
  ellipse(x3,650,50,50); //mid-top
  ellipse(x4,850,50,50); //mid-bottom
  ellipse(x5,475,50,50); //left-top
  pop();

  push();
  scale(2,2);
  // rotate(PI/5.0);
  translate(-400,-360);
  stroke(235);
  strokeWeight(6.5);

  line(x3,650,x2,1200); //mid to bottom
  line(x1,300,x5,475); //top to left
  line(x5,475,x8,1025); //left-top to left-bottom
  line(x8,1025,x2,1200); //left-bottom to bottom
  line(x1,300,x7,475); //top to right-top
  line(x7,475,x6,1025); //right-top to right-bottom
  line(x6,1025,x2,1200); //right-bottom to bottom
  line(x5,475,x3,650); //left-top to mid-top
  line(x7,475,x3,650); //right-top to mid-top

  fill(235);
  noStroke();
  ellipse(x1,300,50,50); //top
  ellipse(x2,1200,50,50); //bottom
  ellipse(x3,650,50,50); //mid-top

  ellipse(x5,475,50,50); //left-top
  ellipse(x6,1025,50,50); //right-bottom
  ellipse(x7,475,50,50); //right-top
  ellipse(x8,1025,50,50); //left-bottom
  pop();


//percent 0 >>> 1

//x1 750 ----> 600

//150/2 = 75

x1 = map(percent,0,1,750,600);
x2 = map(percent,0,1,750,900);
x3 = map(percent,0,1,750,900);
x4 = map(percent,0,1,750,600);



  // x1 = x1-2;
  // if (x1<600) {
  //   noloop();
  //
  // };
  //
  // x2 = x2+2;
  // if (x1>900) {
  //   //noloop();
  // };
  //
  // x3 = x3+2;
  // if (x3>900) {
  //   //noloop();
  // };
  //
  // x4 = x4-2;
  // if (x4<600) {
  // //  noloop();
  // };
  // x=map(percent,0,1,0,width);

  println("x1:"+x1+"x2:"+x2+"x3:"+x3+"x4:"+x4)

}
