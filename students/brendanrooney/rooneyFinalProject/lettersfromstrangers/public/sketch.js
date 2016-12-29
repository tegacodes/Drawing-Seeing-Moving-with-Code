//Letters from Strangers.
//Brendan Rooney, 2016

//Things to still do: figure out how to store multiple entries in JSON
//Figure out how to store multiple data fields (text AND button)
//Refine design elements
//Figure out how to use backspace to delete without moving back a page
//Convert myString into input?

var socket = io.connect(window.location.origin);

socket.on('ax-reply', function (data) {
  println("Receiving:" +data);
  lines = String(data);
});

//Initializing a million variables.
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
var lines;
var anxiousButton, sadButton, happyButton, calmButton;
var saveButton;
var r, g, b;
var starter = false;
var ender = false;
var anxious, sad, happy, calm = false;
var buttonValue;
var userText;
var anxiousText, sadText, happyText, calmText;
var arrayIndex;

//Load JSON - stored locally in files folder. Because it is hosted through
//Heroku, it is able to live update.

function preload(){
  savedText = loadJSON("files/test.json");
}

function setup(){
  anxiousText = savedText[0];
  sadText = savedText[1];
  happyText = savedText[2];
  calmText = savedText[3];

//Centering the canvas.
  var cnv = createCanvas(windowWidth,windowHeight);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  smooth();

//Loading strings. Lines will be left blank by default.
  lines = loadStrings('files/blank.txt');

//setting up buttons. Each has x, y, colors, name, and a value as arguments.
  anxiousButton = new Button(windowWidth/2 - 100, windowHeight/1.75, 100, 200, 155, "anxious", 0);
  sadButton = new Button(windowWidth/2, windowHeight/1.75, 100, 200, 255, "sad", 1);
  happyButton = new Button(windowWidth/2 + 100, windowHeight/1.75, 255, 135, 160, "happy", 2);
  calmButton = new Button(windowWidth/2 - 200, windowHeight/1.75, 255, 200, 105, "calm", 3);
  saveButton = new Button(windowWidth/2 - 50, windowHeight * 0.9, 255, 200, 105, "save", 4);

//Starting Font.
  textFont('Georgia', 40);
  textAlign(CENTER);
  fill(fadeOut);
  text("how do you feel?", width/2, height/2);
}

//The draw function itself is pretty bare, just calling pre-written functions.
function draw(){
  anxiousButton.display();
  sadButton.display();
  happyButton.display();
  calmButton.display();

  if(starter){
    start();
    saveButton.display();
  }
  if(ender){
    end();
  }
};

//There is probably a more elegant way of making these presses that only
//requires one function and some conditionals, but I couldn't figure it out.
//These four buttons are essentially identical.
function aPress(){

  socket.emit('ax-button'); //socket event that starts off a series of actions
  starter = true; //begins the start(); function, calling the main sketch.
  println("anxious!");
  r = anxiousButton.r;//will set the background for start();.
  g = anxiousButton.g;
  b = anxiousButton.b;
  buttonValue = 0;
  buttonLog();
  arrayIndex = floor(random(calmText.length));
  userText = calmText[arrayIndex];
  buttonLog();//sends button data to socket.
}

function sPress(){
  socket.emit('ax-button');
  starter = true;
  println("sad!");
  r = sadButton.r;
  g = sadButton.g;
  b = sadButton.b;
  buttonValue = 1;
  buttonLog();
  arrayIndex = floor(random(happyText.length));
  userText = happyText[arrayIndex];
}

function hPress(){
  socket.emit('ax-button');
  starter = true;
  println("happy!");
  r = happyButton.r;
  g = happyButton.g;
  b = happyButton.b;
  buttonValue = 2;
  buttonLog();
  arrayIndex = floor(random(sadText.length));
  userText = sadText[arrayIndex];
}

function cPress(){
  socket.emit('ax-button');
  starter = true;
  println("calm!");
  r = calmButton.r;
  g = calmButton.g;
  b = calmButton.b;
  buttonValue = 3;
  buttonLog();
  arrayIndex = floor(random(anxiousText.length));
  userText = anxiousText[arrayIndex];
}

//This function sends button choice info
function buttonLog(){
  var choice = {
    buttonValue
  }
    socket.emit('button-choice', choice);
}

function saver(){
    println("Sending:" +myString);
    socket.emit('ax-string', {id:buttonValue,text:myString});
    ender = true;
  }

function start(){
  //Once a button is pressed, the main sketch is loaded.
  //To start, there are multiple fades in/out.
  removeElements();
  background(r, g, b, fadeOut); //New color for each button.
  fadeOut += speed;
  fadeIn -= speed;
  if(fadeIn < 150) {speed = 2;}
  if(fadeIn < 1) {speed = 0;}
  noStroke();
  if(fadeIn < 200){
    fill(255, fadeOut);
    rect(width/2, height/8, 4, height/1.25);
    rect(width/2, height/8, 4, height/1.33);
    text("press 'enter' to delete text", width/2, height/10);
  }
  fill(255, fade);
  if(fadeIn < 20) {fade-=0.5;}
  //main text
  textAlign(CENTER);
  text("match found. tell them how you feel.", width/2, height/19);

  //Setting up the basic user text printing.
  fill(255);
  textAlign(RIGHT);
  text(myString, 0, height/8, width/2, height / 1.3);
  //file text - This turns our JSON file into a string, which is then typed out.
  textAlign(LEFT);
  text(fileString, width/2 + 10, height/8, width/2, height / 1.3);
  //file text - This turns our JSON file into a string, which is then typed
  theirString = String(userText);//stringifying the JSON file
}

function end(){
  background(r, g, b);
  textAlign(CENTER);
  text('thank you for listening.', windowWidth/2, windowHeight/2);
  removeElements();
}

function keyTyped(){
  //Text input and string manipulation.
  myString = myString + key; //Each time the user presses a key, it is added.
  charCount++; //A counter used to alter the JSON string position.
  charPos = charCount;

  if(keyCode == ENTER){
    for(var i = myString.length - (myString.length - 2); i > 0; i--){
      myString = myString.substring(0, myString.length -1);
    }
  }

  //Loading the JSON file one character at a time.
  if(charCount == 0){charPos = 1;}
  fileString = fileString + theirString.substring(charPos - 1, charCount);
}
