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
}


function draw() {
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



  x1 = x1-2;
  if (x1<600) {
    noloop();
  };

  x2 = x2+2;
  if (x1>900) {
    noloop();
  };

  x3 = x3+2;
  if (x3>900) {
    noloop();
  };

  x4 = x4-2;
  if (x4<600) {
    noloop();
  };

  // x5 = x5+1;
  // if (x5>465) {
  //   noloop();
  // };
  //
  // x6 = x6-1;
  // if (x6<1035) {
  //   noloop();
  // };
  //
  // x7 = x7-1;
  // if (x7<1035) {
  //   noloop();
  // };
  //
  // x8 = x8+1;
  // if (x8>465) {
  //   noloop();
  // };

  // x2 = x2+5;
  // if (x2>1200) {
  //   noloop();
  // };
  //
  // x3 = x3+3;
  // if (x3>1100) {
  //   noloop();
  // };
  //
  // x4 = x4-2;
  // if (x4<600) {
  //   noloop();
  // };
  //
  // x5 = x5+1;
  // if (x5>520) {
  //   noloop();
  // };
  //
  // x6 = x6-10;
  // if (x6<375) {
  //   noloop();
  // };
  //
  // x7 = x7-1;
  // if (x7<1050) {
  //   noloop();
  // };
  //
  // x8 = x8+8;
  // if (x8>950) {
  //   noloop();
  // };

}
