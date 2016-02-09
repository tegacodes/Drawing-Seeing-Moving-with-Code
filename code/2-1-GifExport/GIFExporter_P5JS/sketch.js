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

//animation variables/settings
var startR=30;//starting color value for background
var angle = 0;//angle for rectangle starting
var rot = 0.01;//value to rotate background
var patRot=0;//rectangle group rotation around center
var rectRot=0;//rectangle rotation
var map;

function setup() {
  createCanvas(1500, 1500);

  stroke(255);
  strokeWeight(5);
  smooth();
  colorMode(HSB);

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
    var  myName = "AlexSilver";
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

  map = map(percent,0,1,0,PI);
  push();//colored center
  translate(width/2, height/2);
  rotate(rot);
  var r=startR;
  for(var i=0;i<1500;i++){
    if(r>=255){
      r=0;
    }else {
      r+=0.94;
    }
    strokeWeight(70);
    stroke(r,255,255);
    line(-750,-750+ i,width,-750+i);
  }
  if(startR>=255){
    startR = 40;
  }
  strokeWeight(1);
  startR+=0.0001;

  rot+=map;

  println("rot:+rot;")
  pop();
  colorMode(RGB);
  //end colored center
  drawAll();
}
 //functions

function drawTriangles()
{
  for(var i=0; i<=360; i+=60)
  {
    drawTri(i);
  }
}
function drawTri(r){ //draws triangles with rotation r
  noStroke();
  fill(0);
  push();
  translate(width/2,height/2);
  rotate(radians(r));
  beginShape();
  vertex(-90,450);
  vertex(0,0);
  vertex(80,450);
  endShape();
  pop();
}
  function drawRectangles()//draws all rectangles
  {
    for(var i=0; i<=315;i+=45)
    {
      drawRect(i);
    }
  }
  function drawRect(r)//draws a spinning rectangle with a starting rotation
  {
    push();
    rotate(angle+radians(r));
    rotateRect();
    pop();
  }
  function rotateRect()//draws a rotating rectangle
  {
    push()
    {
      translate(0,635);
      rotate(radians(rectRot));
      rect(0,0,80,80);
      pop();
    }
    rectRot += 1.0;
  }
  function drawAll()
  {
    fill(0,0,0);
    noStroke();
    beginShape(); //clockwise black rectangle
    vertex(0,0);
    vertex(1500,0);
    vertex(1500,1500);
    vertex(0,1500);
    beginContour();  /////begin inner circle going counterclockwise
    vertex(375,745);//sect 1
    vertex(378,797);
    vertex(387,844);
    vertex(403,891);
    vertex(426,930);
    vertex(458,985);
    vertex(503,1032);
    vertex(547,1065);
    vertex(605,1095);
    vertex(664,1115);
    vertex(703,1122);
    vertex(750,1125);//sect 2
    vertex(797,1122);
    vertex(836,1115);
    vertex(895,1095);
    vertex(953,1065);
    vertex(997,1032);
    vertex(1042,985);
    vertex(1074,938);
    vertex(1097,891);
    vertex(1113,844);
    vertex(1122,797);
    vertex(1125,756);//sect 3
    vertex(1122,703);
    vertex(1113,656);
    vertex(1097,609);
    vertex(1079,562);
    vertex(1042,515);
    vertex(997,468);
    vertex(953,435);
    vertex(895,404);
    vertex(836,385);
    vertex(797,378);
    vertex(750,375); //sect 4
    vertex(703,378);
    vertex(664,385);
    vertex(605,404);
    vertex(547,435);
    vertex(503,468);
    vertex(458,515);
    vertex(426,562);
    vertex(403,609);
    vertex(387,656);
    vertex(375,750);
    vertex(378,703);
    vertex(372,747);
    endContour();
    endShape(CLOSE);//finish inner circle

    drawTriangles();      //draw black triangles
    push();              ///draw rotating rectangles
    translate(width/2,height/2);
    rotate(radians(patRot));
    fill(255);
    strokeWeight(5);
    stroke(200);
    drawRectangles();
    patRot+= -1.0;
    pop();
  };
