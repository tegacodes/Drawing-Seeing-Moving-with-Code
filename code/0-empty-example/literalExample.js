// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

//Array
var bubbles = [];

function setup() {
  createCanvas(480, 270);
  stroke(0);
  fill(0,0,255);
  bubbles[0] = {
    var bubble = {
    //data
    x:200,   //note that each thing ends with a comma
    y:150,

    //function
    display: function() {
      stroke(0,200,0);
      ellipse(this.x,this.y,20,20);
    },
    move: function() {
      this.x=this.x+random(-2,2);
    }
  }

  }
}

function draw() {
  background(255,0,0);
  bubbles.display();
  bubbles.move();

}

//LITERAL OBJECT GOES HERE

var bubble = {
  //data
  x:200,   //note that each thing ends with a comma
  y:150,

  //function
  display: function() {
    stroke(0,200,0);
    ellipse(this.x,this.y,20,20);
  },
  move: function() {
    this.x=this.x+random(-2,2);
  }
}
