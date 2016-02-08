// Example 3-2: Array of objects
// For an explantion of this see the video:
// https://www.youtube.com/watch?v=pGkSHeEZLMU&index=22&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA
var bubbles = [];

function setup() {
  createCanvas(480, 270);
  for(var i = 0; i<400; i++){


    bubbles[i]= { //WE ARE PUTTING OUR OBJECT LITERAL INTO OUR ARRAY
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
