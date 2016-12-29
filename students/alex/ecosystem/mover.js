
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var Mover=function(mass, x, y){
  this.position = createVector(x, y);//x y vector to keep track of obejct position
  this.velocity = createVector(1, 0);//velocity vector to change position
  this.acceleration = createVector(0, 0);//acceleration vector to change velocity
  this.mass = mass;//mass of object
  this.bang=false;//regular collision
  this.fightBang=false;//fight collision
  this.fitness =0;//timer for babies
  this.pregnant=5;//pregnancy state
  this.refractory=0;//time between birthing a baby and being able to birth another
  this.directionTimer=0;//timer to change direction based on moverDirection
  this.moverDirection= createVector(random(-1,1)*5,random(-1,1)*5);//random vector
  this.childhood=true;//objects start in a childhood state
  this.childhoodTimer=0;//timer for time in childhood
  this.species=1;//species identifier
  this.chase=0;//chase state
  this.chaseTimer=0;//time in a chase
  this.chaseSpeed=1;//speed in a chase
  this.chaseLimit=100;//maximum time possible in a chase
  this.chasePartner=0;//other creature that is chasing or running from this
  this.chaseGap=0;//time inbetween chases
  this.dead=false;//if the creature has died due to food or killed
  this.maxChildhood= 300;
  this.maxFitness=1300;
  this.maxRefractory=3000;
  this.deathCounter=0;
  this.bloodSwitch=false;
  this.maxPopulation=20;

  this.applyForce = function(force) {
    var f = p5.Vector.div(force,this.mass);
    this.acceleration.add(f);
  };
  this.update = function() {//call every frame to update object's position
  if(this.chase==3 && this.chaseGap==1){//after the chase ends, neutralise the velocity gained from the chase in order to only have a "normal" velocity

  this.velocity=this.velocity.add(this.velocity.x *-1, this.velocity.y*-1);
  this.acceleration=this.acceleration.add(this.velocity.x*-1,this.velocity.y*-1)
}if(this.chase==0 || this.chase==3){//if not in a chase or in refractory, restore normal functioning
  this.velocity= this.moverDirection;
  this.velocity.limit(10);
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  if(this.directionTimer==999){
    this.velocity=this.velocity.add(this.velocity.x *-1, this.velocity.y*-1);
    this.position.add(this.velocity);
  }if(this.directionTimer>=500){//every 1000 frames change direction
    this.moverDirection=createVector(random(-1,1)*1,random(-1,1)*1);
    this.directionTimer=0;
  }
  this.directionTimer ++;
}else{//error checking

  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
}
};
this.display = function() {//the physical chracteristics of the object altered by position
  stroke(0);
  strokeWeight(2);
  fill(255, 175);
  ellipse(this.position.x, this.position.y, this.mass*5, this.mass*5);
};
this.checkEdges = function() {//chech to make sure objects do not go off screen
  if (this.position.x >= width) {
    this.position.x = width;
    this.velocity.x *= -1;
  }else if (this.position.x < 0) {
    this.velocity.x *= -1;
    this.position.x = 0;
  }if(this.position.y > height) {
    this.velocity.y *= -1;
    this.position.y = height;
  }else if(this.position.y<0){
    this.velocity.y*=-1;
    this.position.y=0;
  }
}
this.collide = function(m){ //m is each of the mover objects, checks collisions
  if(dist(m.position.x,m.position.y,this.position.x,this.position.y)<(100)){
    this.bang =true;
  }
}
this.fightCollide = function(c){ //c is each of the mover objects, checks collisions for fights during a chase
  if(dist(c.position.x,c.position.y,this.position.x,this.position.y)<=(15)){
    this.dead=true;
  }
}
this.runToward = function(e){//e is each mover object, makes object run toward prey, will be used in future iteration with food
  var f= p5.Vector.sub(e.position,this.position);
  f.normalize();
  f.mult(this.chaseSpeed*-1);
  this.velocity.limit(15);
  this.acceleration= f;
  if(e.species==0){
    this.velocity=f *3;
  }
}
this.childhoodUpdate =function(){//checks for childhood
  if(this.childhood){
    this.childhoodTimer++;
    if(this.childhoodTimer==this.maxChildhood){
      this.childhood=false;
      this.pregnant=0;
      this.mass=this.mass*3;
    }
  }
}
this.pushOntoArray = function(e,c){
  e.push(new Mover(1.3,movers[c].position.x,movers[c].position.y));
}
};
