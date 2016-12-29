var socket = io.connect(window.location.origin);

// ===========================================================
//                      Socket Listeners
// ===========================================================

socket.on('host', function(data) { //Listen if server makes user 'host'
  host = data; //Make 'host'
  console.log("You are new host");
}); //Found it was better to have a single 'host' that would be  responsible for updating new connections
//It eliminated the need to be constantly updating the server data for everything

socket.on('new host', function() { //Listen if need new 'host'
  socket.emit('check host');
});

socket.on('new guy', function(data) { //If 'host', this will be called when a new user connects
  socket.emit('host report', {dir:direction,who:data}); //Send current direction queue
  socket.emit('receiveB', {bod:snake,who:data}); //Send current snake body
  console.log("Sent");
});

socket.on('current', function(body) { //Listen for snake data from server
  console.log("Snake " + body);
  snake = []; //Empty default snake array
  for(var i = 0; i < body.length; i++){
      snake.push(body[i]); //Fill snake array with updated body
  }
});

socket.on('serverQ', function(entries) { //Listen for queue update
  direction = []; //Empty default direction array
  if(entries.length != 0) { //Check if queue isn't empty
    if(entries[0][0] === undefined){ //Direction[] is multi dimentional, however if length is 1 the data sent will be sent as a single dimention array of length 2
      direction.push([entries[0],entries[1]]); //This method allows us to differentiate between a single dimention with length 2 from multi with length 2
    } else {
        for(var i = 0; i < entries.length; i++){ //If multi case
          direction.push(entries[i]);
        }
      }
  }
  console.log("Got serverQ");
});

socket.on('hold', function(data) { //Update default direction
  hold[0] = data[0];
  hold[1] = data[1];
  console.log("got hold");
});

socket.on('add', function(data) { //Updates direction queue
    var directionX = data.dirX;
    var directionY = data.dirY;

    direction.unshift([directionX, directionY]); //Add new command to beginning of array as shorten() and pop() are used
});

socket.on('server color', function(col) { //Update whole color array
  allColors = []; //Empty color array
  for(var i = 0; i < col.length; i++) {
    allColors[i] = col[i];
  }
});

socket.on('locked', function(loc) { //Listen for apple collect event

  allColors = [];
  for(var i = 0; i < loc.length; i++) {
    allColors[i] = loc[i];
  }
  hits++; //This is for the method I came up with for increasing snake size
  //Eliminates need to know the location of the apple collected or snake
  //See implimentation in time() function
});

socket.on('update messages', function(data) { //Listen for chat box update
  var loc = data.col;
  messages.unshift([data.mes,loc[0],loc[1],loc[2]]); //Puts new message at top
  console.log('update chat');
}); //Since I expect a lot of messages, there isn't much of a need to save all the entries

// ==============================================================
//                        Begin Sketch
// ==============================================================

var snake = [[0, 0],[1, 0],[2, 0]]; //Snake
var allColors = [[255,0,0],[255,0,0],[255,0,0]]; //All colors
var boxes = []; //Holds all boxes
var dimentionX; //Holds dimention of game
var dimentionY;
var timed = 0; //Delay before snake moves
var direction = []; //Holds direction queue
var w;
var h;
var hold = [1, 0]; //Default direction for when queue empty
var a = [];
var host = false; //Default not host
var uColorR, uColorG, uColorB; //For player color
var uColors = []; //User color
var hits = 0;
var messages = []; //Chat box messages
var name = false; //For if the user input their name
var c = 255;
var grid = true;

function setup() {
    var x = 0;
    var y = 0;

    alert("Welcome to Spaz Snake! Please Submit User Name!");
    socket.emit('loaded'); //Request data from 'host' after user reads alert

    h = floor((windowHeight-60)/47); //Base dimention based on window height
    w = h;

    dimentionX = 63;
    dimentionY = 47;
    createCanvas(windowWidth-60, windowHeight-30); //Set canvas to window size

    for (var i = 0; i < dimentionX * dimentionY; i++) { //Create game field
        boxes[i] = new Snake(x, y, w, h); //Create for each box on grid
        //console.log(x);
        x += w;

        if ((i + 1) % (dimentionX) == 0 && i != 0) {
            //console.log("i: "+i+" x: "+x+" y: "+y);
            y += h;
            x = 0;
        }
    }

    uColorR = floor(random(255));
    uColorG = floor(random(255));
    uColorB = floor(random(255));
    uColors.push([uColorR,uColorG,uColorB]);
    for(var i = 0; i < 5; i++) {
      apple(); //Create apple
    }

    console.log(boxes.length);

    console.log(host);
}

function windowResized() { //If user resizes window and refreshes
  resizeCanvas(windowWidth-60, windowHeight-30);
}

//=========================== Key Event ================================

function keyPressed() {
  var directionX; // changes index
  var directionY; // changes index

  if(name === "true") { //Only allow if input user name; for some reason the variable is a string
    if (keyCode === UP_ARROW) {
        directionX = 0;
        directionY = -1;
        console.log("UP");

        socket.emit('keyEvent', {dirX:directionX,dirY:directionY}); //Send command to server
        socket.emit('notify', {com:"Up",col:uColors}); //Send event for chat
    } else if (keyCode === DOWN_ARROW) {
        directionX = 0;
        directionY = 1;
        console.log("DOWN");

        socket.emit('keyEvent', {dirX:directionX,dirY:directionY});
        socket.emit('notify', {com:"Down",col:uColors});
    } else if (keyCode === RIGHT_ARROW) {
        directionX = 1;
        directionY = 0;
        console.log("RIGHT");

        socket.emit('keyEvent', {dirX:directionX,dirY:directionY});
        socket.emit('notify', {com:"Right",col:uColors});
    } else if (keyCode === LEFT_ARROW) {
        directionX = -1;
        directionY = 0;
        console.log("LEFT");

        socket.emit('keyEvent', {dirX:directionX,dirY:directionY});
        socket.emit('notify', {com:"Left",col:uColors});
    }
  } else {
    if(keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW || keyCode === DOWN_ARROW || keyCode === UP_ARROW) { //If trying to play without username
      alert("Please Put in userName!"); //Temporary method, there are better ways
    }
    }
  }

//==================================== Draw =====================================

function draw() {

    time(); //Move snake
    background(255);

    fill(c);
    rect(0,0,dimentionX*w,dimentionY*h);

    if(c == 255){
      stroke(0);
    } else {
      stroke(255);
    }

    if(grid) {
      for (var i = 0; i < dimentionX*w; i += w) { //Draw girdlines
          line(i, 0, i, dimentionY*h);
      }

      for (var i = 0; i < dimentionY*h; i += h) {
          line(0, i, dimentionX*w, i);
      }
    }

    noFill();
    rect(0,0,dimentionX*w,dimentionY*h); //Draw border

    for (var i = snake.length-1; i >= 0 ; i--) { //Displays snake
        var tx = snake[i][0];
        var ty = snake[i][1];

        if (tx == dimentionX) { //Accounts for going out of bounds
            tx = 0;

            snake[i][0] = 0;
        }
        if (tx == -1) {
            tx = dimentionX-1;

            snake[i][0] = tx;

        }
        if (ty == dimentionY) {
            ty = 0;

            snake[i][1] = 0;
        }
        if (ty == -1) {
            ty = dimentionY-1;

            snake[i][1] = ty;
        }
        //Since boxes[] isnt multi, I have to calculate
        boxes[tx + ty * dimentionX].display(allColors[i]); //Vast majority of the boxes aren't displayed
    }

    // for(var i = 0; i < boxes.length; i++) {
    //   boxes[i].display();
    // }

    for(var i = 0; i < a.length; i++) {
      a[i].display(uColors); //Display apple
    }

    chat(); //Run chat

    timed++; //Snake movement is based on draw framerate; one of the reasons there is latency
}

//================================= Move Snake Function ==================================

function time() { //Moves snake
    direct = direction.length - 1;
    if (timed == 5) { //Only move if draw looped 5 times

      if (direction.length > 0) {
          snake.unshift([snake[0][0] + direction[direct][0], snake[0][1] + direction[direct][1]]); //Adds snake segment as new head

          if (check()) { //Check if new head is over apple
            if(hits == 0){ //If hits > 0, the snake body will be extended
              shorten(snake); //Otherwise, to account for added segment remove tail
            } else {
              hits--; //If left snake extended
            }
          } else { //If over apple
              apple(); //Create new apple
              shorten(snake); //In order to keep all instances as similar as possible, the snake can only be extended if the server increases hits
              allColors.push(uColors);
              socket.emit('target', uColors); //Tell server apple collected
          }
          if (direction.length > 0) {
              hold = direction.pop(); //Update default direction
          }
      } else { //If queue is empty, default move copy of above
          snake.unshift([snake[0][0] + hold[0], snake[0][1] + hold[1]]);
          if (check()) {
            if(hits == 0){
              shorten(snake);
            } else {
              hits--;
            }
          } else {
              apple();
              shorten(snake);
              allColors.push(uColors);
              socket.emit('target', uColors);
          }
      }
        timed = 0; //Reset counter
    }
}

// ============================================
//             Snake Body Class
// ============================================

function Snake(x, y, w, h) { //My simple body object
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.getX = function() {return x;}
    this.getY = function() {return y;}

    this.display = function(color) {
        colorMode(HSB); //Originally I was using RGB because earlier when working in HSB the data coming back from the server came in the form of an object
        //Decided to do a last minute test and now it works
        fill(color[0], 255, 255); //Even though I only use one value, it works this way coming back from the server
        noStroke();
        rect(x, y, w, h);
    }
}

// ============================================
//              Small Functions
// ============================================

function apple() { //Creates new apple in a random location
    var nx = int(random(0, dimentionX));
    var ny = int(random(0, dimentionY));

    a.push(new Snake(nx * w, ny * h, w, h)); //Uses body object
}

function check() { //Check if over apple
  for(var i = 0; i < a.length; i++) {
    if(snake[0][0]*w == a[i].getX() && snake[0][1]*h == a[i].getY()) {
      a.splice(i,1);
      return false;
    }
  }
  return true;
}

function chat() { //Draws the chat box and messages
  noFill();
  stroke(0);
  rect(dimentionX*w+10,0,windowWidth-(dimentionX+4)*w,dimentionY*h);
  textSize(h*2);
  if(messages.length > 0) {
    if(messages.length*h*2+80 > dimentionY*h) {
      shorten(messages); //Keeps messages in box
    }
    for(var i = 0; i < messages.length; i++) { //Draw messages
      fill(messages[i][1],messages[i][2],messages[i][3]);
      text(messages[i][0], dimentionX*w+20, i*h*2+80);
    }
  }
}

function sub(data) { //Function for when user submits username
  if(name === "false") {
    name = true;
    console.log(name);
    var urName = data;

    console.log(urName + " Welcome!");
    socket.emit('input name', {nam:urName,col:uColors}); //Send username to server
  }
}

function changeB() { //Change background of field
  if(c == 255) {
    c = 0;
  } else {
    c = 255;
  }
}

function changeC() { //Change user colors
  uColors = [];
  uColorR = floor(random(255));
  uColorG = floor(random(255));
  uColorB = floor(random(255));
  uColors.push([uColorR,uColorG,uColorB]);
}

function changeG() { //Show or hide grid
  grid = !grid;
}
