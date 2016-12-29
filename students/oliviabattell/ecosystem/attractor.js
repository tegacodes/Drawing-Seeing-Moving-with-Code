


var Attractor = function() {
  this.position = createVector(random(width), random(height));
  this.mass = 20;
  this.wind = createVector(0, 0);
  this.radius = 50;
  setWeather(weatherData);
  this.bang = false;
  this.max = 100;

  this.wind = function(){
    this.position.add(wind);
  };

  this.display = function() {
     fill(0);
     stroke(50);
//bat body
      ellipse(this.position.x, this.position.y, this.radius, 2*this.radius);
//left ear
      triangle(this.position.x-22,this.position.y-25,this.position.x-15,this.position.y-40,this.position.x-35,this.position.y-45);
//right ear
      triangle(this.position.x+22,this.position.y-25,this.position.x+15,this.position.y-40,this.position.x+35,this.position.y-45);
//left wing
      quad(this.position.x-20, this.position.y, this.position.x-30, this.position.y-5, this.position.x-50, this.position.y-40, this.position.x-120, this.position.y+30);
//right wing
      quad(this.position.x+20, this.position.y, this.position.x+30, this.position.y-5, this.position.x+50, this.position.y-40, this.position.x+120, this.position.y+30);

    if (this.position.x > width + this.radius) this.position.x = -this.radius;
    if (this.position.x < -this.radius) this.position.x = width + this.radius;
    if (this.position.y > height + this.radius) this.position.y = -this.radius;
    if (this.position.y < -this.radius) this.position.y = height + this.radius;
  };


  this.collide = function(m){ //m is each of the mover objects
    if(dist(m.position.x,m.position.y,this.position.x,this.position.y)<(m.mass+this.radius)){
      this.bang =true;
      this.radius = this.radius+.5;
      if(this.radius > this.max)
        this.radius = 50;
              }
    };
};