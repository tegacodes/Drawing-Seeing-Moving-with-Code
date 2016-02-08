#Objects and Arrays of Objects

There are two ways of writing objects in Javascript.
These examples are described in the [Shiffman videos 5.4, 6.3, 6.4, 6.5.](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)

The first way to define an object is called a literal object.

##Literal Objects
Literal objects are blocks of code that contains a list of name value pairs. A literal object can just be a list of variables, or it can also contain functions. The 'this' keyword refers to the variables within the object. Generally you won't use this way of writing an object much, but it is worth knowing what it is!

```var bubble = {
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
      this.x=this.x + random(-1,1); //this refers to the variables within our object
      this.y=this.y + random(-1,1);

    }

}```

To refer to any of the values in the literal object, we use the dot operator.
```bubble.x;  //refers to the x value of the object```
```bubble.move();  //refers to the move() function of the object```

##Objects defined with a constructor function
The other way of writing objects is used much more often. This style makes our object into a template for creating more of these objects. Its structure also enables us to pass it arguments, so that each version of the object can have varying properties.
This way of creating an object is called a constructor function.

```//A CONSTRUCTOR function (just like a class in Processing)
    //By convention we name it with a capital letter.
    var Bubble = function(dx, dy){  //You can also put arguments in here to pass into the object
      //here we use the 'this' keyword to establish the object's variables.
      this.x= dx;
      this.y= dy;

      //the functions are written with a similar syntax to before, but with the 'this'...
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
}```

Here is an entire example that shows how to declare and instantiate an object in your program.
```var bubbles = [];

function setup() {
    createCanvas(480, 270);
    stroke(0);
    fill(0,0,255);  
    for(var i = 0; i<3; i++){
      bubbles[i]= new Bubble(random(width),random(height));
    }
}

function draw() {
    background(255,0,0);
    for(var i = 0; i<bubbles.length; i++){
      bubbles[i].display(); //call the function display from the bubble OBJECT
      bubbles[i].move(); // call the function move from the bubble object.
    }
}

var Bubble = function(dx, dy){  //You can also put arguments in here to pass into the object
  //here we use the 'this' keyword to establish the object's variables.
  this.x= dx;
  this.y= dy;

//the functions are written with a similar syntax to before, but with the 'this'...
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
}```



###Deliverables:
* Submit your loops by the end of tonight. Due midnight.
* Watch the following Shiffman videos on objects, revising the examples we did in class. 5.4, 6.3, 6.4, 6.5.
* Write an object using a constructor function that draws a creature of your imagining.
* Read through the introduction of Nature of Code, remembering that we will be writing our code in javascript and not Processing. Given this, when you read the term 'class', think of way of writing objects with the constructor function. The code that draws your creature should be contained within a function called display(). Doing exercise I.1, creating a random walker class in p5js by adding in a step function to your object code. Also do exercise I.2 and I.3. Note that the functions such as random, noise are the same in both processing and p5js.
* Try some of the examples in this chapter, porting them from Processing to p5js [or copying them from this repository here which shows them all written in Javascript. ](https://github.com/shiffman/The-Nature-of-Code-Examples-p5.js)
