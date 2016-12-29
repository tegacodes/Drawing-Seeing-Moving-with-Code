//Creating sprite using sprite sheets for animation
var mouse_moved = false;
var touch_started = false;
var player_sprite_sheet;
var player_sprite_sheet2;
var npc_sprite_sheet;
var player_walk;
var player_walk2;
var npc_walk;
var lukacheck = false;
var state = 0;
var chattcheck1 = false;
var chatcheck2 = false;
var time, currentTime;
var timecheck1;
state2 = 0;
var state3 =0;
var state4 = 0;
var laundrycheck = false;
var soundcheck = false;

var player_stand;
var npc_stand;
var player_stand2;
var player_sprite;
var skylerstate = 0;
var room = 0;
var haircheck = false;




var player_frames = [
  {"name":"player_walk01", "frame":{"x":11, "y": 10, "width": 56, "height": 140}},
  {"name":"player_walk02", "frame":{"x":83, "y": 10, "width": 56, "height": 140}},
  {"name":"player_walk03", "frame":{"x":148, "y":10, "width": 56, "height": 140}},
 {"name":"player_walk04", "frame":{"x":216, "y": 10, "width": 56, "height": 140}},
  {"name":"player_walk05", "frame":{"x":283, "y": 10, "width": 56, "height": 140}},
  {"name":"player_walk06", "frame":{"x":347, "y": 10, "width": 56, "height": 140}},
  {"name":"player_walk07", "frame":{"x":430, "y": 10, "width": 56, "height": 140}},

 ];

 var player_frames2 = [
  {"name":"player_walk01", "frame":{"x":4, "y": 3, "width": 65, "height": 140}},
  {"name":"player_walk02", "frame":{"x":76, "y": 3, "width": 65, "height": 140}},
  {"name":"player_walk03", "frame":{"x":150, "y":3, "width": 65, "height": 140}},
  {"name":"player_walk04", "frame":{"x":218, "y": 3, "width": 65, "height": 140}},
  {"name":"player_walk05", "frame":{"x":287, "y": 3, "width": 65, "height": 140}},
  {"name":"player_walk06", "frame":{"x":354, "y": 3, "width": 65, "height": 140}},
  {"name":"player_walk07", "frame":{"x":422, "y": 3, "width": 65, "height": 140}},
    ];
    var npc_frames = [
  {"name":"player_walk01", "frame":{"x":4, "y": 3, "width": 65, "height": 140}},
  {"name":"player_walk02", "frame":{"x":78, "y": 3, "width": 65, "height": 140}},
  {"name":"player_walk03", "frame":{"x":150, "y":3, "width": 65, "height": 140}},
 {"name":"player_walk04", "frame":{"x":226, "y": 3, "width": 65, "height": 140}},
  {"name":"player_walk05", "frame":{"x":293, "y": 3, "width": 65, "height": 140}},
  {"name":"player_walk06", "frame":{"x":357, "y": 3, "width": 65, "height": 140}},
  {"name":"player_walk07", "frame":{"x":429, "y": 3, "width": 65, "height": 140}},

 ];


function preload() {

  player_sprite_sheet = loadSpriteSheet('assets/spritesheetskyler7.png', player_frames);


  player_sprite_sheet2 = loadSpriteSheet('assets/spritesheetskyler8.png', player_frames2);

   npc_sprite_sheet = loadSpriteSheet('assets/lukaspritesheet.png', npc_frames);



  // Player walk animation passing in a SpriteSheet
  player_walk = loadAnimation(player_sprite_sheet);
  player_walk2 = loadAnimation(player_sprite_sheet2);
  npc_walk =  loadAnimation(npc_sprite_sheet);

  // An animation with a single frame for standing
  player_stand = loadAnimation(new SpriteSheet('assets/spritesheetskyler7.png',
    [{"name":"player_stand", "frame":{"x": 0, "y": 11, "width": 70, "height": 140}}]));

    player_stand2 = loadAnimation(new SpriteSheet('assets/spritesheetskyler8.png',
    [{"name":"player_stand", "frame":{"x": 4, "y": 3, "width": 70, "height": 140}}]));

    npc_stand = loadAnimation(new SpriteSheet('assets/lukaspritesheet.png',
    [{"name":"player_stand", "frame":{"x": 0, "y": 3, "width": 70, "height": 140}}]));
}

function setup() {
  createCanvas(600, 600);

  // Create the Player sprite and add it's animations
  player_sprite = createSprite(300, 550, 100, 94);
  npc_sprite = createSprite(100, 540, 100, 94);
  player_sprite.addAnimation('walk', player_walk);
  player_sprite.addAnimation('walk2', player_walk2);
  npc_sprite.addAnimation('walk3', npc_walk);

  player_sprite.addAnimation('stand', player_stand);
  player_sprite.addAnimation('stand2', player_stand2);
  npc_sprite.addAnimation('npcstand', npc_stand);
img = loadImage("assets/bedroomredone.png");  // Load the image
img2 = loadImage("assets/skylerandlukaintro.png");
img3 = loadImage("assets/closet.jpg");
img4 = loadImage("assets/city1.jpg");
img5 = loadImage("assets/city2.jpg");
img6 = loadImage("assets/washer.jpg");
img7 = loadImage("assets/laundromat.jpg");
img8 = loadImage("assets/skylerpickhair.jpg");
img9 = loadImage("assets/bedroom1.png");
img10 = loadImage("assets/bedroom2.png");
img11 = loadImage("assets/bedroom4.png");
img12 = loadImage("assets/bedroom3.png");
img13 = loadImage("assets/bedroom5.png");
img14 = loadImage("assets/bedroom9.png");
img16 = loadImage("assets/mcdonalds1.png");
img17 = loadImage("assets/mcdonaldscene2.png");
img18 = loadImage("assets/mcdonaldscene3.png");
img19 = loadImage("assets/mcdonaldscene4.png");
img20 = loadImage("assets/mcdonaldscene5.png");
img21 = loadImage("assets/closet2.jpg");
img22 = loadImage("assets/closet1.png");
img23 = loadImage("assets/closet2.png");
img24 = loadImage("assets/closet3.png");
img25 = loadImage("assets/closet4.png");
img26 = loadImage("assets/laundry1.png");
img27 = loadImage("assets/laundry2.png");
img28 = loadImage("assets/laundry3.png");
img29 = loadImage("assets/laundry4.png");
img30 = loadImage("assets/skylerendinglaundry.jpg");
sound = loadSound('assets/Refreshing Elevator music.mp3');



}


function draw() {
   currentTime = millis() - time;
    //time = millis();
//       println("CurrentTime = " + currentTime);
//  println("Milliseconds = " + millis());
   // println("sprite x: " + player_sprite.position.x);
   // println("sprite y: " + player_sprite.position.y);
  clear();
  background(50);
  intro();
  room1();
  scene1();
  scene2();
  luka();
  scene3();
  scene4();
  ending();
 // Mobile friendly controls
 var eventX;
 if (isTouch()) {
    eventX = touchX;
 } else {
    eventX = mouseX;
 }

 //if mouse is to the left
 if(eventX < player_sprite.position.x - 10) {
    if (haircheck === false){
    player_sprite.changeAnimation('walk');
    npc_sprite.changeAnimation('walk3');

    }
    if (haircheck === true){
       player_sprite.changeAnimation('walk2');
       npc_sprite.changeAnimation('walk3');
    }
    // flip horizontally
    player_sprite.mirrorX(-1);
    npc_sprite.mirrorX(-1);
    // move left
    player_sprite.velocity.x = - 2;
    npc_sprite.velocity.x = - 2;
 }
 else if(eventX > player_sprite.position.x + 10) {
     if (haircheck === false){
    player_sprite.changeAnimation('walk');
    npc_sprite.changeAnimation('walk3');
    }
    if (haircheck === true){
       player_sprite.changeAnimation('walk2');
       npc_sprite.changeAnimation('walk3');
    }
    // flip horizontally
    player_sprite.mirrorX(1);
    npc_sprite.mirrorX(1);
    // move right
    player_sprite.velocity.x = 2;
    npc_sprite.velocity.x = 2;
 }
 else {
    if (haircheck === false){
    player_sprite.changeAnimation('stand');
    npc_sprite.changeAnimation('npcstand');
    }
    if (haircheck === true){
       player_sprite.changeAnimation('stand2');
       npc_sprite.changeAnimation('npcstand');
    }
    //if close to the mouse, don't move
    player_sprite.velocity.x = 0;
    npc_sprite.velocity.x = 0;
 }

 //draw the sprite
 if (skylerstate == 1){
 drawSprites();
 }
}

function touchStarted() {
 touch_started = true;
}

function mouseMoved() {
 mouse_moved = true;
}
function isTouch() {
 return touch_started && !mouse_moved;
}
function intro(){
   if (skylerstate === 0){
      image(img2,0,0);
      println("mouseX:" + mouseX);
      println("mouseY:" + mouseY);

   }
   if ((skylerstate === 0) && (mouseIsPressed)&&  (mouseY > 340) && (mouseY < 457) && (mouseX > 170) && (mouseX < 430)){
      skylerstate = 1;
      room = 1;
      npc_sprite.position.x = 1000;
      state = 0;
      playing = true;
   }
}
function room1(){
   if (room == 1){
      image(img,0,0);
      //bedroom into closet
      if ((room == 1) && (player_sprite.position.x > 314) && (player_sprite.position.x < 336) && (keyIsPressed)){
         room = 2;
         player_sprite.position.x = 12;
      }
      //bedroom into city1
       if ((room == 1) && (player_sprite.position.x > 564) && (player_sprite.position.x < 590) && (keyIsPressed)){
          room = 3;
          player_sprite.position.x = 12;
       }
   }
   if (room == 2){
      image(img3,0,0);
      //closet into bedroom
      if ((room == 2) && (player_sprite.position.x > 12) && (player_sprite.position.x < 38) && (keyIsPressed)){
         room = 1;
         player_sprite.position.x = 313;
      }
   }
      if (room ==3){
         image(img4,0,0);
         //city1 into bedroom
         if ((room ==3) && (player_sprite.position.x > 60) && (player_sprite.position.x < 114) && (keyIsPressed)){
            room = 1;
            player_sprite.position.x = 564;
         }//city1 into city2
         if ((room == 3) && (player_sprite.position.x > 564) && (player_sprite.position.x < 590) && (keyIsPressed)){
            room = 4;
            player_sprite.position.x = 12;
      }
      }
      if (room == 4){
         image(img5,0,0);
         //city2 into city1
         if ((room == 4) && (player_sprite.position.x > 12) && (player_sprite.position.x < 38) && (keyIsPressed)){
            room = 3;
            player_sprite.position.x = 564;
      }
      //city2 into washer/barber
      if ((room == 4) && (player_sprite.position.x > 564) && (player_sprite.position.x < 590) && (keyIsPressed)){
         room = 5;
          player_sprite.position.x = 12;
      }
      }
      if (room == 5){
         image(img6,0,0);
         if ((room ==5) && (player_sprite.position.x > 12) && (player_sprite.position.x < 38) && (keyIsPressed)){
            room = 4;
            player_sprite.position.x = 564;
         }
         if ((room == 5) && (player_sprite.position.x > 164) && (player_sprite.position.x < 210) && (keyIsPressed)){
            haircheck = true;
            if (haircheck === true){
               player_sprite.position.x = 145;
               player_sprite.position.y = 540;
            if ((haircheck === true) && (room == 5) && (player_sprite.position.x > 164) && (player_sprite.position.x < 210) && (keyIsPressed)){
               haircheck = false;
               player_sprite.position.y = 550;
               player_sprite.position.x = 145;
            }

            }
         }
         if ((room == 5) && (player_sprite.position.x > 430) && (player_sprite.position.x < 495) && (keyIsPressed)){
            room = 6;
            player_sprite.position.x = 39;
         }
      }
         if (room == 6){
            image(img7,0,0);
         }
         if ((room ==6) && (player_sprite.position.x > 12) && (player_sprite.position.x < 38) && (keyIsPressed)){
            room = 5;
            player_sprite.position.x = 445;
         }

}
function scene1(){
    if ((room === 1)  && (mouseIsPressed) && (state === 0)){
     time = millis();
     state = 1;
    }

    if ((mouseIsPressed) && (state > 0) && (currentTime > 300) && (state < 8)){
     state = state + 1;
     println(state);
     time = millis();

    }
    if (state == 1){
       image(img9,0,0);
    }
    if (state == 2){
       image(img10,0,0);
    }
    if (state == 3){
       image(img11,0,0);
    }
    if (state == 4){
       image(img12,0,0);
    }
    if (state == 5){
       image(img13,0,0);
    }
    if (state == 6){
       image(img14,0,0);
    }
    if (state == 7){
       chattcheck1 = false;
    }
}
function scene2(){
   if ((room === 4) && (state2 == 0)){
      npc_sprite.position.x = player_sprite.position.x-80;
      state2 = 1;
   }
   if ((mouseIsPressed) && (state2 > 0) && (currentTime > 300) && (state2 < 7)){
    state2 = state2 + 1;
    println(state);
    time = millis();

    }
    if (state2 == 1){
       image(img16,0,0);
    }
    if (state2 == 2){
       image(img17,0,0);
    }
    if (state2 == 3){
       image(img18,0,0);
    }
    if (state2 == 4){
       image(img19,0,0);
    }
    if (state2 == 5){
       image(img20,0,0);
    }
    if (state2 == 6){
       chatcheck2 = true;
    }
}

function luka(){
   if (chatcheck2 === true){
      npc_sprite.position.x = player_sprite.position.x-80;
   }
}
function scene3(){
   if ((room === 2) && (chatcheck2 === true)  && (state3 ===0) && (mouseIsPressed)){
      state3 = 1;
   }
   if ((mouseIsPressed) && (state3 > 0) && (currentTime > 300) && (state3 < 8)){
    state3 = state3 + 1;
    println(state);
    time = millis();
   }
   if (state3 == 1){
       image(img22,0,0);
    }
    if (state3 == 2){
       image(img23,0,0);
    }
    if (state3 == 3){
       image(img24,0,0);
    }
    if (state3 == 4){
       image(img25,0,0);
    }
    if (state3 == 5){
       image(img21,0,0);
    }
    if (state3 === 6){
       room = 1;
       player_sprite.position.x = 313;
    }


}
function scene4(){
   if ((room === 6) && (state4 === 0)){
      state4 = 1;
   }
   if ((mouseIsPressed) && (state4 > 0) && (currentTime > 300) && (state4 < 4)){
    state4 = state4 + 1;
    time = millis();
    }
    if (state4 == 1){
       image(img26,0,0);
       }
   if (state4 == 2){
      image(img27,0,0);
      if (soundcheck === false){
      sound.play();
      soundcheck = true;
      }
   }

   if ((state4 === 3) && (currentTime > 130000)){
      laundrycheck = true
      state4 = 4;
      sound.pause();
      }


   if (state4 == 4){
      image(img28,0,0);
   }
     if ((mouseIsPressed) && (state4 == 4) && (currentTime > 300) && (state4 < 8)){
    state4 = state4 + 1;
    time = millis();
    }

   if ((state4 == 5) && (room === 6)) {
      image(img29,0,0);

   }
   if (state4 == 6){
     // laundrycheck = true;

   }

}
function ending(){
   if ((laundrycheck === true) && (room === 1)){
      println("true");
      skylercheck = false;
      //remove();
     image(img30,0,0);
   }

}
