var button;
var rockbutton;
var zapbutton;
var pizzaCount = 0;
var rockCount = 0;
var roundThing = [];
var rockThing = [];
var flies = [];
var mover = 0;
var throwrock = 0;
var Ani;
var cat;
var meow;
var hiss;
var overlap;
var maxspeed = 15;
var rock;
var lamp;
var fly;
var zap;
var rawr;

function preload(){
  Ani=loadImage("An1.png");
  cat=loadImage("Cat.png");
  rock=loadImage("Rock.png");
  lamp=loadImage("Lamp.png")
  fly=loadImage("Flies.png")
  meow=loadSound("meow.wav");
  hiss=loadSound("hiss.wav");
  zap=loadSound("zap.wav");
  rawr=loadSound("rawr.wav");
}

function setup(){
  createCanvas(500,400);

  //pizza giver button
  button = createButton('Give some Pizza!');
  button.position(200,100);
  button.mousePressed(press);
  for (var i = 0; i < 5; i++){
    roundThing[i] = new Ball(60, 300,random(30, 70));
    //+ (i * 40)
  }

  rockbutton = createButton('Throw a Rock');
  rockbutton.position(210,150);
  rockbutton.mousePressed(click);
  for (var i = 0; i < 3; i++){
    rockThing[i]= new Rock(30,350,50);
  }
  for (var i = 0; i < 6; i++) {
    flies[i]= new Fly(300, 20, 30);
  };
  zapbutton = createButton('Zap a Fly!');
  zapbutton.position(220,200);
  zapbutton.mousePressed(tap);
 
}

function draw(){
  background("#90EE90");
  count1();
  //your character
  image(Ani,50,150,300,300);
  //the cat
  image(cat,400,300,100,100);
  //zap lamp
  image(lamp,350,20,80,80);
  //pizza box
  fill("#D2B48C");
  rect(20,250,100,100);
  fill(0);
  text("Pizza", 55,300);
  //pizza moving
  for (var i = 0; i < roundThing.length; i ++){
    roundThing[i].display();
    roundThing[i].meow();
    if(pizzaCount > i){
      roundThing[i].move();
    }
  }
  //rock moving
  for (var i = 0; i< rockThing.length; i++){
    rockThing[i].display();
    println(rockThing[i].x);
    rockThing[i].hiss();
    if (rockCount > i) {
      rockThing[i].move();
      rockThing[i].bump();
    }
  }
  for (var i = 0; i < flies.length; i ++){
    flies[i].display();
    flies[i].update();
    }
  //roundThing.move();
  //turns background black when you die
  if(pizzaCount > 5){
    background(0);
    fill(255,0,0);
    textSize(50);
    text("You died of starvation",10,250);
    removeElements();
  }
  fill(0);
  count();
    
    if(rockCount > 3){
   // background(0);

   fill(0);
    rect(0,0,500,400);
    fill(255);
    textSize(50);
    text("YOU'RE DEAD", 50,200);
    removeElements();
    noLoop();
    rawr.play();
  }
  fill(0);
  count();
}
//pizza giver function
function press(){
  pizzaCount++;
  mover++;
}
//rock thrower function
function click(){
rockCount++;
throwrock++;
}
function tap(){
 for (var i = 0; i < flies.length; i++){
    flies.splice(i,1);
  }
  zap.play();
}
//life counter
function count(){
  text("Pizzas Lost: " + pizzaCount, 50, 50);
}
//rock throw counter
function count1(){
fill(0);
 text('Rocks thrown: '+ rockCount,50,100);
}

