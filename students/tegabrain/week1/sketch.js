var startAngle = 0;
var angleVel;
var speed=0.1;
var angle;

var aSlider;
var bSlider;

var tx = 20;
var ty = 300;

var px = 20;
var py = 350;
function preload(){

}


function setup(){
  createCanvas(400,400);
  //put in the css width for the slider

  fill(0);
  textSize(12);
  textFont("Georgia");

  smooth();


  aSlider= createSlider(0,50,40);
  aSlider.position(tx-5, ty+10);



  bSlider= createSlider(0,50,10);
  bSlider.position(px-5, py+10);



}
function draw(){
  background(255);
  noFill();
  stroke(200);
  rect(0,0,399,399);
  fill(0);
    fill(0).strokeWeight(0).textSize(12);
  text("Change the anglular velocity:",tx,ty);
  text("Change the vertical speed of each ball:",px,py);



  angleVel = aSlider.value()/100;
  speed = bSlider.value()/100;

  angle = startAngle;

  for (var x=0; x<=width; x+= 24){

    var y = map(sin(angle), -1,1,0,height/2);
    strokeWeight(1);
    stroke(237,34,93);
    fill(0,50);
    ellipse(x,y,48,48);
    angle = angle+ angleVel;
  }
  startAngle= startAngle + speed;

}
