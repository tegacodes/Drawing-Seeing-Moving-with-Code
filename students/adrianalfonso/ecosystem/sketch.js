//LITERAL OBJECT

//Array
var fly=[];
var particle=[];
var fog=[];
var water=[];
var flock;
function setup() {
  createCanvas(1000, 600);
  for (var i = 0; i < 40; i++) {
    fly[i] = new Fly();
    particle[i] = new Particle();
  }
  for (var j =0; j<15;j++){
    fog[j]= new Fog();
  }
  for (var k =0; k<10;k++){
    water[k]= new Water();
  }
  flock = new Flock();
  // Add an initial set of boids into the system
  for (var i = 0; i < 20; i++) {
    var b = new Boid(width/2,height/2);
    flock.addBoid(b);
  }
}

function draw() {
    noStroke();


  for(var k=0; k<water.length;k++){
    push();
    translate(0,k*10);
    water[k].display();
    pop();
  }

  for(var k=0; k<water.length;k++){
    push();
    translate(0,k*16);
    water[k].display();
    pop();
  }


  for (var i = 0; i < fly.length; i++) {
    fly[i].display();
    fly[i].walk();

  }
    background(65,120);
    flock.run();
    flock.run();
  for (var i = 0; i < fly.length; i++) {
      particle[i].display();
      particle[i].walk();
    }



  fill(random(153,155),random(98,100),80,30);
    ellipse(width-width/8,75,50,50);
    fill(random(153,155),random(98,100),80,30);
    ellipse(width-width/8,75,47.5,47.5);
    fill(random(153,155),random(98,120),80,30);
    ellipse(width-width/8,75,45,45);
    fill(random(153,155),random(120,140),80,30);
    ellipse(width-width/8,75,40,40);
    fill(random(153,155),random(140,160),80,30);
    ellipse(width-width/8,75,35,35);
    fill(random(153,155),random(160,180),80,30);
    ellipse(width-width/8,75,30,30);
    ellipse(width-width/8,75,25,25);
    ellipse(width-width/8,75,20,20);
    ellipse(width-width/8,75,15,15);
    ellipse(width-width/8,75,10,10);
    ellipse(width-width/8,75,5,5);
    ellipse(width-width/8,75,2.5,2.5);
    fill(random(185,190),random(78,80),0,random(1,1.5));
    ellipse(width-width/8,75,1005,1005);
    ellipse(width-width/8,75,805,805);
    ellipse(width-width/8,75,605,605);
    ellipse(width-width/8,75,405,405);
    ellipse(width-width/8,75,205,205);
    ellipse(width-width/8,75,105,105);
    ellipse(width-width/8,75,100,100);
    ellipse(width-width/8,75,80,80);
    ellipse(width-width/8,75,40,40);
    ellipse(width-width/8,75,10,10);



  for(var j=0; j<fog.length;j++){
    push();
    translate(0,j*14);
    fog[j].display();
    pop();
  }

}
