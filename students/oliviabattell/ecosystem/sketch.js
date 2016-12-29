

var movers = [];
var weatherData;
var attractors = [];

//loads new york wind direction
function preload(){
  var url = "http://api.openweathermap.org/data/2.5/weather?q=New%20York,NY&APPID=7bbbb47522848e8b9c26ba35c226c734";
  weatherData = loadJSON(url);
}

function setup() {
  createCanvas(windowWidth, windowHeight); //canvas size of window
//bug array
  for (var i = 0; i < 50; i++) {
    movers[i] = new Mover(random(0.1, 2), random(width), random(height));
  }
//bat array
  for (var g = 0; g < 2; g++) {
    attractors[g] = new Attractor(random(width), random(height));
  }
  //attractor = new Attractor();
}

function draw() {
  background(0,0,50,150);
  //background(255);

  for (var g = 0; g < attractors.length; g++) {
    attractors[g].display();
    attractors[g].wind();
}

  for (var g = 0; g < attractors.length; g++) {

    for (var i = 0; i < movers.length; i++) {

      movers[i].update();
      movers[i].display();
      movers[i].checkEdges();

    attractors[g].collide(movers[i]);
    if(attractors[g].bang==true){
      movers.splice(i,1);
      attractors[g].bang=false;
      }
    }
  }
};

function setWeather(weather) {
  var angle = radians(weather.wind.deg);
  var windmag = weather.wind.speed;
  wind = p5.Vector.fromAngle(angle);
};

// spawn new bugs
function keyPressed() {
  if (key == 'A') {
    createVector(random(0, width), random(0, height));
    movers.push(new Mover(false));
  }
    if (key == 'S') {
    createVector(random(0, width), random(0, height));
    attractors.push(new Attractor(false));
  }
};

