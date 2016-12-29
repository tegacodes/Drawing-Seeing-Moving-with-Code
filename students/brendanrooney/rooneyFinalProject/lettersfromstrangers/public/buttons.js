var Button = function(x, y, r, g, b, name, value){

  this.x = x;
  this.y = y;
  this.r = r;
  this.g = g;
  this.b = b;
  this.name = name;
  this.value = value;
  this.button;

  this.display = function(){
    //Setting basic style of each button.
    this.button = createButton(this.name);
    this.button.style("font-size", "20px");
    this.button.style("font-family", "Georgia");
    this.button.size(100, 50);
    this.button.position(this.x, this.y);

    //Using booleans to determine which of the buttons is pressed. This gets
    //fed to the buttonChoice variable, which in turn is put through socket.
    if (this.value == 0){
      this.button.mousePressed(aPress);
      anxious = true;
    } else if (this.value == 1){
        this.button.mousePressed(sPress);
        sad = true;
    } else if (this.value == 2){
        this.button.mousePressed(hPress);
        happy = true;
    } else if (this.value == 3){
        this.button.mousePressed(cPress);
        calm = true;
    } else if (this.value == 4){
        this.button.mousePressed(saver);
    }
  }
}
