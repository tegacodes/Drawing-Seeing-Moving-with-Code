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