//Feedback.

var socket = io.connect(window.location.origin);

//The push this new spot onto the array
socket.on('ax-reply', function (data) {
  println("Receiving:" +data);
  lines = String(data);

});


//Things to do:
//Socket!

var myString = "";
var fileString = "";
var theirString = "";
var charCount = 0;
var charPos = 0;
var fade = 255;
var fadeIn = 255;
var fadeColor = 255;
var fadeOut = 0;
var speed = 1;
var anxious, sad, lonely, angry, lines;
var anxiousButton, sadButton, lonelyButton, angryButton;
var r, g, b;
var starter = false;

function setup(){
  var cnv = createCanvas(windowWidth,windowHeight);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  smooth();

  //Loading strings. Lines will be left blank by default.
  lines = loadStrings('files/blank.txt');
  sad = loadStrings('files/sad.txt');
  anxious = loadStrings('files/anxious.txt');
  lonely = loadStrings('files/lonely.txt');
  angry = loadStrings('files/angry.txt');

  //setting up buttons
  anxiousButton = createButton('anxious');
  sadButton = createButton('sad');
  lonelyButton = createButton('lonely');
  angryButton = createButton('angry');
  anxiousButton.style("font-size", "20");
  sadButton.style("font-size", "20");
  lonelyButton.style("font-size", "20");
  angryButton.style("font-size", "20");
  anxiousButton.size(100,50);
  sadButton.size(100, 50);
  lonelyButton.size(100, 50);
  angryButton.size(100, 50);
  anxiousButton.position(windowWidth/2 - 100, windowHeight/1.75);
  sadButton.position(windowWidth/2, windowHeight/1.75);
  lonelyButton.position(windowWidth/2 - 200, windowHeight/1.75);
  angryButton.position(windowWidth/2 + 100, windowHeight/1.75);
  anxiousButton.mousePressed(aButton);
  sadButton.mousePressed(sButton);
  lonelyButton.mousePressed(lButton);
  angryButton.mousePressed(gButton);

  textFont('Georgia', 40);
  textAlign(CENTER);
  fill(fadeOut);
  text("how do you feel?", width/2, height/2);
}

function draw(){

  if(starter){
    start();
  }



};

function aButton(){
  //emit function to tell the server which emotion
  println("button event");
  socket.emit('ax-button');
  //have lines be filled by the data coming from socket...\
  r = 255;
  g = 55;
  b = 100;
  removeElements();
  starter = true;

}





function sButton(){
  lines = sad;
  r = 100;
  g = 200;
  b = 255;
  removeElements();
  starter = true;
}

function lButton(){
  lines = lonely;
  r = 100;
  g = 200;
  b = 155;
  removeElements();
  starter = true;
}

function gButton(){
  lines = angry;
  r = 255;
  g = 200;
  b = 105;
  removeElements();
  starter = true;
}

function start(){
  background(r, g, b, fadeOut);
  fadeOut += speed;
  fadeIn -= speed;
  if(fadeIn < 150) {speed = 2;}
  if(fadeIn < 1) {speed = 0;}
  noStroke();
  if(fadeIn < 210){
    fill(255, fadeOut);
    rect(width/2, height/8, 4, height/1.25);
  }
  fill(255, fade);
  if(fadeIn < 20) {fade-=0.5;}

  //main text
  textAlign(CENTER);
  text("write something.", width/2, height/15);

  //Setting up the basic text printing.
  fill(255);
  textAlign(LEFT);
  //this is the bit that types the other message!!!
  text(fileString, width/2 + 10, height/8, width/2, height / 1.3);

  //file text
  textAlign(RIGHT);
  text(myString, 0, height/8, width/2, height / 1.3);
  theirString = String(lines);
}

function keyTyped(){
  //TEXT INPUT
  myString = myString + key;

  if(keyCode==ENTER){
    println("Sending:" +myString);
    socket.emit('ax-string', {text:myString});

  }


  //DELETE TEXT
  if(keyCode == BACKSPACE){
    if(myString.length > 0){
      myString = myString.substring(0, myString.length -1);
    }
  }
  charCount++;
  charPos = charCount;
  //FROM files
  if(charCount == 0){
    charPos = 1;
  }
  fileString = fileString + theirString.substring(charPos - 1, charCount);
}
