var ctracker;

//car parameters
var course;
var startPoint;
var car;
var wall;

//variables read from face
var distCalc;
var faceAngle;



function setup() {
  // setup camera capture
  var videoInput = createCapture();
  videoInput.size(400, 300);
  videoInput.position(0, 0);

  // setup canvas
  var cnv = createCanvas(800, 600);
  cnv.position(0, 0);
  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);

  noStroke();
  //hide camera displays.
  // videoInput.hide();
  // cnv.hide();

  //car setup  //car sprite setup
  carImage = loadImage("assets/asteroids_ship0001.png");
  car = createSprite(width/2, height/2);

  //wall sprite
  wallImage = loadImage("assets/flappy_ground.png");
  wall = createSprite(10, 400);

  car.maxSpeed = 6;
  car.friction = .98;
  car.setCollider("circle", 0,0, 20);

  car.addImage("normal", carImage);
  car.addAnimation("thrust", "assets/asteroids_ship0002.png", "assets/asteroids_ship0007.png");

  wall.addImage("normal", wallImage);


}
function draw() {
  clear();
  // get array of face marker positions [x, y] format
  var positions = ctracker.getCurrentPosition();
  println("length:"+positions.length);

  //do all the caluclations on the array of face points in this for loop
  for (var i=0; i<positions.length; i++) {
    // set the color of the ellipse based on position on screen
    fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 255), 255);
    // draw ellipse at each position point
    ellipse(positions[i][0], positions[i][1], 8, 8);
    //distance between top and bottom of mouth
    distCalc = dist(positions[57][0],positions[57][1],positions[60][0],positions[60][1]);
    println("distance"+distCalc);

    //face tilting is caluclated by comparing y value point 33 and point 7.

    faceAngle = positions[33][0]-positions[7][0];

    print("faceAngle"+faceAngle);



  }



  //draw the car stuff over the top of the video
  background(255,0,0); //turn this on and off to see the face tracking **********

  //test for car collision with wall
  car.collide(wall);

  //car rotation coming from angle of the face.
  if(faceAngle>5)
  car.rotation -= 4;
  if(faceAngle<-5)
  car.rotation += 4;
  if(distCalc>10)
  {
    car.addSpeed(.2, car.rotation);
    car.changeAnimation("thrust");
  }
  else
  car.changeAnimation("normal");

  //draw sprites
  drawSprites();


}
