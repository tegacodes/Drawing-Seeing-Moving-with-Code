var creature;


function setup() {
  createCanvas(600, 400);
  creature = new Creature();
}

function draw() {
  background(200);
  creature.display();
  creature.move();

}


function Creature() {
  this.x = 300;
  this.y = 200;
  this.y2 = 275;
  this.x21 = this.x-25;
  this.x22 = this.x+25;
  this.display = function() {
    fill(170);
    noStroke();
    ellipse(this.x,this.y,50,50);
    stroke(170);
    strokeWeight(10);
    line(this.x-25,this.y,this.x21,this.y2); //left arm
    line(this.x+25,this.y,this.x22,this.y2); //right arm
    line(this.x-7,this.y-10,this.x-7,300); //left leg
    line(this.x+7,this.y-10,this.x+7,300); //right leg
    stroke(70,250,215);
    strokeWeight(5);
    line(this.x-7,this.y,this.x-7,this.y-10); //left eye
    line(this.x+7,this.y,this.x+7,this.y-10); //right eye
  };
  this.move = function() {
    var handsx = random(-3,3);
    var handsy = random(-3,3);
      this.y2 += handsy;
      this.x21 += handsx;
      this.x22 += handsx;

    var stepx = random(-3,3);
      this.x += stepx
  };
};
