function setup() {
  createCanvas(1540, 640);
  smooth();
  noStroke();
};

function draw() {
  background(20, 0, 17, 4);
  // fill(0);

  //double for loop to generate our grid
  //notice the var instead of int
  for (var j = 0; j < 12; j++) {
    for (var i = 0; i < 30; i++) {
      //some variables that get larger with randomness
      //as mouseX and mouseY increase.
      var moveX = random(0, mouseX / 2);
      var moveY = random(0, mouseY / 2)

      //draw ellipse and have their position move more as mouse X and Y increases
      rect(30 + i * 50 + moveX, 30 + j * 50 + moveY, 30, 30);
    };
  };
};

var keyPressed = function() {
	  if (key == 'A') {
    	fill(200,255,100); 
	  } else if (key == 'B') {
		  fill(255,100,200); 
	  } else if (key == 'C') {
		  fill(100,200,255); 
  	}
	  //print(keyCode);
};

  //background(20, 0, 17, 4);