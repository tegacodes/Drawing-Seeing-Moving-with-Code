// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

var bubbles = [];

function setup() {
  createCanvas(480, 270);
  stroke(0);
  fill(0,0,255);
  for(var i=0;i<100;i++) {
    bubbles[i] = new Bubble();
  }

}

function draw() {
  background(255,0,0);
  for(var i=0;i<100;i++) {
    bubbles[0].display();
    bubbles[0].move();
  }

}

//Using constuctor function syntax

function Bubble() {
  //data
  this.x=random(0,width);
  this.y=random(0,height);

  //function
  this.display= function() {
    stroke(0,200,0);
    ellipse(this.x,this.y,20,20);
  };
  this.move= function() {
    this.x=this.x+random(-1,1);
    this.y=this.y+random(-1,1);
  }
}
