// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// An object for a draggable attractive body in our world

var Attractor = function() {
  this.position = createVector(width/2, height/2);
  this.mass = 35;
  this.G = 1;
  this.dragOffset = createVector(0, 0);
  this.dragging = false;
  this.rollover = false;
  this.bang = false;

  this.calculateAttraction = function(m) {
    // Calculate direction of force
    var force = p5.Vector.sub(this.position, m.position);
    // Distance between objects
    var distance = force.mag();
    // Limiting the distance to eliminate "extreme" results for very close or very far objects
    distance = constrain(distance, 5, 25);
    // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    force.normalize();
    // Calculate gravitional force magnitude
    var strength = (this.G * this.mass * m.mass) / (distance * distance);
    // Get force vector --> magnitude * direction
    force.mult(strength);
    return force;
  };

  // Method to display
  this.display = function() {
    ellipseMode(45,45,45,45);
    strokeWeight(4);
    stroke(0);
    if (this.dragging) {
      fill(255);
    } else if (this.rollover) {
      fill(175);
    } else {
      fill(101, 200);
    }

    stroke(75,75,75);
    strokeWeight(4);
    fill(210,180,140);
    stroke(25,25,25);
    ellipse(220,220,500,500);
    fill(255,255,0);
    //hair
    ellipse(200,70,500,230);
    ellipse(200,70,500,200);
    ellipse(200,70,500,180);
    ellipse(200,70,500,160);
    ellipse(200,70,500,140);
    ellipse(200,70,500,100);
    ellipse(200,70,500,50);
    ellipse(200,70,500,10);
    fill(255);
    ellipse(this.x, this.y, 50, 50);
    ellipse(this.y, this.x, 50, 50);
    fill(0);
    ellipse(this.x, this.y, 20, 10);
    ellipse(this.y, this.x, 20, 10);

      fill(222,184,135);
    ellipse(300,270,25,25);
    fill(0);


    ellipse(this.position.x, this.position.y, this.mass*2, this.mass*2);
    fill(255);
    ellipse(150,300,50,50);
    ellipse(400,200,50,50);
    fill(0);
    ellipse(150,300,25,25);
    ellipse(400,200,25,25);
  };

  // The methods below are for mouse interaction
  this.handlePress = function(mx, my) {
    var d = dist(mx, my, this.position.x, this.position.y);
    if (d < this.mass) {
      this.dragging = true;
      this.dragOffset.x = this.position.x - mx;
      this.dragOffset.y = this.position.y - my;
    }
  };

  this.handleHover = function(mx, my) {
    var d = dist(mx, my, this.position.x, this.position.y);
    if (d < this.mass) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  };

  this.stopDragging = function() {
    this.dragging = false;
  };

  this.handleDrag = function(mx, my) {
    if (this.dragging) {
      this.position.x = mx + this.dragOffset.x;
      this.position.y = my + this.dragOffset.y;
    }

  };

//check for collisions
    this.collide = function(m){ //m is each of the mover objects
      if(dist(m.position.x,m.position.y,this.position.x,this.position.y)<(m.mass*8+this.mass)){

        this.bang =true;
        fill(255,0,0);

      }

    };



};
