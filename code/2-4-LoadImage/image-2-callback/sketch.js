var img;  // Declare variable 'img'.

function preload(){ //special function that runs first as javascript is asynchronous

  //p5 can render jpg, gif, png images and vectors as svg
}

function setup() {
  createCanvas(720, 400);
  loadImage("moonwalk.jpg", drawImage); //this is a callback
  //it is a function that will call the function drawImages
  //after it has finished loading. Callbacks manage asynchroniciy
}

function draw() {
  background(200);
}

function drawImage(img){ // Function to load an image
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
}
