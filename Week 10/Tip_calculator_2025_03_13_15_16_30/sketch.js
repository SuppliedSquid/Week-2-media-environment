var bill

function setup() {
  createCanvas(500, 300);
  background(220);
  
  
  //inputs
  bill = createInput("Enter your bill");
  bill.position(50,100);
  bill.size(150,50);
  
  perc = createInput("Enter your tip percent");
  perc.position(250,100);
  perc.size(150,50);
  
  
  //buttons
  button = createButton('Calculate');
  button.position(50,200)
  button.size(80,30)
  button.mousePressed(function(){tipCalc()})
  
  //text
  textSize(20)
  text("Tip amount: $", 250,200)
}

function tipCalc(){
  background(220);
  tipAmt = bill.value() * perc.value() * 0.01
  text("Tip amount: $"+tipAmt,250,200)
}