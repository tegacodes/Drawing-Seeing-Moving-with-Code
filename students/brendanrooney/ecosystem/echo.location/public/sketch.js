//echo.location by Brendan Rooney

//Seeking behavior adpated from Craig Reynolds by Daniel Shiffman
//Recordings from the Iowa University Electronic Music Dept.

//This is an experiment in creating an organic musical environment
//that has a limited amount of control from (and of) the user.

// ----------------------------------------------------------------//

//Establishing variables/counters.
var v = [];
var b;
var s =[];
var naturalDeath = 0;
var naturalBirth = 0;
var deathByChoice = 0;
var bornByChoice = 0;
var deathCount = 0;

//Preload is a necessary function with p5.Sound.
//This simply loads the sounds before anything else in the project.
//The sounds have been made into fairly small mp3 files, so
//they shouldn't take too long to load.

//I chose vibraphone/xylophone sounds for the creatures.
//When overlapping they have a wind-chime quality.

function preload() {
  xyl = loadSound('sounds/xyl.mp3');
  xylFBow = loadSound('sounds/xylFBow.mp3');
  xylABow = loadSound('sounds/xylABow.mp3');
  xylC = loadSound('sounds/xylC.mp3');
  xylD = loadSound('sounds/xylD.mp3');
  xylE = loadSound('sounds/xylE.mp3');
  xylF = loadSound('sounds/xylF.mp3');
  xylG = loadSound('sounds/xylG.mp3');
  xylA = loadSound('sounds/xylA.mp3');
  xylB = loadSound('sounds/xylB.mp3');
  xylGHi = loadSound('sounds/xylGHi.mp3');
  xylAHi = loadSound('sounds/xylAHi.mp3');
}

function setup() {

//Sounds are processed / volume adjusted.
  reverb = new p5.Reverb();
  delay = new p5.Delay();
  delay.process(xylGHi, 0.120, 0.17, 2300);
  delay.process(xylAHi, 0.120, 0.17, 2300);
  reverb.process(xyl, 10, 100);
  reverb.process(xylFBow, 10, 100);
  reverb.process(xylABow, 10, 100);
  reverb.process(xylGHi, 10, 100);
  reverb.process(xylAHi, 10, 100);
  reverb.process(xylC, 10, 100);
  xyl.setVolume(0.9);
  xylFBow.setVolume(0.5);
  xylABow.setVolume(0.5);
  xylA.setVolume(0.1);
  xylB.setVolume(0.1);
  xylC.setVolume(0.01);
  xylD.setVolume(0.1);
  xylE.setVolume(0.1);
  xylF.setVolume(0.1);
  xylG.setVolume(0.1);
  xylGHi.setVolume(0.001);
  xylAHi.setVolume(0.001);
//Setting up canvas / objects
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 3; i++) {
//The vehicles are called with slightly randomized masses.
    v[i] = new Vehicle(random(2, 3), random(100, width - 100), random(100, height - 100));
  }
  for (var i = 0; i < 10; i++) {
//The vehicles are called with slightly randomized masses.
    s[i] = new Small(random(1), random(100, width - 100), random(100, height - 100));
  }
  b = new Biggie(4, width / 2, height / 2)
}

function draw() {

//The text is a way of changing user behavior. Hopefully it will limit mouse clicking.
//The colors for each counter change depending on the value that they represent.
  background(0);
  textSize(height / 30);
  textStyle(ITALIC);
  fill(255, 255 - (naturalDeath * 20), 255);
  text("died of old age:" + naturalDeath, width/10, height / 2 - (height/15));
  fill(255 - (naturalBirth * 10), 255, 255 - (naturalBirth * 10));
  text("born in harmony:" + naturalBirth, width/10, height / 2 - (height/8));
  fill(255-bornByChoice*15);
  text("born in dischord:" + bornByChoice, width/10, height / 2 + (height/15));
  fill(255-deathCount);
  text("died by choice:" + deathByChoice, width/10, height / 2 + (height/8));
  if(deathCount >= 250){
    fill(255);
    text("wait, and listen.", width/10, height/2 + (height/10))
  }

  //Attractors
  var repel = createVector(400, -400);
  var bigCenter = createVector(b.position.x, b.position.y);

  for(var i = 0; i < s.length; i++){
    s[i].display();
    s[i].fade();
  }

  //Biggie
  b.display();
  b.fade();

  //REMOVE DEAD ONES!
  for (var i = v.length - 1; i >= 0; i--) {
    if (v[i].isDead()) {
      v.splice(i, 1);
      naturalDeath++;
      xylG.play();
    }
  }

  //Collision detection and setting up the others-seeking vector.
  for (var i = 0; i < v.length; i++) {
    for (var j = 0; j < v.length; j++) {
      if (i !== j) {
        v[i].collide(v[j]);
        if (v[i].bang == true) {
          v[i].fitness++;
        }
        var center = createVector(v[j].position.x, v[j].position.y);
      }
    }
    v[i].collide(b);
    if (v[i].bang == true) {
      v[i].fitness++;
    }

    //Friction
    var c = 0.01;
    var normal = 1;
    var frictionMag = c * normal;
    var friction = v[i].velocity.copy();
    friction.mult(-1);
    friction.normalize();
    friction.mult(frictionMag);

    //Applying forces, calling functions.

    v[i].applyForce(friction);
    v[i].arrive(bigCenter);
    v[i].arrive(center);
    v[i].update();
    v[i].display();
    v[i].fade();

    //Making new vehicles.
    //A bunch of things happen at once: every vehicle pushes away from eachother
    //so that they aren't right on top of eachother, making new vehicles constantly.
    //Also, the value of b.blue and v.redLow are increased every time, making the
    //overall color more vibrant with each new life.

    if (v[i].fitness > 20) {
      v[i].applyForce(repel);
      v.push(new Vehicle(random(2, 3), random(width), random(height)));
      s.push(new Small(random(1), random(width), random(height)));
      b.blue += 20;
      v[i].redLow += 10;
      xylE.play();
      naturalBirth++;
      v[i].fitness = 0;
    }

    if (v.length > 5) {
      v.splice(i, 1)
    }

  }
}

var mousePressed = function() {

  //The user is given power to make new vehicles.
  //However, every time that they do, the world becomes slightly
  //Less saturated, and there is a chance that they will remove pre-existing
  //vehicles in the process. There is a slight morality underpinning the
  //interaction that the user has with the program.

  b.blue -= 20;
  v.redLow -= 20;
  if(deathCount<250){
  v.push(new Vehicle(random(2, 3), mouseX, mouseY));
  bornByChoice++;
    if (v.length >= 5) {
      deathByChoice++;
      deathCount += 15;
    }
  }

  //Three different tones for each part of the mouse.
  //From a musical standpoint, they are less immediately appealing
  //Than the tones that come from the natural birth/death process,
  //But they can create some interesting - if dissonant - harmonies.

  if (mouseButton == LEFT) {
    xylB.play();
  } else if (mouseButton == RIGHT) {
    xylD.play();
  } else {
    xylA.play();
  }
}
