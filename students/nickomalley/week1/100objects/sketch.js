var lines = []
var speed = []
var value = 200
var bkgrd = 35

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i=0; i<100; i++) {
     lines.push(random(0, width));
     speed[i] = 0.1 + random(5);
   }
}

function draw() {
  background(bkgrd);
  stroke(value);
  for (var i=0; i<100; i++) {
    lines[i] += speed[i];
     lines[i] = lines[i] + 1;
     if (lines[i] > width + 5) {
       lines[i] = -5;
     }

     line (lines[i], i*5, 10, 10);
   }
};

function mouseClicked() {
  if (value == 200) {
    value = 0;
  } else {
    value = 200;
  }
  if (bkgrd == 35) {
    bkgrd = 200;
  } else {
    bkgrd = 35;
  }
}

// function mouseReleased() {
//   if (bkgrd == 35) {
//     bkgrd = 200;
//   } else {
//     value = 35;
//   }
// }
