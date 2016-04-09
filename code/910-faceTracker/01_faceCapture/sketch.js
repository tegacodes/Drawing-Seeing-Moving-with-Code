var ctracker;
function setup() {
  // setup camera capture
  var videoInput = createCapture();
  videoInput.size(400, 300);
  videoInput.position(0, 0);

  // setup canvas
  var cnv = createCanvas(400, 300);
  cnv.position(0, 0);
  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);
  noStroke();
}
function draw() {
  clear();
  // get array of face marker positions [x, y] format
  var positions = ctracker.getCurrentPosition();
  if(positions.length>0){
    fill(255);
    var mouthTop = positions[60][1];
    ellipse(positions[60][0],positions[60][1],8,8)
    var mouthBottom = positions[57][1];
    fill(255,0,0);
    ellipse(positions[57][0],positions[57][1],8,8)
    var mouthSize = mouthBottom - mouthTop;

    console.log(mouthSize);
  }
}
