

function setup() {
  createCanvas(1500, 1500);
}


function draw() {
  background(200,229,216)

  fill(60);
  noStroke();
  ellipse(750,300,50,50); //top
  ellipse(750,1200,50,50); //bottom
  ellipse(750,650,50,50); //mid-top
  ellipse(750,850,50,50); //mid-bottom
  ellipse(375,475,50,50); //left-top
  ellipse(1125,1025,50,50); //right-bottom
  ellipse(1125,475,50,50); //right-top
  ellipse(375,1025,50,50); //left-bottom
  stroke(60);
  strokeWeight(13);
  line(750,300,750,850); //top to mid
  line(750,650,750,1200); //mid to bottom
  line(750,300,375,475); //top to left
  line(375,475,375,1025); //left-top to left-bottom
  line(375,1025,750,1200); //left-bottom to bottom
  line(750,300,1125,475); //top to right-top
  line(1125,475,1125,1025); //right-top to right-bottom
  line(1125,1025,750,1200); //right-bottom to bottom
  line(375,475,750,650); //left-top to mid-top
  line(1125,475,750,650); //right-top to mid-top
  line(375,1025,750,850); //left-bottom to mid-bottom
  line(1125,1025,750,850); //right-bottom to mid-bottom
}
