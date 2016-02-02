
var setup = function() {

  createCanvas(600, 600);

};

var draw = function() {
 
  noStroke();
  fill(random(0),random(256),random(256));
  rect(mouseX,mouseY,20,20,42);

  }  

var keyPressed = function() {
	  if (key == 'A') {
    	background(0); 
    }
};
