function setup() {
  createCanvas(1000, 400);
}

function draw() {
  //setup
  background(220);
  
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

}