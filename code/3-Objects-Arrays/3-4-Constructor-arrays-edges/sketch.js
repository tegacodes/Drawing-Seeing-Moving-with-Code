// Example 3-4: Adding and subtracting to an array of objects
// For an explanation see the Shiffman video:
// https://www.youtube.com/watch?v=EyG_2AdHlzY&index=24&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

//Array functions push(); splice();
//

var bubbles = [];

function setup() {
  createCanvas(480, 270);

  stroke(0);
  fill(0,0,255);

}

function draw() {
  background(255,0,0);
  for(var i = 0; i<10; i++){
    bubbles[i].display(); //call the function display from the bubble OBJECT
    bubbles[i].move(); // call the function move from the bubble object.
    if(bubbles[i].x>width||bubbles[i].x<0){
      bubbles.splice(i,1);
      println("delete:"+i);
      println(bubbles.length);
    }
    if(bubbles[i].y>height||bubbles[i].y<0){
      bubbles.splice(i,1);
      println("delete:"+i);
      println(bubbles.length);
    }
  }
}

function mouseDragged(){
  bubbles.push(new Bubble(mouseX, mouseY));

}

function keyPressed(){

  bubbles.splice(0,1);
}



//THIS IS A CONSTRUCTOR function (just like a class in Processing)
//By convention we name it with a capital letter.
var Bubble = function(x, y){  //You can also put arguments in here to pass into the object

  //here we use the this keyword to establish the objects variables.

  this.x= x;
  this.y= y;

  //also the functions are written with a similar syntax...
  this.display =function(){
    stroke(255);
    strokeWeight(2);
    ellipse(this.x,this.y,20,20); //this.variable name is used...

  }
  //here is another function
  this.move=function(){
    this.x=this.x + random(-1,1);
    this.y=this.y + random(-1,1);

  }





}
