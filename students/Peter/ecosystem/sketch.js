
var fs;
var SquareDots;
function setup() {
  createCanvas(500,500)
   fs = new FlySystem(createVector(random(0,width)));
}

function draw() {
background(90);
  fs.addDot();
  fs.run();

}
var FlySystem = function(position){
   this.origin = position.copy();
   this.dots = [];
   
   this.addDot = function(){
      var adddot=round(random(1,7));
      //switch statment to create varied flies 
         switch(adddot){
            case 1:
               this.dots.push(new Dot(createVector(random(0,width))));
            break;
            case 2: 
               this.dots.push(new Dot(createVector(0,300)));
            break;
            case 3: 
               this.dots.push(new SquareDots(createVector(random(0,width))));
            break;
            case 4: this.dots.push(new Dot(createVector(random(0,width))));
            break;
            case 5:  this.dots.push(new RectDots(createVector(random(0,width))));
            break;
            case 6: this.dots.push(new ColorDots(createVector(random(0,width))));
            break;
            case 7: this.dots.push(new ColorDots(createVector(0,200)));
      
      }
   }
   this.run = function(){
  for (var i = this.dots.length-1; i >= 0; i--) {
    var d = this.dots[i];
    
    //creates wind/gravity to make flies move
    var gravity = createVector(0, 0.07);
   var wind = createVector(0.9, 0);
   //adds wind/gravity
   d.applyForce(gravity);
   d.applyForce(wind);
   //
   d.run();
    if (d.isDead()) {
   //remove flies to help with lag
      this.dots.splice(i, 1);
         }
      }
   }
}
var Dot = function(position){
   this.mass = random(0.5,30);
   this.wingcheck = true;
   this.acceleration = createVector(0,0)
   this.velocity = createVector(1.5,2.5);
   this.position = position.copy();
   this.position2 = this.position.copy();
   this.life = 200;
   this.math = 3*this.mass;
   this.cosine = TWO_PI /8;
   this.thing = this.math/2 * cos(this.cosine);
   
   
   this.run = function(){
   this.wingmove();
   this.update();
   this.display();
   this.bump();
   this.frogdisplay();
   this.frogtongue();
   }
   
   
   
   this.update = function(){
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.position2.add(this.velocity);
      
   }
   
   this.display = function(){
      stroke(0,this.life);
      fill(0,this.life);
      ellipse(this.position.x,this.position.y,this.mass*3,this.mass*3);
      stroke(255,this.life);
      fill(255,this.life);
      rect(this.position2.x-this.thing,this.position2.y-10,this.mass/2,this.mass/2);
      
   }
   //flies bump into the wall and get knocked back
   this.bump = function(){
 if(this.position.y >= height || this.position.y < 0){
    this.velocity.y = this.velocity.y * -1;
 }
 if (this.position.x >= width || this.position.x < 0){
    this.velocity.x = this.velocity.x * -1;
    this.position2.x = this.position.x;
    
    
    if (this.life > 0){
    this.life = this.life - 100;
    println(this.life);
    }
 }
}
   this.applyForce = function(force){
      var f=p5.Vector.div(force,this.mass);
      this.acceleration.add(f);
}

   this.wingmove = function(){
      //makes the wing move
      if ((this.wingcheck === true) && (this.position2.y < this.position.y+5)) {
      this.position2.y = this.position2.y + 1;
      println(this.position2.y);
   }
    if(this.position2.y == this.position.y+5){
         this.wingcheck = false;
       }
   if (this.wingcheck === false){
      this.position2.y = this.position2.y - 1;
   }
   if (this.position2.y == this.position.y){
      this.wingcheck=true;
   }//makes it so the wing stays put when bumped
   if ((this.position2.y < this.position.y-5)){
      this.position2.y = this.position.y+5;
   }
   }
   //kill off dead flies, they diseappear to off screen to fly heaven
    this.isDead = function() {
    if (this.life === 0) {
       return true;
    } else {
      return false;
   }
    }
    //makes the frog 
   this.frogdisplay = function(){
   fill(76,153,0);
   stroke(0)
   ellipse(20,470,100,100);
   fill(250);
   ellipse(30,450,30,30);
   fill(0);
   ellipse(30,450,10,10);
   stroke(0);
   rect(60,480,10,5);
   stroke(250,0,0)
   //frogs tongue follows the moust
   line(60,480,mouseX,mouseY);
   }
   //click on the flies to eat them
   this.frogtongue = function(){
     if ((mouseIsPressed) && (mouseX >= this.position.x-6) && (mouseX <= this.position.x+6)){
        this.life=0;
      }
   }
}
//flies with square wings 
var SquareDots = function(position){
   Dot.call(this, position);
   
   this.display = function(){
      stroke(0,this.life);
      fill(0,this.life);
      ellipse(this.position.x,this.position.y,this.mass*3,this.mass*3);
      stroke(255,this.life);
      fill(255,this.life);
      rect(this.position2.x-this.thing,this.position2.y-10,this.mass/2,this.mass/2);
    }
   }
SquareDots.prototype = Object.create(Dot.prototype);
SquareDots.prototype.constructor = Dot;
//rectangle flies
var RectDots = function(position){
   Dot.call(this, position);
   
   this.display = function(){
      stroke(0,this.life);
      fill(0,this.life);
      rect(this.position.x,this.position.y,this.mass*3,this.mass*3);
      stroke(255,this.life);
      fill(255,this.life);
      rectMode(CENTER);
      rect(this.position2.x-this.thing,this.position2.y-10,this.mass/2,this.mass/2);
   }
   
}
RectDots.prototype = Object.create(Dot.prototype);
RectDots.prototype.constructor = Dot;
//colored flies
var ColorDots = function(position){
   Dot.call(this, position);
   
   this.display = function(){
      stroke(random(0,250),this.life);
      fill(random(0,250),this.life);
      ellipse(this.position.x,this.position.y,this.mass*3,this.mass*3);
      stroke(255,this.life);
      fill(255,this.life);
      ellipse(this.position2.x-this.thing,this.position2.y-10,this.mass/2,this.mass/2);
   }
   
}
ColorDots.prototype = Object.create(Dot.prototype);
ColorDots.prototype.constructor = Dot;
