// Tim Coakley
// Monday, May 2nd
// DMSC Final - Tega Brain
//
// This is a p5js sketch that generates a frequency based off of an keyword input.
// The frequency is dependent on how many hits a keyword has in NY Times api.
//
// This sketch was adapted from oscillatorWaveform example from the p5js library.


// global variables
var freqSlider, freqLabel, ampLabel, ampSlider, button;
var search =" ";
var osc;
//6var freq = 200; // current frequency (updated by slider)
var amp = 0.5;
var fft;
var freq1;
var input, button, greeting;
var input2
var oscOn = false;
var turtle;
var keystuff="&api-key=d99d145724d1b95cd2cde341cb6aa553%3A14%3A75129556";
var http= "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
//////////////////////////////////


function setup() {

  createCanvas(1000,600);
  smooth();
  noFill();
  freqLabel = createP('Frequency: ');
  // freqSlider = createSlider(1, 1000, freq);

  ampLabel = createP('Amplitude: ' + amp);
  ampSlider = createSlider(0.0, 100.0, amp*100);

  button = createButton('start');
  button.mousePressed(toggleOsc);

  // Other types of oscillators include TriOsc, SawOsc, SqrOsc, and generic Oscillator.
  osc = new p5.SinOsc(freq1);
  osc.amp(amp);

  p = createP('Current Waveform: ' + osc.getType());

  // these buttons will change the osc's waveform
  sine = createButton('sine');
  sine.mousePressed(setSine);
  saw = createButton('sawtooth');
  saw.mousePressed(setSawtooth);
  tri = createButton('triangle');
  tri.mousePressed(setTriangle);
  sq = createButton('square');
  sq.mousePressed(setSquare);

  // create an fft to analyze the audio
  fft = new p5.FFT();


  // THIS IS THE TEXT STUFF******************
  input = createInput();
  input.position(20, 65);

  // input2 = createInput();
  // input2.position(20, 90);

  button = createButton('submit');
  button.position(160, 65);
  button.mousePressed(wordEntry);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

}

////////////////////////////////

function draw() {
background(100,0,100,100);
makeWave(freq1);
//makeWave(freq2);

}

// search the api...
function wordEntry() {
 search = input.value();
  greeting.html('hello '+search+'!');
  input.value('');
  println("search:"+search);
pingurl();

}

function pingurl(){
  var url = http+search+keystuff;
println("url:"+url);
  loadJSON(url, gotData);

}

function gotData(turtle){
println("json:"+turtle);
freq1 = turtle.response.meta.hits;
println("freq:"+freq1);
}
////////////////////////////////

// draw waveform
function makeWave(tempFreq){

  amp = ampSlider.value()/100;
  osc.amp(amp);
  ampLabel.html('Amplitude: ' + amp + '/ 1.0');

  // freq = freqSlider.value();
  osc.freq(tempFreq);
  freqLabel.html('Frequency 20Hz-20K: ' + tempFreq + ' Hz');
  p.html('Choose your Poision: ' + osc.getType());

  // analyze the waveform
  waveform = fft.waveform();

  // draw the shape of the waveform
  stroke(255);
  strokeWeight(5);
  beginShape();
  for (var i = 0; i<waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, -height/2, height/2);
    vertex(x, y + height/2);
  }
  endShape();
}


// Turn the oscillator on / off
function toggleOsc() {
  if (oscOn) {
    osc.stop();
    button.html('start me up!');
  } else {
    osc.start();
    button.html('stop this madness!');
  }
  oscOn = !oscOn;
}

// Methods to change the oscillator type.
// You can change the type by using osc.setType('sine').
function setSine() {
  osc.setType('sine');
}

function setTriangle() {
  osc.setType('triangle');
}

function setSawtooth() {
  osc.setType('sawtooth');
}

function setSquare() {
  osc.setType('square');
}
