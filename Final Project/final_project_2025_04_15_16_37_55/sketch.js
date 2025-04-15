var gaming = false;
var game = 'none';

//game vars
var score = 0;
var highScore = 0;
var timer = 0; 
var buttonSize = 20
var timeLimit = 180





function setup() {
  createCanvas(600, 600);
  frameRate(60);
  textAlign(CENTER, CENTER);
  background(150);
  textSize(50);
  text("press space to start",width/2, 50);
  
  //main menu buttons
  aimGame = createButton('Aim Game');
  cpsGame = createButton('Clicks Rate test');
  
  //aim game buttons
  button2 = createButton('there');
  button3 = createButton('where');
  button4 = createButton('hear');
  button1 = createButton('here');
}

function draw() {
  if(game === 'none'){
    aimGame.position((width/4)-50,(height/4)-20);
    aimGame.size(100,20);
    aimGame.mousePressed(function(){selectAimGame()});
    cpsGame.position((3*(width/4))-75,(height/4)-20);
    cpsGame.size(125,20);
    cpsGame.mousePressed(function(){selectCpsGame()});
    background(150);
    textSize(50);
    text("Select a game",width/2, 50);
  }
  
  if(game === 'aim'){
    if(gaming === false){
      background(220);
      textSize(50);
      text("press space to start",width/2, (height/2)-20);
      textSize(25);
      text("Your Score: "+score,width/2, (height/2)+60);
      text("High Score: "+highScore,width/2, (height/2)+100);
      text("Click the button labeled 'here'",width/2, (height/2)+170);
    
      if(keyIsDown(32)){
        gaming=true;
        score = -1; //score increases by one when the game begins
        buttonSize = 100;
        timer = 0;
        makeButton();
        textSize(20);
        background(150);
      }
    } else {
    
      button1.mousePressed(function(){makeButton()});
      button2.mousePressed(function(){wrong()});
      button3.mousePressed(function(){wrong()});
      button4.mousePressed(function(){wrong()});
      fill(200, 200, 200, 255);
      rect(0, height-75, 110, 75); 
      fill(0);
      text("Score: "+score, 50, height-20);
      text("Time: "+(timeLimit-timer), 50, height-50);
    
      timer = timer + 1
      if(timer >= timeLimit){
        gaming=false;
        buttonSize = 10
        button1.position(0,height);
        button2.position(0,height);
        button3.position(0,height);
        button4.position(0,height);
        compareScore()
      }
    }
  }
  if(game === "cps"){
    if(gaming === false){
      background(220);
      textSize(50);
      text("press space to start",width/2, (height/2)-20);
      textSize(25);
      text("Your Score: "+score,width/2, (height/2)+60);
      text("High Score: "+highScore,width/2, (height/2)+100);
      text("Click as much as you can in 5 seconds!",width/2, (height/2)+170);
    
      if(keyIsDown(32)){
        gaming=true;
        score = 0; 
        timer = 0;
        buttonSize = 150;
        textSize(20);
        background(150);
      }
    } else {
        button1.position((width/2)-(buttonSize/2), (height/2)-(buttonSize/2));
      button1.size(buttonSize, buttonSize);
      button1.mousePressed(function(){clicked()});
      fill(200, 200, 200, 255);
      rect(0, height-75, 110, 75); 
      fill(0);
      text("Score: "+score, 50, height-20);
      text("Time: "+(300-timer), 50, height-50);
    
      timer = timer + 1
      if(timer >= 300){
        gaming=false;
        button1.position(0,height);
        compareScore()
      }
    }
  }
}

function selectAimGame(){
  game = 'aim'
  aimGame.position(0,height);
  cpsGame.position(0,height);
}
function selectCpsGame(){
  game = 'cps'
  aimGame.position(0,height);
  cpsGame.position(0,height);
}
function compareScore(){
  if(score > highScore){
    highScore = score;
  }
}

//aim game
function makeButton(){
  if(gaming === true){
    button1.position(random(0,width-buttonSize),random(0,height-buttonSize));
    button1.size(buttonSize,buttonSize);
    timer = 0
    score = score + 1;
    if(buttonSize > 50){
      buttonSize = buttonSize - 1
    }
    if(timeLimit > 60){
      timeLimit = timeLimit - 1
    }
    //fake buttons
    if(score >= 25){
      button2.position(random(0,width-buttonSize),random(0,height-buttonSize));
      button2.size(buttonSize+5,buttonSize+5);
    }
    if(score >= 50){
      button3.position(random(0,width-buttonSize),random(0,height-buttonSize));
      button3.size(buttonSize,buttonSize);
    }
    if(score >= 75){
      button4.position(random(0,width-buttonSize),random(0,height-buttonSize));
      button4.size(buttonSize,buttonSize);
    }
    //rectangles
    fill(220,220,220)
    rect(random(0,width-buttonSize), random(0,height-buttonSize), buttonSize, buttonSize);
    
  }
}
function wrong(){
  gaming=false;
  buttonSize = 10
  button1.position(0,height);
  button2.position(0,height);
  button3.position(0,height);
  button4.position(0,height);
  if(score > highScore){
    highScore = score;
  }
}

//cps test
function clicked(){
  score = score + 1;
}
