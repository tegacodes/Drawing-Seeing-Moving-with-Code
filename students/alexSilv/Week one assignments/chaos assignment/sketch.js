// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill


var angle = 0;
var frameCount = 0;
var dragX;
var dragXcurr;

var setup = function() {

  createCanvas(900, 400);
  noStroke();
  fill(0,0,0);


 frameRate(20);

};

function draw() {
  background(255,20,255);
  fill(45,45,15,63);

angle =angle * PI/4;
    rotate(angle);
    fill(0,0,0);
  ellipse(mouseX,mouseY,20,100);
  rect(mouseX+30, mouseY +30, 20,20);
  if(mouseX < 225)
  {

  }else if (mouseX >225 && mouseX < 450) {

  }else if (mouseX >450 && mouseX< 675 ){


  }

};
