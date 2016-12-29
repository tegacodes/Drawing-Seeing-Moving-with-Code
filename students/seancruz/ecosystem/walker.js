function Walker() {

  this.s = 0;
  this.sped2 = 0.5;
  this.r = 33;
  this.g = 119;
  this.b = 173;
  this.mvmt = 0.003;
  this.state = 0;
  this.variant = 0;

  this.position = createVector(width / 2, height / 2);
  this.noff = createVector(random(1000), random(1000));

  if (Math.random() > 0.5) {
    this.r = 173;
    this.b = 33;
  this.variant = 1;
  } else {
    this.r = 33;
    this.b = 173;
    this.variant = 0;
  }
  //*******************************
  /*this.selectColor = function() {
      if (Math.random() > 0.5) {
        this.r = 173;
        this.b = 33;
      } else {
        this.r = 33;
        this.b = 173;
      }
    }*/
  //*******************************
  this.display = function() {
    fill(this.r, this.g, this.b);
    ellipse(this.position.x, this.position.y, this.s, this.s); //creature
    fill(255);
    ellipse(this.position.x, this.position.y, 20, 20);
    fill(0);
    ellipse(this.position.x, this.position.y, 5, 5);

  };


  //*******************************
  this.walk = function() {
    this.position.x = map(noise(this.noff.x), 0, 1, 0, width);
    this.position.y = map(noise(this.noff.y), 0, 1, 0, height);
    this.noff.add(this.mvmt, this.mvmt, 0);
  };
  //*******************************
  this.grow = function() {

    this.s = this.s + this.sped2;
    if (this.s > 140) { //
      this.s = 140;
      this.r = this.r + 2; //grow
      this.g = this.g + 1;
      this.b = this.b + 1;
      this.mvmt = 0.0005; //
    }
    if (this.r > 500) { //
      this.state = 1;

    }


  };

  //*******************************
  this.live = function() {
    this.r = 33;
    this.g = 119;
    this.b = 173;
    this.state=0;

  };

  this.live2 = function() {
    walkers.push(new Walker(this.noff.x, this.noff.y));
    this.r = 173;
    this.b = 33;
    this.g = 119;
    this.state=0;

  };
  //*******************************



}
