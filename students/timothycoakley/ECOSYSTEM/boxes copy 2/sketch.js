//LITERAL OBJECT
var socket = io.connect('http://localhost:3000');

var boxes = [];

function setup() {

  box= new Box (100, 200, 70);
  createCanvas(1000,1000);
  var gridsize = width/20;
  for (var x= 0; x < width; x+=gridsize){

    for (var y = 0; y < height; y+=gridsize){
      var box = new Box(x, y, gridsize);

    boxes.push(box);
  }
  
}

}

function draw() {
  background(0);
  for (var i = 0; i<boxes.length; i++){
    boxes[i].display();
  }
  

}

function mouseDragged(){
for (var i = 0; i<boxes.length; i++){
  var b = boxes[i];
  if(mouseX > b.x && mouseX < b.x + b.size && mouseY > b.y && mouseY < b.y+b.size){
    socket.emit('box-clicked', {boxNumber: i});
    b.color = 100;

  }

  }

}


function mousePressed(){
for (var i = 0; i<boxes.length; i++){
  var b = boxes[i];
  if(mouseX > b.x && mouseX < b.x + b.size && mouseY > b.y && mouseY < b.y+b.size){

    b.color = 0;

  }

  }

}
function Box(x, y, size){

  this.x = x;
  this.y = y;
  this.size = size;


  this.display = function() {
    if (this.color){
      fill(this.color, 255,255);
   } else {
  fill(0);
   }
    rect(this.x, this.y, this.size, this.size)
  }
}


