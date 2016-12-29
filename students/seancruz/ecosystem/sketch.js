var walkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < 1; i++) {
    walkers.push(new Walker());
  }

}

function draw() {
  background(0);
  noStroke();


  for (var i = 0; i < walkers.length; i++) {
    walkers[i].walk();
    walkers[i].display();
    println("state:" + walkers[i].state);
    if (walkers[i].state == 0) {
      walkers[i].grow();

    } else if ((walkers[i].variant == 1)&&(walkers[i].state == 1)) {
      walkers[i].live2();
    } else if  ((walkers[i].variant == 0)&&(walkers[i].state == 0)) {
      walkers[i].live();
    }



}

if (walkers.length>30){
    die();
}
}

die = function() {
  walkers.splice(walkers.i,1);
};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
