//face tracker object is called ctracker
var ctracker;

function setup() {
  //set up camera capture
  var videoInput = createCapture();
  //set resolution of capture
  videoInput.size(400,300);
  //set position of capture.
  videoInput.position(0,0);

  //set canvas
  var cnv=createCanvas(400,300);
  cnv.position(0, 0);

  //setup our face tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  //passing the video input to the tracker object
  ctracker.start(videoInput.elt);
  noStroke();
}

function draw() {
  clear();
  //getCurrentPosition(); function gets our array of points
  //that are mapped from the face
  //putting this array of points into a array called positions
  var positions = ctracker.getCurrentPosition();

  //check positions array is loaded
  if(positions.length>0){
    fill(255);

    var topMouth = positions[47][1];
    var bottomMouth = positions[53][1];

    var mouthOpen = bottomMouth - topMouth;

    println(mouthOpen);

    ellipse(positions[47][0],positions[47][1], mouthOpen,mouthOpen);

  }
}
