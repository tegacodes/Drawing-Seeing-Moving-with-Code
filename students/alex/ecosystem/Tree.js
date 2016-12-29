
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var Tree=function(mass, x, y){
this.position=createVector (x,y);
this.fruit=3;
this.fruitLimit=3;
this.fruitTimer=0;
this.childhood=true;
this.childhoodTimer=0;
this.mass=mass;
this.species=0;
  }
  this.display=function(){
    fill(663300);
rect(x,y,2*mass,4*mass);
fill(0,255,0);
ellipse(x,y-(3*mass),3*mass,3*mass);
if(this.fruit!=0)
{
  fill(255,0,0);
  ellipse(x,y-(3*mass),1*mass,1*mass);
}
  }
  this.childhoodUpdate =function(){
    if(this.childhood){
      this.childhoodTimer++;
      if(this.childhoodTimer>= 200){
        this.childhood=false;
        this.fruitLimit=6;
        this.mass=this.mass *2;
      }
    }
  }
  this.fruitCheck = function(){
    if(this.fruit<this.fruitLimit){
      this.fruitTimer++;
      if(this.fruitTimer>=300)
      {
        this.fruit++;
      }
    }
  }
  this.fight=function(e){
    if(this.fruit>0)
    {
      this.fruit--;
      e.food++;
    }
  }



};
