
var movers =[];

function setup() {
  createCanvas(640,360);
for(var i=0; i<4;i++){
  movers[i] = new Mover();
}

}

function draw() {
  background(51);

  for(var i=0; i<4;i++){
    var gravity = createVector(0,0.3);
    movers[i].applyForce(gravity);


      movers[i].update();
    movers[i].display();
      movers[i].checkEdges();
  }






  // print("balloon.pos:"+balloon.position.y);
  // print("balloon.vel:"+balloon.velocity.y);
  // print("balloon.acc:"+balloon.acceleration.y);

}
