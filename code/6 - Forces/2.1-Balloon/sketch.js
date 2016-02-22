
var balloon;

function setup() {
  createCanvas(640,360);

  balloon = new Balloon();

}

function draw() {
  background(51);
  //force = ma;
  var helium = createVector(0, -0.06);
  balloon.applyForce(helium);


  balloon.update();
  balloon.display();
  balloon.checkTop();



  print("balloon.pos:"+balloon.position.y);
  print("balloon.vel:"+balloon.velocity.y);
  print("balloon.acc:"+balloon.acceleration.y);

}
