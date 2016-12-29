var gap= 20;
var direction= 1;


function cornrow(x, y,leafSize){
		

	stroke(255);
	for(var i = 0; i < height; i++){
		braid(x, y, leafSize, direction);
		direction = -direction;
		y = y + gap;




	}

};
function braid(x, y, size, dir){
	stroke(255);
	strokeWeight(.1);
	push();
	translate(x,y);
	scale(size);
	beginShape();
	vertex(-1, 0.0);
	bezierVertex(-1*dir, -3, 4*dir, 1, 2*dir, 3);
	bezierVertex(2*dir, 3, 3*dir, 2, -1, 0.0);
	endShape();
	pop();

};
