var img;  // Declare variable 'img'.

function preload(){ //special function that runs first as javascript is asynchronous
  img = loadImage("assets/moonwalk.jpg");  // Load the image
  //p5 can render jpg, gif, png images and vectors as svg
}

function setup() {
  createCanvas(720, 400);

}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  image(img, 0, height/2, img.width/2, img.height/2);
}
