// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill


var movers = [];
var zero;
var Mcount=0;
var Acount=0;

function setup() {
  createCanvas(400,400);
  zero=createVector(0,0);//vector 0,0. Useful.

  for(var i=0;i<2; i++){
    mover=new Mover(1.3,random(width),random(height));
    movers.push(mover);
  }
  for(var i=0; i<2; i++){
    animal=new Animal(2,random(width),random(height));
    movers.push(animal);
  }
}
function draw(){
  background(255);
  print("movers length:"+movers.length);
  for(var i=0;i<movers.length;i++){//update all movers
    if(movers[i].species==1 && movers[i].dead==false){//update for species with 1
      movers[i].display();
      movers[i].update();
      movers[i].checkEdges();
      movers[i].childhoodUpdate();
      Mcount++;
    }
    if(movers[i].species==2 && movers[i].dead==false){//update for species with 2
      movers[i].display();
      movers[i].update();
      movers[i].checkEdges();
      movers[i].childhoodUpdate();
      Acount++;
    }
    if(movers[i].dead==true && movers[i].bloodSwitch==false && movers[i].childhood==true){
      movers[i].deathCounter+=10/1000;
      fill(255,0,0);
      noStroke();
      ellipse(movers[i].position.x, movers[i].position.y, 10-movers[i].deathCounter,10-movers[i].deathCounter);
    }else if(movers[i].dead==true && movers[i].bloodSwitch==false && movers[i].childhood==false){
      movers[i].deathCounter+=20/1000;
      fill(255,0,0);
      noStroke();
      ellipse(movers[i].position.x, movers[i].position.y, 20-movers[i].deathCounter,20-movers[i].deathCounter);
    }
    if(movers[i].deathCounter==1000){
      movers[i].bloodSwitch==true;
    }
  }
for(var i=movers.length-1; i<=0; i--){
  if(movers[i].bloodSwitch==true){
    movers.splice(i,1);
  }

}
  for(var i=0;i<movers.length;i++){
    for(var j=0;j<movers.length;j++){//compare ALL objects to one another
      if(i!==j){
        if(movers[i].chase!==3){//if not in chase refractory check for collision (always starts here)
          movers[i].collide(movers[j]);
        }if(movers[i].bang==true && movers[i].chase==0 && movers[i].species> movers[j].species
          && movers[j].species!=0 && movers[i]!=0 && movers[i].species!==movers[j].species && movers[i].childhood==false && movers[j].dead==false){// above comment but if they are prey and you are hungry and you are not a tree

            movers[i].chase=2;//set to runtoward
            movers[i].chasePartner=movers[j];
          }else if (movers[i].bang==true && movers[i].chase!== 1 && movers[i].species== movers[j].species
            && movers[j].species!=0 && movers[i].pregnant==0 && movers[j].dead==false) {

              movers[i].pregnant=1;

              movers[i].bang=false
            }if(movers[i].chase==2 && movers[j].species!==0 && movers[j].dead==false && movers[i].species!==movers[j].species)//run toward if chasing prey thats not a tree
            {
              movers[i].runToward(movers[i].chasePartner);
              movers[i].chaseTimer++;
              movers[i].fightCollide(movers[j]);
            }if(movers[i].chasePartner.dead==true){
              movers[i].chase=3;
              movers[i].chaseTimer=0;
              movers[i].bang=false;
              movers[i].acceleration=zero;
              movers[i].chasePartner=0;
            }if(movers[i].chaseTimer>=movers[i].chaseLimit){//to end the chase if not caught or a draw occurs
              movers[i].chase=3;//set to refractory
              movers[i].chaseTimer=0;//reset conditions
              movers[i].bang=false;
              movers[i].acceleration=zero;
              movers[i].chasePartner=0;
            }if(movers[i].chase==3){//refractory period for rest between chases
              movers[i].chaseGap++;

}if(movers[i].chaseGap==1500){//measurement for refractory
              movers[i].chaseGap=0
              movers[i].chase=0;//reset chase possibilities and allow for collision detection
            }if(movers[i].pregnant==1){
              movers[i].fitness++;
            }if(movers[i].fitness==movers[i].maxFitness && movers[i].species!==1 && Acount<movers[i].maxPopulation){
              movers[i].pregnant=2;
              movers[i].pushOntoArray(movers,i);
              Acount++;
              movers[i].fitness=0;
            }else if(movers[i].fitness==movers[i].maxFitness && movers[i].species==1 && Mcount<movers[i].maxPopulation){

              movers[i].pregnant=2;
              movers[i].pushOntoArray(movers,i);
              Mcount++;
              movers[i].fitness=0;
            }if(movers[i].pregnant==2){
              movers[i].refractory++;
            }if(movers[i].refractory==movers[i].maxRefractory){
              movers[i].pregnant=0;
              movers[i].refractory=0;
            }
          }
        }
      }

      Mcount=0;
      Acount=0;
    };
