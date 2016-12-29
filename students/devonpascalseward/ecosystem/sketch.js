// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
var movers = [];
var shakers =[10];

var d = setInterval(1000);
var attractor;
var x = .000001;
var speed = 1;
var stop = 5;
var timer = 1;
var currentsecond;
var bugs = [];
// var food = f;

function setup() {
  createCanvas(1080, 720);
  currentsecond= second();
  for (var i = 0; i < 1; i++) {
    movers[i] = new Mover(random(0.1, 1), random(width), random(height));

  }
  //SHAKERS ****
  for (var i = 0; i <shakers.length; i++) {
    shakers[i] = new Shaker(random(0.1, 1), random(width), random(height));
  }
  attractor = new Attractor(d);

   for (var i=0; i<50; i++) {
    bugs.push(new Jitter());
  }

  // delay = i;
  // frameRate (fr);

}


function draw() {
  background(35, 181, 175);
  strokeWeight(0);
  fill (238, 186, 76);
  rect (0,600,1080,120);
  attractor.display();


  if(movers.length <50) {
  if(second()-currentsecond > timer) {
movers.push(new Mover(random(0.1, 2), random(width), random(height)));

currentsecond=second();

  }

  }
  // if (x > 10) {
  //   append(movers[i], 10);
  // }
  //       if (movers[i] >= stop) {
  //   splice (movers[i], stop, 5);
  // }

  // x=x+1;

  for (var i = 0; i < movers.length; i++) {
    var force = attractor.calculateAttraction(movers[i]);
    movers[i].applyForce(force);

    movers[i].update();
    movers[i].display();

    movers[i].collide(attractor);
  //  movers[i].checkEdges();
   // new Mover(random(0.1, 2), random(width), random(height));
}
  for (var j =  movers.length; j <=0; j++) {
    //  for (var i = 0; i < movers.length; i++) {
   //does each mover collide with shaker?
 for(var j=0; j<shakers.length;j++){
   shakers[j].applyForce(0.01);

  shakers[j].update();
   shakers[j].display();



  //  println(movers[i]);
  //  shakers[j].collide(movers[i]);
    // if(shakers[j].eat==true){

      // movers.splice(i,1);
     //}
   }
   push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5); 
  pop();

 
  }

     for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
 }
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}




}

function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 10;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    triangle(this.x, this.y, this.diameter, this.diameter);
  };
}

function mouseMoved() {
  attractor.handleHover(mouseX, mouseY);


}

function mousePressed() {
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  attractor.handleHover(mouseX, mouseY);
  attractor.handleDrag(mouseX, mouseY);

}

function mouseReleased() {
  attractor.stopDragging();


}
