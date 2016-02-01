var diameter; //max diameter of circles
var angle = 0;

function setup() {
  createCanvas(640, 360);
  diameter = height - 10;
  noStroke();
  noStroke();
  fill(255, 204, 0);
}

function draw() {

  background(0);
//variable controlling diameters of each circle.
  var d1 = 10 + (sin(angle) * diameter/2) + diameter/2; //sin varies from -1 to 1 and we multiply this by diamter/2.
  //Then add diameter on 2 so it doesn go negative.
  var d2 = 10 + (sin(angle + PI/2) * diameter/2) + diameter/2; //offset by PI/2
  var d3 = 10 + (sin(angle + PI) * diameter/2) + diameter/2; //and by PI

  ellipse(0, height/2, d1, d1);
  ellipse(width/2, height/2, d2, d2);
  ellipse(width, height/2, d3, d3);

  angle += 0.02; //increase angle
}
