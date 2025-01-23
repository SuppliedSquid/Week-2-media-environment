function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(226, 213, 135);
  fill(0,0,255)
  textStyle(BOLDITALIC);
  textFont('Courier New', 32)
  text('Harrisburg University', 50, 50);
  textStyle(NORMAL);
  textFont('Courier New', 14)
  fill(0,100,200)
  text('It is a cold walk from the buss stop to the building. Once im inside I head to the library until my classes begin. HU is pretty cool, they have plenty of student resources.', 50, 100, 700)
}