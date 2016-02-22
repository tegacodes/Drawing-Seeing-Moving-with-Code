// Example 3-1: Object literals
// A very similar example is described in this video tutorial:
// https://www.youtube.com/watch?v=pGkSHeEZLMU&index=22&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

var w;

function setup() {
  createCanvas(480, 270);

  w= new Walker();

  stroke(0);
  fill(0,0,255);

}

function draw() {


  w.display(); //call the function display from the bubble OBJECT
  w.step(); // call the function move from the bubble object.

}

//THIS IS AN OBJECT LITERAL CALLED BUBBLE----------------------
//in javascript an object is declared as a var. It is a collection of
//data and functions all grouped together in a block of code.
function Walker() {
  //object literals are like lists, they are lists of what we call name-value pairs.
  //they can contain data using this syntax:
  this.x = random(0,width);
  this.y = random(0,height);

  //they can also contain functions declared with a similar syntax...
  this.display = function(){
    stroke(0);
    strokeWeight(2);
    ellipse(this.x,this.y,1,1); //this.variable name is used...

  }, // also notice that each thing in the list is separated with a comma
  //here is another function
  this.step = function(){
    var choice = int(random(4));
    if (choice ==0){
      this.x = this.x +1;
    }else if (choice ==1){
      this.x = this.x-1;
    }else if (choice==2 ){
      this.y = this.y +1;
    }else{
      this.y=this.y-1;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  },

this.walk = function(){
  this.x=this.x + random(-1,1);
  this.y=this.y + random(-1,1);

}

}
//----------------------
