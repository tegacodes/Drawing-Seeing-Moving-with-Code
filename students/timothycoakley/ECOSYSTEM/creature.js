var bubble = {
  x: 300,
  y: 200,
  display: function() {
    stroke(75,75,75);
    strokeWeight(4);
    fill(210,180,140);
    stroke(25,25,25);
    ellipse(220,220,500,500);
    fill(25,25,25);
    //hair
    ellipse(200,70,500,230);
    ellipse(200,70,500,200);
    ellipse(200,70,500,180);
    ellipse(200,70,500,160);
    ellipse(200,70,500,140);
    ellipse(200,70,500,100);
    ellipse(200,70,500,50);
    ellipse(200,70,500,10);
    fill(255,0,0);
    ellipse(this.x, this.y, 50, 50);
    ellipse(this.y, this.x, 50, 50);
    fill(0);
    ellipse(this.x, this.y, 20, 10);
    ellipse(this.y, this.x, 20, 10);

      fill(222,184,135);
    ellipse(300,300,25,25);
    fill(0);
    ellipse(340,350,70,75);


  },


function setup() {
  mySound.setVolume(0.1);
  mySound.play();
}


  move: function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}

function setup() {
  createCanvas(1000, 1000);


}

function draw() {
  background(55);
  bubble.move();
  bubble.display();
}

var socket = io.connect('http://localhost:3000');
socket.on('box-clicked', function(data){
  console.log(data);
  boxes[data.boxNumber].color = data.color;
})
socket.on('initialize', function(allboxes){
  for (var i =0;i<allboxes.length; i++) {
  var b = allboxes[i];
  boxes[b.boxNumber].color = b.color;
}
});
// var = myColor;
var boxes = [];
function setup() {
  myColor = random(255);
  colorMode(HSB);
  createCanvas (500,500);
  var gridsize = width/40;
  for (var x = 0; x < width; x += gridsize) {
    for(var y=0; y < height; y += gridsize) {
      var box = new Box(x, y, gridsize);
      boxes.push(box);
    }
  }
}
function draw() {
  background (0);
  for (var i = 0; i<boxes.length; i++) {
    boxes[i].display();
  }
}
function mouseDragged(){
  for (var i = 0; i<boxes.length; i++) {
    var b = boxes[i];
    if (mouseX > b.x && mouseX < b.x + b.size &&
      mouseY > b.y && mouseY < b.y + b.size) {
      socket.emit('box-clicked', {boxNumber: i, color: myColor})
      b.color = myColor;
    }
  }
}
function mousePressed(){
  for (var i = 0; i<boxes.length; i++) {
    var b = boxes[i];
    if (mouseX > b.x && mouseX < b.x + b.size &&
      mouseY > b.y && mouseY < b.y + b.size) {
      
      b.color = 0;
    }
  }
}
function Box(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.display = function() {
    if(this.color) {
      fill(this.color, 255, 255);
    } else {
      fill(0);
    }
    rect(this.x,this.y,this.size,this.size);
  }
};
