

function setup() {
  createCanvas(400, 200);

  bRecording = false;
  nElapsedFrames = 0;
  frameRate (30);
  stroke(0);
  fill(150);
}

function draw() {

ellipse(10,10,100,100);


}

//===================================================
function keyPressed() {

saveFrames("test.jpg");

}
