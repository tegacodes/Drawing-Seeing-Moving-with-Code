var yoff = 0.0;        // 2nd dimension of perlin noise


function setup() {
  createCanvas(1500, 1500);
  frameRate(10);
  smooth();
  saveFrames("loop",".jpg",10,10);
}

function draw() {
background(0);

fill(255);
ellipse(750,750,1400-frameCount*140,1400-frameCount*140);

  translate(0,0);
    for (var k = -3000; k <= height; k += 24) {
      White(k);

}

}



function White(k){



  beginShape();

  var xoff = 0;       


  // Iterate over horizontal pixels
  for (var x = -200; x <= width+200; x += 100) {
    // Calculate a y value according to noise

    var y = map(noise(xoff, yoff), 0, 1, 1000+frameCount*100,100);


    // Set the vertex
    stroke(255);
    strokeWeight(7);
    noFill();
    curveVertex(x,y+k);


    // Increment x dimension for noise
    xoff += .045;
  }
  // increment y dimension for noise
  yoff += .0085;

  endShape();

}



