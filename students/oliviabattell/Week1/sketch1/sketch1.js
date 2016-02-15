function setup() {
  createCanvas(1000, 600);
  smooth();
  noStroke();
};

function draw() {
  background(0, 210, 180);


  //double for loop to generate our grid
  //notice the var instead of int
  for (var j = 0; j < 20; j++) {
    for (var i = 0; i < 1; i++) {
      //some variables that get larger with randomness
      //as mouseX and mouseY increase.
      var moveX = random(0, mouseX / 1);
      var moveY = random(0, mouseY / 80)

      //draw ellipse and have their position move more as mouse X and Y increases
      ellipse(50 + i * 50 + moveX, 30 + j * 50 + moveY, 10, 10);
       fill(255);
    };
  };
};