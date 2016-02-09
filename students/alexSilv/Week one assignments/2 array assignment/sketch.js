// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

var numCircles = 50;
var CircleX = [numCircles]; //array of circles moving up and down
var CircleY = [numCircles];//array of circles moving left and right
var speed = [];
var directArr = [];
var easing = 0.05;
var oldX;
var oldY;

//var cY = new color(30,30,30);//color of y circles
var change = false; //used in determining if drawing an x or y circle
var direction = false;//used to determine direction of object
var timeCount = 30; //used in mouse release to determine time before returning to normal

////////////////////////////////////////////////////////////////

var setup = function() {

  createCanvas(500, 500);
  smooth();
  noStroke();
  fill(255);

    for( var i = 0; i<numCircles; i++){//populate arrays
   CircleX[i] = push(new Circle(random(500), 0));
    CircleY[i] = push(new Circle(0,random(500)));
    speed[i]= 0.1 +random(3);

  }
//  for (var i =0; i<99; i++)
  //{
  //direction[i] = push(new direction(random(-2,2), random(-2,2)));

//}
console.log(CircleX[0]);
};
////////////////////////////////////////////////////////////////////////
function draw() {

  background(255,0,0);
};
/*  for(var i =0; i<numCircles; i++)
  {
    if(change!=false)//error handling
    {
      change=false;
    }
    CirclesX[i].move();
    CirclesX[i].display();
    change = true;
    CirclesY[i].move();
    CirclesY[i].display();
    change=false;
  }
}
  ///////////////////////////////////////////////////////
  function direction(dirX,dirY)
  {
    this.x = dirX;
    this.y = dirY;
  }
  //////////////////////////////////////////////////
*/
function Circle(x, y)
{
this.x= x;//
this.y = y;
};
/*function direction(X, Y)
{
this.X = x;
  this.Y = y;
};
 this.move(){//add speed values to transfrom x and y also check direction
  if(change=false && direction = false)
  {
  CirclesX[i].get(x) += speed[i];
  }else if( change= false&& direction =true)
  {
  CirclesX[i].get(x) += -2* speed[i];
  }
  if(x[i] >width || y[i] >height)
  {
  direction = true;
  }else if( x[i]<0 || y[i] <0)
  {
    direction=false;
  }

}
/////////////////////////////////////////////////////////
  this.display()// update circle location and color depending on change value
 {
  if(change=false){
    fill(cX);
    ellipse(x[i], y[i], 10,10);
  } else if (change=true)
  {
  fill(cY);
  ellipse(x[i], y[i], 10,10);
  }
}

var mousePressed = function(){
for(var i= 0; i<CircleX.length(); i++)
{
  for(var i = 0; i<CircleY.length(); i++)
  {
x= (1-easing) *+oldX + easing *mouseX;
y= (1-easing) *oldY + easing*mouseY;

ellipse(x,y,10,10);

oldX = x;
oldY = y;

  }
}
}
var mouseReleased(){
  for(var i= 0; i<CircleX.length(); i++)
  {
    for(var i = 0; i<CircleY.length(); i++)
    {
      x+= (1-easing) *direction[i].get(x);
      y+= (1-easing) * direction[i].get(y);


}
*/
