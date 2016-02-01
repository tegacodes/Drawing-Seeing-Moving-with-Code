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

  // If we're recording the output, save the frame to a file.
  if (bRecording) {
    var  myName = "tegabrain";
    saveCanvas("/export/"+myName + "-loop-" + nf(nElapsedFrames));

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

  // This is an example of a function that renders a temporally looping design.
  // It takes a "percent", between 0 and 1, indicating where we are in the loop.
  // This example uses two different graphical techniques.
  // Use or delete whatever you prefer from this example.
  // Remember to SKETCH FIRST!

  //----------------------
  // here, I set the background and some other graphical properties
  background(180);
  smooth();
  stroke (0, 0, 0);
  strokeWeight (2);

  //----------------------
  // Here, I assign some handy variables for center of rotating element.
  var cx = 100;
  var cy = 100;

  //----------------------
  // Here, I use trigonometry to render a rotating element.
  var radius = 80;
  var nSpokes = 7;
  for (var i=0; i < nSpokes; i++) {
    var armAngle = (percent + i) * (TWO_PI/nSpokes); //angle = % through animation x angle between spokes --> for each spoke
    var px = cx + radius*cos(armAngle);
    var py = cy + radius*sin(armAngle);
    fill    (255);
    line    (cx, cy, px, py);
    ellipse (px, py, 20, 20);
  }

  //----------------------
  // Here, I use graphical transformations
  // to render a rotated square.
  push();
  translate (cx, cy); //translate origin to cx, cy
  var rotatingSquareAngle =  percent * TWO_PI * -0.25;
  rotate (rotatingSquareAngle);
  fill (255, 128);
  rect (-40, -40, 80, 80);
  pop();

  //----------------------
  // Here's a set of linearly-moving circles
  var ballSize = 20;
  var topY = 0 - ballSize - 2;
  var botY = height;
  var spanY = botY - topY;

  var nMovingBalls = 5;
  for (var i=0; i <= nMovingBalls; i++) {
    var ballSpacing = spanY / nMovingBalls;
    var yBase = topY + ballSize/2; // offset for radius of ball
    var yPercent = map(percent, 0, 1, topY, topY+ballSpacing);
    var yPosition = yBase + (yPercent + (i*ballSpacing))%spanY;

    fill (255, 255, 255);
    ellipse (250, yPosition, ballSize, ballSize);
  }

  //----------------------
  // Here's a pulsating ellipse
  var ellipsePulse = cos ( percent * TWO_PI);  //again % goes from 0->100%. So the pulse oscillates from cos(0) -> cos(TWO_PI)
  var ellipseW = map(ellipsePulse, -1, 1, 20.0, 80.0); // map to the range 20 -> 80
  var ellipseH = map(ellipsePulse, -1, 1, 80.0, 20.0);
  var ellipseColor = map(ellipsePulse, -1, 1, 0, 255);
  fill (ellipseColor, ellipseColor, ellipseColor);
  ellipse (340, cy, ellipseW, ellipseH);

  //----------------------
  fill (0, 0, 0);
  textAlign (CENTER);
  var percentDisplayString = nf(percent, 1, 3);
  text (percentDisplayString, 340, 40);
}
