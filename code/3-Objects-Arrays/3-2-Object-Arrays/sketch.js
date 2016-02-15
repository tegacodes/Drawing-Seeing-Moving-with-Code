// Example 3-1: Object literals
// A very similar example is described in this video tutorial:
// https://www.youtube.com/watch?v=pGkSHeEZLMU&index=22&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

var bubbles = [];

function setup() {
  createCanvas(480, 270);
  for(var i = 0; i<400; i++){
    bubbles[i]= new Bubble();
  }
  stroke(0);
  fill(0,0,255);

}

function draw() {
  background(255,0,0);
  for(var i = 0; i<bubbles.length; i++){
    bubbles[i].display(); //call the function display from the bubble OBJECT
    bubbles[i].move(); // call the function move from the bubble object.
  }
}

//THIS IS AN OBJECT LITERAL CALLED BUBBLE----------------------
//in javascript an object is declared as a var. It is a collection of
//data and functions all grouped together in a block of code.
function Bubble() {
  //object literals are like lists, they are lists of what we call name-value pairs.
  //they can contain data using this syntax:
  this.x = random(0,width);
  this.y = random(0,height);

  //they can also contain functions declared with a similar syntax...
  this.display = function(){
    stroke(255);
    strokeWeight(2);
    ellipse(this.x,this.y,20,20); //this.variable name is used...

  }, // also notice that each thing in the list is separated with a comma
  //here is another function
  this.move = function(){
    this.x=this.x + random(-1,1);
    this.y=this.y + random(-1,1);

  }

}
//----------------------
