// This is a template for creating a looping animation in Processing. 
// When you press a key, this program will export a series of images
// into an "output" directory located in its sketch folder. 
// These can then be combined into an animated GIF. 
// Prof. Golan Levin, January 2014 - CMU IACD
 
//===================================================
// Global variables. 
 
int nFramesInLoop = 10; // For lenticular export, REMEMBER TO CHANGE THIS to 10!
int nElapsedFrames;
boolean bRecording; 
 
//===================================================
void setup() {
  size (400, 200); 
  bRecording = false;
  nElapsedFrames = 0;
  frameRate (nFramesInLoop); 
}
//===================================================
void keyPressed() { 
  // Press a key to export frames to the output folder
  bRecording = true;
  nElapsedFrames = 0;
}
 
//===================================================
void draw() {
 
  // Compute a percentage (0...1) representing where we are in the loop.
  float percentCompleteFraction = 0; 
  if (bRecording) {
    percentCompleteFraction = (float) nElapsedFrames / (float)nFramesInLoop;
  } 
  else {
    float modFrame = (float) (frameCount % nFramesInLoop);
    percentCompleteFraction = modFrame / (float)nFramesInLoop;
  }
 
  // Render the design, based on that percentage. 
  renderMyDesign (percentCompleteFraction);
 
  // If we're recording the output, save the frame to a file. 
  if (bRecording) {
    String  myName = "golanlevin"; 
    saveFrame("output/"+ myName + "-loop-" + nf(nElapsedFrames, 4) + ".png");
    nElapsedFrames++; 
    if (nElapsedFrames == nFramesInLoop) {
      bRecording = false;
    }
  }
}
 
//===================================================
void renderMyDesign (float percent) {
 
  // This is an example of a function that renders a temporally looping design. 
  // It takes a "percent", between 0 and 1, indicating where we are in the loop. 
  // This example uses two different graphical techniques. 
  // Use or delete whatever you prefer from this example. 
  // Remember to SKETCH FIRST!
 
  //----------------------
  // here, I set the background and some other graphical properties
  background (180);
  smooth(); 
  stroke (0, 0, 0); 
  strokeWeight (2); 
 
  //----------------------
  // Here, I assign some handy variables. 
  float cx = 100;
  float cy = 100;
 
  //----------------------
  // Here, I use trigonometry to render a rotating element.
  float radius = 80; 
  int nSpokes = 7; 
  for (int i=0; i < nSpokes; i++) {
    float armAngle = (percent + i) * (TWO_PI/nSpokes); 
    float px = cx + radius*cos(armAngle); 
    float py = cy + radius*sin(armAngle); 
    fill    (255); 
    line    (cx, cy, px, py); 
    ellipse (px, py, 20, 20);
  }
 
  //----------------------
  // Here, I use graphical transformations 
  // to render a rotated square. 
  pushMatrix(); 
  translate (cx, cy);
  float rotatingSquareAngle =  percent * TWO_PI * -0.25;
  rotate (rotatingSquareAngle); 
  fill (255, 128); 
  rect (-40, -40, 80, 80);
  popMatrix(); 
 
  //----------------------
  // Here's a set of linearly-moving circles
  float ballSize = 20;
  float topY = 0 - ballSize - 2;
  float botY = height;
  float spanY = botY - topY; 
 
  int nMovingBalls = 5; 
  for (int i=0; i <= nMovingBalls; i++) {
    float ballSpacing = spanY / (float)nMovingBalls;
    float yBase = topY + ballSize/2; // offset for radius of ball 
    float yPercent = map(percent, 0, 1, topY, topY+ballSpacing);
    float yPosition = yBase + (yPercent + (i*ballSpacing))%spanY; 
 
    fill (255, 255, 255); 
    ellipse (250, yPosition, ballSize, ballSize);
  }
 
  //----------------------
  // Here's a pulsating ellipse
  float ellipsePulse = cos ( percent * TWO_PI); 
  float ellipseW = map(ellipsePulse, -1, 1, 20.0, 80.0); 
  float ellipseH = map(ellipsePulse, -1, 1, 80.0, 20.0); 
  float ellipseColor = map(ellipsePulse, -1, 1, 0, 255); 
  fill (ellipseColor, ellipseColor, ellipseColor); 
  ellipse (340, cy, ellipseW, ellipseH); 
 
  //----------------------
  fill (0, 0, 0);
  textAlign (CENTER); 
  String percentDisplayString = nf(percent, 1, 3);
  text (percentDisplayString, 340, 40);
}
