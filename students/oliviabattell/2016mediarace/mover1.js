var Mover1 = function(hitNumber, img, fillColor){


  //pass the local variable hitNumber whatever is in the argument...
  this.hitNumber = hitNumber/2;
  this.fillColor = fillColor;
  this.img = img;
  this.max = 600;
  this.topspeed = 50;

  this.position = createVector(random(300),random(300)); //make these random 0-width and height
  this.velocity = createVector(this.hitNumber/30, this.hitNumber/30);


  this.update = function(){
    this.position.add(this.velocity);

    if ((this.position.x > width) || (this.position.x < 0)) {
      this.velocity.x = this.velocity.x * -1;
      if(this.position.x > width){
        this.position.x = width;
      }
      if(this.position.x < 0){
        this.position.x = 0;
      }

    }
    if ((this.position.y > height) || (this.position.y < 0)) {
      this.velocity.y = this.velocity.y * -1;
      if(this.position.y > height){
        this.position.y = height;
      }
      if(this.position.y < 0){
        this.position.y = 0;
      }

    }
  };


this.display = function(){
  noStroke();
  fill(this.fillColor);
  image(this.img, this.position.x, this.position.y, this.hitNumber, this.hitNumber);{
    if(this.hitNumber > this.max)
        this.hitNumber = this.hitNumber-100;

    }


};

};