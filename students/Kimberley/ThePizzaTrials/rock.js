function Rock(dx, dy, dsize){
  this.x = dx;
  this.y = dy;
  this.size = dsize;
  this.speed = random(1.5, maxspeed);
  this.speedspeed = 0.01;

  this.display = function(){
 image(rock,this.x,this.y,this.size,this.size);
  }

  this.move = function(){
    this.x += this.speed;
  }

  this.hiss = function(){
    if(this.x > 350 && this.x < 360){
      hiss.play();
    }
  }

  this.bump = function(){
    if(this.x >= 400){
      this.speed = -0.5;
    }  this.speed += this.speedspeed;
      if( this.speed <=0 && this.speed >= 0.01){
        this.speed = 0;
        this.speedspeed = 0;
      }
  }
}
