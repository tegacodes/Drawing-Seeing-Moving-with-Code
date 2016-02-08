//LITERAL OBJECT

//Array
var bubbles =[];

function setup() {
  createCanvas(480, 270);
  stroke(0);
  fill(0,0,255);

}

function draw() {
  background(255,0,0);
  for(var i=0;i<bubbles.length;i++){
  bubbles[i].displayBubble();
  bubbles[i].move();
  //dot operator refers to x within the bubble object
  println(bubbles.length);
}

}

function mouseDragged(){
  //every time I press the mouseX
  //add a bubble onto the end of the array
bubbles.push(new Bubble(mouseX,mouseY));
//push() function adds to the end of the array
//splice(); removes index positions form the array

}

function keyPressed(){

  bubbles.splice(0,1);
//splice(index you want to remove, how many from that point)
}

//USING THE CONSTUCTOR FUNCTION SYNTAX
//THIS IS LIKE A CLASS
//TEMPLATE FOR OUR OBJECT - use a capital
function Bubble(dx, dy) {
  //data
  this.x=dx;  //note that each thing in our list
  this.y=dy; //ends with a comma

  //function
  this.displayBubble= function(){
    stroke(0,255,0);
    ellipse(this.x,this.y,20,20);
  };

  this.move= function(){
    this.x=this.x+random(-1,1);
    this.y= this.y+random(-1,1);
  }
}
