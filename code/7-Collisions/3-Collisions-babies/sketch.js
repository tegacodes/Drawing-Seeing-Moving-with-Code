
var movers = [];

var attractor;

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 10; i++) {
    movers[i] = new Mover(random(0.1, 2), random(width), random(height));
  }

}

function draw() {
  background(50);
  for (var i = 0; i < movers.length; i++) {
    //var force = attractor.calculateAttraction(movers[i]);
    //  movers[i].applyForce(force);

    movers[i].update();
    movers[i].display();

  }

  //CHECK COLLISIONS WITH EACH OTHER
  for (var i = movers.length-1; i >=0 ; i--) { //for every element of array
    for (var j = movers.length-1; j >=0; j--) { //check again against every element from that array
      if(i!=j){
        //this is a trick to check each mover against every other mover, but not against itself - which
        //obviously doesnt make sense.
        movers[i].collide(movers[j]);
        if(movers[i].bang==true){
          movers[i].fitness++;

        }
      }
    }
    if(movers[i].fitness>100){
      movers.push(new Mover(random(0.1, 2), movers[i].x, movers[i].y));
      movers[i].fitness=0;
      println("happy birthday");
    }
  }
}
