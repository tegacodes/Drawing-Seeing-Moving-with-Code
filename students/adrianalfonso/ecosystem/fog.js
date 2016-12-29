
var Fog =function () {
  var yoff = 0.0;
this.display=function(){
  fill(22.5,37.5,52.5,30);
  // We are going to draw a polygon out of the wave points
  beginShape();

  var xoff = 0;       // Option #1: 2D Noise
  // var xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    var y = map(noise(xoff, yoff), 0, .9, 180,220+random(0,2));

    // Option #2: 1D Noise
    // var y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.1;
  }
  // increment y dimension for noise
  yoff += 0.01+random(.008,.015);
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}
}
