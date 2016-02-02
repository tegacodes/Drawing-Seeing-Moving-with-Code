
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(230, 120, 100);
   fill(0);

   for (var j = 0; j < 8; j++) {
     for (var i = 0; i < 11; i++) {
       var moveX = random(0, mouseX*5);
       var moveY = random(0, mouseY*5);
       stroke(220);
       strokeWeight(10);
       strokeCap(ROUND);
       line(i + moveX, j + moveY, 0, 0);
     };
   };
};
