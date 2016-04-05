//SOCKET EVENTS

var socket = io.connect(window.location.origin);

//Whenever the server emits 'user', make a new object with the attributes received.
//The push this new spot onto the array
socket.on('user', function (data) {
  var newSpot = new Spot(random(255),random(255),random(255),random(width),random(height));
  spots.push(newSpot);

});

var spots =[];

function setup() {
  colorMode(HSB);
  createCanvas(800, 800);


}

function draw() {
  background(0);
  for(var i=0;i<spots.length;i++){
    spots[i].display();
  }


}


function Spot(r,g,b,x,y){
  this.r=r;
  this.g=g;
  this.b=b;
  this.x=x;
  this.y=y;
}

Spot.prototype.display = function(){
  fill(this.r,this.g,this.b);
  ellipse(this.x,this.y,30,30);

}
