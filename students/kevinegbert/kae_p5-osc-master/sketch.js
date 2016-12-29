var img;  // Declare variable 'img'.

// c of c minor 13
 var a = new Audio('audio/a.mp3');
// d# of c minor 13
var s = new Audio('audio/s.mp3');
// a of c minor 13
var d = new Audio('audio/d.mp3');
// a# of c minor 13
var f = new Audio('audio/f.mp3');
// 808
var b = new Audio('audio/b.mp3');
// mbira 1
var q = new Audio('audio/q.mp3');
// mbira 2
var w = new Audio('audio/w.mp3');
// mbira 3
var r = new Audio('audio/r.mp3');
// mbira reverse
var e = new Audio('audio/e.mp3');
// pringle crunch 1
var j = new Audio('audio/j.mp3');
// pringle crunch 2
var k = new Audio('audio/k.mp3');
// pringle crunch 3
var l = new Audio('audio/l.mp3');
// aluminum can tab
var o = new Audio('audio/o.mp3');
// rye beach
var z = new Audio('audio/z.mp3');



function preload(){ //special function that runs first as javascript is asynchronous
img = loadImage("assets/blue1.png");  // Load the image
  //p5 can render jpg, gif, png images and vectors as svg

}
// we need a handle to the socket to send our osc values
var socket;
var isConnected;
var x = 10;
var y = 10;

// make an array of Balls
var balls = [];

function setup() {
	createCanvas(800, 600);
	setupOsc(8000, 12000);
	

	// make 4 new Balls
	for (var i=0; i<4; i++) {
		balls.push(new Ball());
	}
}

function draw() {
	background(0,0,0,10);

// image(img, 0, 0, width, height);

		if (keyIsDown(LEFT_ARROW))
	 balls[0].position.x-=5;

 if (keyIsDown(RIGHT_ARROW))
	balls[0].position.x+=5;

 if (keyIsDown(UP_ARROW))
	 balls[0].position.y-=5;

 if (keyIsDown(DOWN_ARROW))
	 balls[0].position.y+=5;

// fill(200);
// rect(x, y, 100,100);

	// check every combination of two Balls.
	for (var i=0; i<balls.length; i++) {
		for (var j=i+1; j<balls.length; j++) {
			// check if they are hitting each other
			// if they are, bounce them
			if (checkIfBouncing(balls[i], balls[j])) {
				// get the angle between the balls when they are intersecting
		        var ang = atan2(balls[i].position.y - balls[j].position.y, balls[i].position.x - balls[j].position.x);
				// then set their velocities according to the angle (normalized to their speed)
				// not really how balls bounce, but keep it simple
				balls[i].velocity = {x: balls[i].getSpeed() * cos(ang), y: balls[i].getSpeed() * sin(ang) };
				balls[j].velocity = {x: balls[j].getSpeed() * cos(ang+PI), y: balls[j].getSpeed() * sin(ang+PI) };
	      }
	    }
    }

	// update and draw Balls
	for (var i=0; i<balls.length; i++) {
		balls[i].update();
	    balls[i].draw();
	}

	// get each of the 4 Balls x and y coordinates, and normalize them between 0 and 1
	// this gives you 8 variables between 0 and 1
	var v1 = balls[0].position.x / width;
	var v2 = balls[0].position.y / height;
	var v3 = balls[1].position.x / width;
	var v4 = balls[1].position.y / height;
	var v5 = balls[2].position.x / width;
	var v6 = balls[2].position.y / height;
	var v7 = balls[3].position.x / width;
	var v8 = balls[3].position.y / height;

	// send these over OSC to AbletonOSC after you've selected 8 parameters to modify
	if (isConnected) {
	  // 1 ellipse
			 //socket.emit('message', ['/wek/outputs', v1, v2]);
	  // 2 ellipses
			 //socket.emit('message', ['/wek/outputs', v1, v2, v3, v4]);
	 // 4 ellipses
		 socket.emit('message', ['/wek/outputs', v1, v2, v3, v4, v5, v6, v7, v8]);
	

	}
}

function receiveOsc(address, value) {
	console.log("received OSC: " + address + ", " + value);
}

function sendOsc(address, value) {
	socket.emit('message', [address, value]);
}

function setupOsc(oscPortIn, oscPortOut) {
	socket = io.connect('http://127.0.0.1', { port: 8081, rememberTransport: false });
	socket.on('connect', function() {
		socket.emit('config', {
			server: { port: oscPortIn,  host: '127.0.0.1'},
			client: { port: oscPortOut, host: '127.0.0.1'}
		});
	});
	socket.on('connect', function() {
		isConnected = true;
	});
	socket.on('message', function(msg) {
		if (msg[0] == '#bundle') {
			for (var i=0; i<msg.length; i++) {
				receiveOsc(msg[i][0], msg[i].splice(1));
			}
		} else {
			receiveOsc(msg[0], msg.splice(1));
		}
	});
}


//// define Ball class

function Ball() {
  this.position = {x:random(width), y:random(height)};
  this.velocity = {x:random(-2, 2), y:random(-2, 2)};
  this.radius = random(20, 70);

  this.update = function() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.x > width - this.radius) {
      this.velocity.x = -abs(this.velocity.x);
    }
    else if (this.position.x < this.radius) {
      this.velocity.x = abs(this.velocity.x);
    }
    if (this.position.y > height - this.radius) {
      this.velocity.y = -abs(this.velocity.y);
    }
    else if (this.position.y < this.radius) {
      this.velocity.y = abs(this.velocity.y);
    }
  }

  this.getSpeed = function() {
    return sqrt(pow(this.velocity.x, 2) + pow(this.velocity.y, 2));
  }

  this.draw = function() {
		// noStroke();
		 noFill();
		// strokeWeight(10);
     stroke(255);
    // ellipse(this.position.x, this.position.y, 2 * this.radius, 2 * this.radius);
        ellipse(this.position.x, this.position.y, 40, 40);

  }
}

function checkIfBouncing(a, b) {
  var d = dist(a.position.x, a.position.y, b.position.x, b.position.y);
  if (d < a.radius + b.radius) {
    return true;
  } else {
    return false;
  }
}



// Produce sound using key presses...
function keyPressed() {
    if (key == 'A') {
  a.play();
  background(200,100,0);

  }

    if (key == 'B') {
  b.play();
  background(0,100,80);

    }
      if (key == 'Q') {
  q.play();
  background(200,50,80);

    }
       if (key == 'W') {
  w.play();
  background(100,200,220);

    }
        if (key == 'R') {
  r.play();
  background(700,200,70);

    }
         if (key == 'E') {
  e.play();
  background(0,200,70);

    }
            if (key == 'J') {
  j.play();
  background(80,20,70);

    }
               if (key == 'K') {
  k.play();
  background(200,180,20);

    }
                   if (key == 'L') {
  l.play();
  background(100,180,00);

    }
                       if (key == 'O') {
  o.play();
  background(255,200,200);

    }
                           if (key == 'Z') {
  z.play();
  background(55,250,100);

    }
                               if (key == 'S') {
  s.play();
  background(35,70,120);

    }
                                  if (key == 'D') {
  d.play();
  background(95,200,80);

    }
                                  if (key == 'F') {
  f.play();
  background(235,70,220);

    }
  }
