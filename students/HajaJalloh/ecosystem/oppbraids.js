
// braid constructor for a new braid 

function oppBraid(){
	this.position = createVector(random(width), random(height));
	this.velocity = createVector(random(-2,2), random(-2,2));
	this.size =10;
	this.r = 5;
	this.col = color(67);
	this.gap = 1;
	this.direction = 1;
	

// color change function
	this.changeColor = function(){

	this.col = (random(5), random(55), random(255));
	}

//to check if two objects intersect 
	this.intersects = function(other){
		var d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
	
		if (d < (this.r + other.r)*2){
			return true;

		}else{
			return false;
		}
	}


	this.display = function(){
		
	strokeWeight(.1);
	fill(this.col);
 
	push();
	translate(this.position.x,this.position.y);
	scale(this.size);
	beginShape();
	vertex(0.0, 0.0);
	bezierVertex(-1, -3, -4, 1, -2, 3);
	bezierVertex(-2, 3, -3, 2, 0.0, 0.0);
	endShape();
	pop();
	


	};



	this.move = function(){
		this.position.add(this.velocity);
	}


	

}