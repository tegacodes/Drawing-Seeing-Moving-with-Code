var gif;
var gif2;
//----------------------------
var bol = 0; //the number that determines the callback
//----------------------------
r = 255;
g = 210; //background color
b = 0;
//----------------------------
va = 255;
va1 = 255;
va2 = 255; //button indicators
va3 = 255;
//----------------------------
cx = 4000; //cloud
//------------------------------
dr = 0;
callback1 = function() {

  if (bol == 0) {
    piano1.play();
    r = 255;
    g = 210;
    b = 0;
    va = 255;
    va1 = 255;
    va2 = 255;
    va3 = 255;
    dr = 0;


  } else if (bol == 1) {
    r = 255;
    g = 0;
    b = 0;
    va = 255;
    va1 = 255;
    va2 = 255;
    va3 = 255;
    dr = 1;
    piano2.play();


  } else if (bol == 2) {
    r = 0;
    g = 255;
    b = 255;
    va = 255;
    va1 = 255;
    va2 = 255;
    va3 = 255;
    dr = 2;

    piano3.play();

  } else if (bol == 3) {
    r = 255;
    g = 0;
    b = 255;
    va = 255;
    va1 = 255;
    va2 = 255;
    va3 = 255;
    dr = 3;

    piano4.play();

  }


}

//-------------------------------------------

function preload() {

  gif1 = loadGif('otherstuff/dancer1.gif');
  gif2 = loadGif('otherstuff/dancer2.gif');
  gif3 = loadGif('otherstuff/dancer3.gif');
  gif4 = loadGif('otherstuff/dancer4.gif');
  cloud = loadImage('otherstuff/cloud.png');
  piano1 = loadSound('assets/pt1.wav');
  piano2 = loadSound('assets/pt2.wav');
  piano3 = loadSound('assets/pt3.wav');
  piano4 = loadSound('assets/pt4.wav');
}
//-------------------------------------------
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  piano1.play();
  piano1.onended(callback1);
  piano2.onended(callback1);
  piano3.onended(callback1);
  piano4.onended(callback1);
}

//-------------------------------------------

function draw() {


  cx = cx - 0.5;
  if (cx < -3000) {
    cx = 4000;
  }
  background(r, g, b);

  imageMode(CENTER);
  if (dr == 0) {
    image(gif1, width / 2, height / 2);
  }
  if (dr == 1) {
    image(gif2, width / 2, height / 2);
  }
  if (dr == 2) {
    image(gif3, width / 2, height / 2);
  }
  if (dr == 3) {
    image(gif4, width / 2, height / 2, 210, 354);
  }


  fill(va);
  textSize(32);
  text("W", width / 2 - 20, 70);
  fill(va1);
  text("A", 70, height / 2 + 20);
  fill(va2);
  text("D", width - 70, height / 2 + 20);
  fill(va3);
  text("S", width / 2 - 20, height - 70);
  image(cloud, cx, height / 2 - 400);
}

//-------------------------------------------

function keyTyped() {

  if (key === 'w') {
    bol = 0;
    va = 0;
    va1 = 255;
    va2 = 255;
    va3 = 255;
  }


  if (key === 'a') {
    bol = 1;
    va = 255;
    va1 = 0;
    va2 = 255;
    va3 = 255;
  }

  if (key === 's') {
    bol = 2;
    va = 255;
    va1 = 255;
    va2 = 255;
    va3 = 0;
  }

  if (key === 'd') {
    bol = 3;
    va = 255;
    va1 = 255;
    va2 = 0;
    va3 = 255;
  }

}
//-------------------------------------------



//python -m SimpleHTTPServer



//http://fat.gfycat.com/PalatableSmoggyAbalone.gif
//https://45.media.tumblr.com/2dfc3369827df9b981e111d7fd8fc732/tumblr_mvemcyarmn1rslphyo1_400.gif
