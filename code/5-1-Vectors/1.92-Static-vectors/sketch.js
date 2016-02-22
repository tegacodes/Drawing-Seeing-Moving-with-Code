/*
Exercise 1.7
Translate the following pseudocode to code using static or non-static functions where appropriate.
• The PVector v equals (1,5).
• The PVector u equals v multiplied by 2.
• The PVector w equals v minus u.
• Divide the PVector w by 3.

var v = createVector(1,5);
var  u = createVector(__,__);
var w = ...
___________;

*/

function setup(){

  //example:
  var p = createVector(1,5);
  var u = createVector(4,5);
  var x = p5.Vector.add(p,u); //static add is a return function
  println("x: "+x); //x becomes the sum
  println("p: "+p); //notice how p remains the same if static add is used
  println("u: "+u);

  println("x :"+ p.add(u));
  println("p :"+ p); //non static add, changes p to the sum
  println("u :"+ u); //u remains the same

  //same goes for sub(), mult(), div()


}

function draw(){


}
