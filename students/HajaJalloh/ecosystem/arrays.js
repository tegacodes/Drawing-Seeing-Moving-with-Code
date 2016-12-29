// I am just turning this in for now b/c my actual project is so messed up

// these are basically two arrays that change color when touch each other.
// haja Jalloh
var braids = [];
var oppbraids = [];

function setup(){

	createCanvas(500,500);
	// loop to create 100 braids 
	for (var i = 0; i <100; i++){
		braids[i] = new Braid();
		oppbraids[i] = new oppBraid();	
		

	}

}

function draw(){

	background(0);

cornrow 
	for(var i = 0; i < braids.length; i++){
		braids[i].move();
		braids[i].display();
		oppbraids[i].move();
		oppbraids[i].display();

		for( var m= 0; m < braids.length; m++){
			//i != m &&
			if (i != m && braids[i].intersects(oppbraids[i])){
				braids[i].changeColor();
		
				//oppbraids[i].changeColor();
				oppbraids[m].changeColor();
			}
		}

	}

}



function Braid(x,y){
	this.position = createVector(random(width), random(height));
	this.velocity = createVector(random(-1,1), random(-1,1));
	this.size =10;
	this.r = 5;
	this.col = color(255);
	this.gap = 20;
	this.direction = 1;
	


	this.changeColor = function(){

		

		this.col = (random(255), random(255), random(255));
	}

	this.intersects = function(other){
		var d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
	
		if (d < (this.r + other.r)*2){
			return true;

		}else{
			return false;
		}
	}


	this.display = function(){
	
	fill(this.col,235, 10);
	push();
	translate(this.position.x,this.position.y);
	scale(this.size);
	beginShape();
	vertex(0.0, 0.0*this.r);
	bezierVertex(1, -3, 4, 1, 2, 3);
	bezierVertex(2, 3, 3, 2, 0.0, 0.0);
	endShape();
	pop();

	};


	this.move = function(){
		this.position.add(this.velocity);
	}




}