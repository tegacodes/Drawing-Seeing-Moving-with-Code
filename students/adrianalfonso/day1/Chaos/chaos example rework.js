function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  smooth(2);
  frameRate(60);

};

function draw() {
  background(0);
  noFill();
  translate(300,300);

  //double for loop to generate our grid
  //notice the var instead of int
  for (var j = 0; j < 15; j++) {
    for (var i = 0; i < 15; i++) {
      for (var k = 0; k < 60; k=k+5) {
      //some variables that get larger with randomness
      //as mouseX and mouseY increase.
      ellipse(-300 + i * 50, -300 + j * 50, 5-k+ mouseX/5, 5-k+mouseX/5);
      rotate(mouseX/2400);
      stroke(255-k*5+random(0,30),255-k*5+random(0,30),255-k*5+random(0,30),255-k*5+random(0,50));
      strokeWeight(j/2-mouseX/300);
      };
    };
  };
};
