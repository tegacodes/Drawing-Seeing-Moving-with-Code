var img;
var sentence;
var happy;
var sad;
var angry;
var tired;
var hungry;
var idk;
var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];


function preload() {
  img = loadImage("avatar.png");
  happySound = loadSound('happy.mp3');
  sadSound = loadSound('sad.mp3');
  angrySound = loadSound('anger.mp3');
  tiredSound = loadSound('tired.mp3');
  hungrySound = loadSound('hunger.mp3');
  idkSound = loadSound('idk.mp3');
}

function setup() {
createCanvas(1000,1000);
}

function changeBGhap() {
  var happyval = background(255, 255, 0);
   happySound.setVolume(0.3);
   happySound.play();
}

function changeBGsad() {
  var sadval = background(0, 0, 255);
   sadSound.setVolume(0.3);
   sadSound.play();
}
  function changeBGang() {
    var angryval = background(255, 0, 0);
     angrySound.setVolume(0.3);
     angrySound.play();
  }

  function changeBGtir() {
    var tiredval = background(0);
     tiredSound.setVolume(0.3);
     tiredSound.play();
  }

  function changeBGhun() {
    var hungryval = background (218,165,32);
       hungrySound.setVolume(0.3);
       hungrySound.play();
      
  }
  function changeBGidk() {
   var idkval = background (random(255));
    idkSound.setVolume(0.3);
    idkSound.play();
  }

  function draw() {
    sentence= text("Hi! How are you feeling today?", 250, 200);
    imageMode(CENTER);
    image(img, width / 2, height / 2, 400, 400);
    textSize(40);
    noStroke();
    fill(0);
    textFont("Georgia");
    sentence;
    // createCanvas(1000,1000);
    happy = createButton('Happy!');
    happy.position(200, 900);
    happy.mousePressed(changeBGhap);

    sad = createButton('Sad :(');
    sad.position(300, 900);
    sad.mousePressed(changeBGsad);

    angry = createButton('Angry!!!!');
    angry.position(500, 900);
    angry.mousePressed(changeBGang);

    tired = createButton('Tired (zzz)');
    tired.position(380, 900);
    tired.mousePressed(changeBGtir);

    hungry = createButton('Hungryyyy');
    hungry.position(600, 900);
    hungry.mousePressed(changeBGhun);

    idk = createButton('Idk man...');
    idk.position(725, 900);
    idk.mousePressed(changeBGidk); 
  }