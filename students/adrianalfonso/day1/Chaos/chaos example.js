function setup() {
  createCanvas(600, 600);

};

function draw() {
  background(0);
  noFill();
  translate(300,300);

  //double for loop to generate our grid
  //notice the var instead of int
  for (var j = 0; j < 15; j++) {
    for (var i = 0; i < 15; i++) {
      for (var k = 0; k < 30; k=k+5) {
      //some variables that get larger with randomness
      //as mouseX and mouseY increase.
      var moveX = random(0, mouseX / 25);
      var moveY = random(0, mouseY / 25)
      rect(-300 + i * 50 + moveX, -300 + j * 50, 5+k, 5+k);
      rotate(mouseX/1200);
      stroke(255);
      };
    };
  };
};
