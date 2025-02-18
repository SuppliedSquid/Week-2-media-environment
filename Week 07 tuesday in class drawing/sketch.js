var bgColor = 220;
var sizeX = 30;
var sizeY = 30;

function setup() {
  createCanvas(700, 500);
  background(bgColor);
  //setup button red
  let redButton;
  redButton = createButton('Red');
  redButton.size (100,50);
  redButton.position(10,10);
  redButton.style('background:red');
  redButton.mousePressed(changeRed);
   //setup button blue
  let blueButton;
  blueButton = createButton('Blue');
  blueButton.size (100,50);
  blueButton.position(10,80);
  blueButton.style('background:blue');
  blueButton.mousePressed(changeBlue);
     //setup button erase
  let clearButton;
  clearButton = createButton('Clear');
  clearButton.size (100,50);
  clearButton.position(10,150);
  clearButton.style('background:white');
  clearButton.mousePressed(changeClear);
      //setup button reset
  let resetButton;
  resetButton = createButton('Reset');
  resetButton.size (100,50);
  resetButton.position(10,220);
  resetButton.style('background:bgColor');
  resetButton.mousePressed(changeReset);
        //setup button big
  let bigButton;
  bigButton = createButton('Big');
  bigButton.size (100,50);
  bigButton.position(10,290);
  bigButton.style('background:white');
  bigButton.mousePressed(sizeBig);
          //setup button small
  let smallButton;
  smallButton = createButton('Small');
  smallButton.size (100,50);
  smallButton.position(10,360);
  smallButton.style('background:white');
  smallButton.mousePressed(sizeSmall);
}

function changeRed(){
  fill('Red')
}
function changeBlue(){
  fill('Blue')
}
function changeClear(){
  fill(bgColor)
}
function changeReset(){
  background(bgColor);
}
function sizeBig(){
  
   sizeX += 20;
   sizeY += 20;
}
function sizeSmall(){
  if(sizeX > 20){
   sizeX -= 20;
   sizeY -= 20;
}
}


function draw() {
  noStroke();
  if(mouseIsPressed === true){
  ellipse(mouseX,mouseY,sizeX,sizeY)
}
  
}