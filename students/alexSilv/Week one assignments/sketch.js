var numCircles = 100;
var x = [];
var y = [];
var speed= [];
var x = 0;
var y = 0;

var setup = function () {

createCanvas(550,550);
fill(255,0,0);
for(var i =0; i<49; i++){
x[i] = 1;
y[i] = i*(12);
  speed[i] = 0.1 +2;
}

for(var i= 49; i<99; i++){
x[i] =i*(12);
y[i] = 1;
  speed[i] = 0.1 + 5;
}
};

var draw =function(){
  background(204);
  ellipse(20,20,20,20);
  for(var i=0; i<49; i++){
x=x[i];
   x +=speed[i];
      if((x>width) || (x <0)){
          speed[i] = speed[i]*-1;

  ellipse(x,y[i],2,2);
}
     for(var i=49; i< 99; i++){
      y =y[i];
       y+= speed[i];
        if((y >height) || (y < 0))
        {
              speed[i] = speed[i] *-1;
        }
  ellipse(x[i],y,4,4);

}
  };
