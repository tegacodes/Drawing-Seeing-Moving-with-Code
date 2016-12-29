
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var Animal=function(mass, x, y){
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.mass = mass;
  this.bang=false;//regular collision
  this.fightBang=false;
  this.fitness =0;
  this.pregnant=5;
  this.refractory=0;
  this.directionTimer=0;
  this.moverDirection= createVector(random(-1,1)*5,random(-1,1)*5);
  this.childhood=true;
  this.childhoodTimer=0;
  this.species=2;
  this.chase=0;
  this.chaseTimer=0;
  this.chaseSpeed=5;
  this.chaseLimit=800;
  this.chaseGap=0;
  this.chasePartner=0;
  this.dead=false;
  this.deadTimer=0;
  this.bloodSwitch=false;
  this.maxChildhood= 1500;
  this.maxFitness=1000;
  this.maxRefractory=3000;
  this.maxPopulation=10;




  this.applyForce = function(force) {
    var f = p5.Vector.div(force,this.mass);
    this.acceleration.add(f);
  };

  this.update = function() {
    if(this.chase==3 && this.chaseGap==1)
    {
      this.velocity=this.velocity.add(this.velocity.x *-1, this.velocity.y*-1);
      this.acceleration=this.acceleration.add(this.acceleration.x*-1,this.acceleration.y*-1);
    }if(this.chase==0||this.chase==3){
      this.velocity= this.moverDirection;
      this.velocity.limit(20);
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
      if(this.directionTimer==999){
        this.velocity=this.velocity.add(this.velocity.x *-1, this.velocity.y*-1);
        this.position.add(this.velocity);
      }if(this.directionTimer>=1000){
        this.moverDirection=createVector(random(-1,1)*2,random(-1,1)*2);
        this.directionTimer=0;
      }
      this.directionTimer ++;
    }else{
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
    }
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(0,255,0);
    rect(this.position.x, this.position.y, this.mass*5, this.mass*5);
  };

  this.checkEdges = function() {
    if (this.position.x >= width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }else if(this.position.y<0){
      this.velocity.y*=-1;
      this.position.y=0;
    }
  }

  this.collide = function(m){ //m is each of the mover objects
    if(dist(m.position.x,m.position.y,this.position.x,this.position.y)<(50)){
      this.bang =true;
    }
  }
  this.fightCollide = function(c){ //m is each of the mover objects

    if(dist(c.position.x,c.position.y,this.position.x,this.position.y)<=5 && this.species!==c.species){
      c.dead=true;
      this.chasePartner=0;
    }
  }
  this.runToward = function(e){
    var d= p5.Vector.sub(this.position,e.position);
    d.normalize();
    d.mult(this.chaseSpeed*-1);
    this.velocity= d;
  }
  this.childhoodUpdate =function(){
    if(this.childhood==true){
      this.childhoodTimer++;
      if(this.childhoodTimer==this.maxChildhood){
        this.childhood=false;
        this.mass=this.mass*2;
        this.pregnant=0;
      }
    }
  }
  this.pushOntoArray = function(e,c){
    e.push(new Animal(2,movers[c].position.x,movers[c].position.y));
  }
};
