var walker;
var walkerArray = [];

function setup() {
  createCanvas(640,360);
  walker = new Walker();
  background(235);
  for(var i = 0;i<4;i++){
    walkerArray[i]= new Walker();
  }
};

function draw() {
  for(var i = 0;i < 4;i++){
    walkerArray[i].walk();
    walkerArray[i].display();
  }
  // walker.walk();
  // walker.display();
};

function Walker() {
  this.position = createVector(width/2,height/2);
  this.noff = createVector(random(1000),random(1000));
  //variable to hold color for walker
  this.g = 255;
  this.b = 150;
  this.sw = 2;

  this.display = function() {
    strokeWeight(this.sw);
    fill(0,this.g,this.b);
    stroke(5,0,0);
    ellipse(this.position.x, this.position.y, 48, 48);
  }

  this.walk = function() {
    this.position.x = map(noise(this.noff.x),0,1,0,width);
    this.position.y = map(noise(this.noff.y),0,1,0,height);
    this.g = map(noise(this.noff.x),0,1,0,255);
    this.b = map(noise(this.noff.x),0,1,0,150);
    this.sw = map(noise(this.noff.x),0,1,0,2);
    this.noff.add(0.01,0.01,0);
  }
}
