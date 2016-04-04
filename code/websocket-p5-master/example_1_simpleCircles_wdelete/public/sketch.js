//SOCKET EVENTS

var socket = io.connect(window.location.origin);

//Whenever the server emits 'new-spot', make a new object with the attributes received.
//The push this new spot onto the array
socket.on('new-spot', function (data) {
  var spot = new Spot(data.size, data.x, data.y, data.color);
  spots.push(spot);
});

//Whenever the server emits all-spots, take attributes and make new object,
//then push onto the array.
socket.on('all-spots', function(allspots) {
  for (var i = 0; i < allspots.length; i ++) {
    var data = allspots[i];
    var spot = new Spot(data.size, data.x, data.y, data.color);
    spots.push(spot);
  }
});

//Whenever the server emits kill-spots, kill spot at that index number,
socket.on('kill-spot', function(data) {
  for (var i = spots.length-1; i >= 0; i--){
    console.log('data.index:'+data.index)
    spots.splice(data.index,1);//remove spot
  }
});



var spots = [];
var myColor;

function setup() {
  colorMode(HSB);
  createCanvas(800, 800);
  //make a random color.
  myColor = random(255);


}

function draw() {
  background(0);

  //run through spots array
  for (var i = 0; i < spots.length; i++){
    //display each spot.
    spots[i].display();
  }

  println("length:"+spots.length);
}

function makeSpot(){
  //if pressed add new ellipse
  var newSpot = new Spot(30, mouseX, mouseY, myColor);
  spots.push(newSpot);
  println("spot!");
  //emit the attributes from the object you are sending (you can not send the functions)
  socket.emit('new-spot', {size:newSpot.size, x: newSpot.x, y:newSpot.y, color:newSpot.color});
}


function mousePressed() {
  var p = true;
  //run through array
  for (var i = spots.length-1; i >= 0; i--){
    //if we are over a spot
    if(dist(mouseX,mouseY, spots[i].x, spots[i].y)<spots[i].size/2){

      spots.splice(i,1);//remove spot
      socket.emit('kill-spot', {index:i});

      p=false; //set to false so we dont make another spot.
    }

    if(p){ //if true, make a new one.
      makeSpot();
      p=false;
    }
  }




}


function mouseDragged() {
  //set color to random color
  makeSpot();
}

//*************** This is a different way to write a class in javascript *************
//it's fine to do it the other way
function Spot(size, x, y, color) { //it has 3 arguments size, x and y
  this.size = size;
  this.x = x;
  this.y = y;
  this.color=color;

}

//and a function called 'make' which draws it
Spot.prototype.display = function() {
  fill(this.color, 255, 255);
  ellipse(this.x,this.y,this.size,this.size);

}



Spot.prototype.remove=function(s){
  //  if((this.over)&&(mouseIsPressed)){

  //  }
  //for (var i = particles.length-1; i >= 0; i--) { //go backwards

  //  }

}
