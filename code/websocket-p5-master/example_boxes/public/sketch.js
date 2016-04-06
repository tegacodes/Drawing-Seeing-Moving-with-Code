var socket = io.connect(window.location.origin);

socket.on('color-box', function (data) {
  boxes[data.index].color = data.color;
});

socket.on('all-boxes', function(allboxes) {
  for (var i = 0; i < allboxes.length; i ++) {
    var data = allboxes[i];
    boxes[data.index].color = data.color;
    console.log(data);
  }
});

socket.on('jiggle', function(data) {
 jiggleTarget = +data.jiggle;
});


var boxes = [];
var myColor;
var jiggle = jiggleTarget = 0;

function setup() {
	colorMode(HSB);
	createCanvas(800, 800);

	myColor = random(255);

	var gridsize = width/80;
  for (var x = 0; x < width; x+= gridsize) {

	  for (var y = 0; y < height; y+= gridsize) {
	  	var box = new Box(gridsize, x, y);
	  	boxes.push(box);
	  }
  }
}

function draw() {
	background(0);
  jiggle = lerp(jiggle, jiggleTarget, .1);

  for (var i = 0; i < boxes.length; i++){
  	boxes[i].run();
  }
}

function colorBox() {
	for (var i = 0; i < boxes.length; i++){
		if (boxes[i].over()) {
			boxes[i].color = myColor;
      socket.emit('color-box', {color: myColor, index: i});
		}
	}
}

function mousePressed() {
  colorBox();
}

function mouseDragged() {
  colorBox();
}

function Box(size, x, y) {
	this.size = size;
	this.x = x;
	this.y = y;
}

Box.prototype.over = function() {
  return (mouseX >= this.x && mouseX < this.x+this.size && mouseY >= this.y && mouseY < this.y + this.size);
};

Box.prototype.run = function() {
  stroke(5);
  if (this.over()) {
		fill(255);
  } else if (this.color) {
		fill(this.color, 255, 255);
	} else {
		fill(0);
	}
  var x = this.x + random(-jiggle, jiggle);
  var y = this.y + random(-jiggle, jiggle);
	rect(x, y, this.size, this.size);
}
