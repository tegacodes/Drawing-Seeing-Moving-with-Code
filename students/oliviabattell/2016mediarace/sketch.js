
var mover1;
var mover2;
var mover3;
var mover4;
var mover5;
//FORM/BUTTON VAR
var input, button, greeting, greeting2;
//KEY
var keystuff="&api-key=e40e241ff44de5fa9cbfb13779033de2:13:75030069"
var bdate;
//URL + SEARCH TERM FOR EACH CANDIDATE
var trump="http://api.nytimes.com/svc/search/v2/articlesearch.json?callback=svc_search_v2_articlesearch&q=trump&begin_date=";
var cruz="http://api.nytimes.com/svc/search/v2/articlesearch.json?callback=svc_search_v2_articlesearch&q=cruz&begin_date=";
var clinton="http://api.nytimes.com/svc/search/v2/articlesearch.json?callback=svc_search_v2_articlesearch&q=clinton&begin_date=";
var sanders="http://api.nytimes.com/svc/search/v2/articlesearch.json?callback=svc_search_v2_articlesearch&q=sanders&begin_date=";
var kasich="http://api.nytimes.com/svc/search/v2/articlesearch.json?callback=svc_search_v2_articlesearch&q=kasich&begin_date=";

var max = 8;

function setup() {
  createCanvas(windowWidth, windowHeight);


  img = loadImage("assets/trump.png");
  img2 = loadImage("assets/cruz.png");
  img3 = loadImage("assets/hillary.png");
  img4 = loadImage("assets/bernie.png");  // Load the image
  img5 = loadImage("assets/kasich.png");

  textAlign(CENTER)
  textSize(30);

  //BEGIN DATE
  input = createInput();
  input.position(20, 90);

  button = createButton('submit');
  button.position(155, 90);
  button.mousePressed(wordEnrty);

  greeting = createElement('h2', 'ENTER DATE (YYYYMMDD)');
  greeting.position(20, 47);

  greeting2 = createElement('h2', 'WHOS WINNING THE 2016 MEDIA RACE');
  greeting2.position(20, 25);

}

function draw() {
  background(204, 239, 255);

  //if mover1 exists, call its functions
  if(mover1){
    mover1.display();
    mover1.update();
  }
  //if mover2 exists, call its functions
  if(mover2){
    mover2.display();
    mover2.update();
  }
  //if mover3 exists, call its functions
  if(mover3){
    mover3.display();
    mover3.update();
  }
  //if mover4 exists, call its functions
  if(mover4){
    mover4.display();
    mover4.update();
  }
  //if mover5 exists, call its functions
  if(mover5){

    mover5.display();
    mover5.update();
  }

};




function pingurl(){

  var url1 = trump+bdate+keystuff;
  var url2 = cruz+bdate+keystuff;
  var url3 = clinton+bdate+keystuff;
  var url4 = sanders+bdate+keystuff;
  var url5 = kasich+bdate+keystuff;

  //LOAD JASON FOR EACH MOVER with a call back.
  //so this function bit wont run until the url1 gets called. then the function will make the new
  //  mover class passing it the three arguments we've set up.
  loadJSON(url1, function(data){
    mover1 = new Mover1(data.response.meta.hits, img, color(255, 0, 0));

    //****so you can just use Mover1 withe different arguments for each mover.
  });
  loadJSON(url2,function(data){
    mover2 = new Mover1(data.response.meta.hits, img2, color(255, 0, 0));

  });

    loadJSON(url3,function(data){
    mover3 = new Mover1(data.response.meta.hits, img3, color(255, 0, 0));

  });

      loadJSON(url4,function(data){
    mover4 = new Mover1(data.response.meta.hits, img4, color(255, 0, 0));

  });

        loadJSON(url5,function(data){
    mover5 = new Mover1(data.response.meta.hits, img5, color(255, 255, 0));

  });



};


function wordEnrty() {
  bdate = input.value();
  greeting.html(bdate);
  input.value('');
  pingurl();


};