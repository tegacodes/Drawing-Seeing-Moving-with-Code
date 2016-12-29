function Ball(dx, dy, dsize){
  this.x = dx;
  this.y = dy;
  this.size = dsize;

  this.display = function(){
   fill("#FFA500");
      ellipse(this.x, this.y, this.size, this.size);

  }
  this.move = function(){
    this.x++;
  }

  this.meow = function(){
    if(this.x == 400){
      meow.play();
    }
  }

}
