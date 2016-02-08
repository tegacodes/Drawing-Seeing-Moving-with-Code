// Example 3-1: Object literals
// A very similar example is described in this video tutorial:
//https://www.youtube.com/watch?v=QoFWCPVpWUE&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=19


function setup() {
  createCanvas(480, 270);
  stroke(0);
  fill(0,0,255);
}

function draw() {
  background(255,0,0);
  bubble.display(); //call the function display from the bubble OBJECT
  bubble.move(); // call the function move from the bubble object.
}

//THIS IS AN OBJECT LITERAL CALLED BUBBLE
//in javascript an object is declared as a var. It is a collection of
//data and functions all grouped together in a block of code.
//It can be written in two ways. This is one of them:

var bubble = {
  //object literals are like lists
  //they can contain data using this syntax:
  x: 200,
  y: 150,

  //they can also contain functions declared with a similar syntax...
  display: function(){
    stroke(255);
    strokeWeight(2);
    ellipse(this.x,this.y,20,20); //this.variable name is used...

  }, // also notice that each thing in the list is separated with a comma
  //here is another function
  move: function(){
    this.x=this.x + random(-1,1);
    this.y=this.y + random(-1,1);

  }

}
