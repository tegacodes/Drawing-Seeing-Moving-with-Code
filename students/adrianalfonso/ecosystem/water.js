
var Water =function () {
  var yoff = 0.0;
this.display=function(){
  fill(8,8,12,random(5,6));
  // We are going to draw a polygon out of the wave points
  beginShape();

  var xoff = 0;       // Option #1: 2D Noise
  // var xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    var y = map(noise(xoff, yoff), 0, .9, -50,50+random(0,2));

    // Option #2: 1D Noise
    // var y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.1;
  }
  // increment y dimension for noise
  yoff += 0.003+random(.0001,.0003);
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}
}
