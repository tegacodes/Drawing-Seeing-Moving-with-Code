// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill
var Snake = function(){

var  x = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var dx;
  var dy;
  var angleVect;
  var angle;
  var timerSnake;
  var directionSnake;
  var segLength=7;
  var period =30;
  var amp=40;
  var head = 0;
  var timerSnake=0;
  stroke(255);
  var directionSnake = createVector(random(-1,1)*5,random(-1,1)*5);



this.display=function(){
  harmonic = amp * cos(TWO_PI *frameCount/period);

this.snake(0,width/2+harmonic+loc.x,0+loc.y);

  for(var i=0; i< x.length-1; i++){
    this.snake(i+1,x[i],y[i]);
  }
}

this.update=function(){
  this.vel=directionSnake;
  vel.add(accel);
  vel.limit(5);
  loc.add(vel);

  if(timerSnake >= 1000)
  {

    directionSnake = createVector(random(-1,1)*5,random(-1,1)*5);
    timerSnake =0;
  }
  timerSnake++;
},

this.snake=function(i,xin,yin){
  dx = xin - x[i];
  dy= yin - y[i];
  angleVect=createVector(xin-x[i],yin-y[i])
  angle = atan2(dy,dx);
  x[i]= xin - cos(angle)*segLength;
  y[i]=yin-sin(angle)*segLength;
  push();

    translate(x[i],y[i]);
    if(i==0){
      rotate(angle);
      noStroke();
      fill(0,255,0);
    ellipse(0,0,80,80);


  }else{
    rotate(angle);
    noStroke();
    fill(0,255,0);
    rect(0,0,segLength,5);

    pop();
    print("hello");



  // else{
  //   translate(x[i],y[i]);
  //   rotate(angle);
  //   noStroke();
  //   fill(0,255,0);
  //   rect(0,0,segLength,5);
  //   pop();
  //   head=0;
  // }
}
}
};
