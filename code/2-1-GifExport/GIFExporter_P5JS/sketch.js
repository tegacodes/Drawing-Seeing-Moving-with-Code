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

function setup() {
  createCanvas(400, 200);

  bRecording = false;
  nElapsedFrames = 0;
  frameRate (nFramesInLoop);
  stroke(0);
  fill(150);
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
    var  myName = "tegabrain";
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
background(255);
  ellipse(x,100,20,20);
  x=map(percent,0,1,0,width);
    ellipse(width/2,height/2,percent*400,percent*400);

}
