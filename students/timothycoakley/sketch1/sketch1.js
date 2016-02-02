function setup() {
  createCanvas(1000, 1000);
  smooth();
  noStroke();
};

function draw() {
  background(220, 120, 100);
  fill(0);

  //double for loop to generate our grid
  //notice the var instead of int
  for (var j = 0; j < 11; j++) {
    for (var i = 0; i < 11; i++) {
      //some variables that get larger with randomness
      //as mouseX and mouseY increase.
      var moveX = random(0, mouseX / 70);
      var moveY = random(0, mouseY / 220)

      //draw ellipse and have their position move more as mouse X and Y increases
      fill(255,0,60);
       rect(80 + i * 70 + moveY, 30 + j * 70 + moveY, 90, 20);
       rect(80 + i * 70 + moveX, 30 + j * 70 + moveY, 60, 20);
       
       ellipse(80 + i * 80 + moveX, 10 + j * 70 + moveY, 60, 20);
    };
  };
};