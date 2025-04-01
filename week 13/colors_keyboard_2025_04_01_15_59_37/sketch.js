var soc;
var key_c1;
var key_csharp1;
var key_D1;
var key_Dsharp1;
var key_e1;
var key_f;
var key_fsharp;
var key_g;
var key_gsharp;
var key_a;
var key_asharp;
var key_b;
var key_c2;

var colors = [
  [89,56,39],
  [168,128,67],
  [146,106,55],
  [176,0,0],
  [129,0,0],
  [155,153,154],
  [247,247,247],
  [147,76,74]
  ];
var pressed = false

function setup() {
  createCanvas(1000, 400);
  osc = new p5.Oscillator();
  osc.setType('sine');
  
  //sounds
  key_c1 = new Key();
  key_csharp1 = new Key();
  key_D1 = new Key();
  key_Dsharp1 = new Key();
  key_e1 = new Key();
  key_f = new Key();
  key_fsharp = new Key();
  key_g = new Key();
  key_gsharp = new Key();
  key_a = new Key();
  key_asharp = new Key();
  key_b = new Key();
  key_c2 = new Key();

  
}

function draw() {
  //setup
  background(220);
  
  text("middle C is Q", 75,25);
  
  //white keys
  var whiteW = width/20
  var whiteH = height/1.6
  
  //black keys
  var blackW = whiteW*(7/12)
  var blackH = whiteH*(2/3)
  
  //other
  var corner = width/100
  var offsetH = height/6
  var offsetW = height/6
  
  //drawing keys
  //all white keys
  fill(255,255,255);
    for (var i = 0; i < 14; i = i + 1){
      rect(offsetW+(i*whiteW),offsetH, whiteW, whiteH, 0, 0, corner, corner);
    }
  
  //2 black keys
  fill(0,0,0);
    for (var j = 0; j < 2; j = j + 1){
      rect(offsetW+whiteW-(blackW/2)+(j*whiteW),offsetH, blackW, blackH, 0, 0, corner, corner);
      rect(offsetW+(8*whiteW)-(blackW/2)+(j*whiteW),offsetH, blackW, blackH, 0, 0, corner, corner);
    }
  
  //3 black keys
      for (var k = 0; k < 3; k = k + 1){
      rect(offsetW+(4*whiteW)-(blackW/2)+(k*whiteW),offsetH, blackW, blackH, 0, 0, corner, corner);
      rect(offsetW+(11*whiteW)-(blackW/2)+(k*whiteW),offsetH, blackW, blackH, 0, 0, corner, corner);
      }

  
  //make sounds
  key_c1.press();
  
  key_csharp1.press()
  key_csharp1.x = 115
  key_csharp1.y = 215
  key_csharp1.butt = 50
  key_csharp1.freq = 277.1826
  
  key_D1.press()
  key_D1.x = 145
  key_D1.y = 290
  key_D1.butt = 87
  key_D1.freq = 293.6648
  
  key_Dsharp1.press()
  key_Dsharp1.x = 165
  key_Dsharp1.y = 215
  key_Dsharp1.butt = 51
  key_Dsharp1.freq = 311.1270
  
  key_e1.press()
  key_e1.x = 185
  key_e1.y = 290
  key_e1.butt = 69
  key_e1.freq = 329.6276
  
  key_f.press()
  key_f.x = 240
  key_f.y = 290
  key_f.butt = 82
  key_f.freq = 349.2282
  
  key_fsharp.press()
  key_fsharp.x = 265
  key_fsharp.y = 215
  key_fsharp.butt = 53
  key_fsharp.freq = 369.9944
  
  key_g.press()
  key_g.x = 290
  key_g.y = 290
  key_g.butt = 84
  key_g.freq = 391.9954
  
  key_gsharp.press()
  key_gsharp.x = 315
  key_gsharp.y = 215
  key_gsharp.butt = 54
  key_gsharp.freq = 415.3047
  
  key_a.press()
  key_a.x = 345
  key_a.y = 290
  key_a.butt = 89
  key_a.freq = 440
  
  key_a.press()
  key_a.x = 345
  key_a.y = 290
  key_a.butt = 89
  key_a.freq = 440
  
  key_asharp.press()
  key_asharp.x = 365
  key_asharp.y = 215
  key_asharp.butt = 55
  key_asharp.freq = 466.1638
  
  key_b.press()
  key_b.x = 390
  key_b.y = 290
  key_b.butt = 85
  key_b.freq = 493.8833
  
  key_c2.press()
  key_c2.x = 440
  key_c2.y = 290
  key_c2.butt = 73
  key_c2.freq = 523.2511
  
}

function keyReleased(){
  osc.amp(0,0.5);
}

//constructor function
function Key(){
  var randomIndex = parseInt(random(colors.length));
  this.butt = 81
  this.freq = 261.6256
  this.x = 90
  this.y = 290
  this.press = function(){
    if (keyIsDown(this.butt)){
      osc.start();
      osc.freq(this.freq);
      osc.amp(1000,0.05);
      
      //circle
      
      fill(colors[randomIndex]);
      ellipse(this.x, this.y, 25,25)
    }
  }
}