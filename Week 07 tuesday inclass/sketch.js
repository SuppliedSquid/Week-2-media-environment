let img;

// Load the image.
function preload() {
  img = loadImage('/FISH.jpg');
  font = loadFont('/Font.otf');
}

function setup() {
  createCanvas(600, 400);

  background(50);

  // Draw the image.
  image(img, 0, 0, 540, 360);
  
  // image label
  fill(255,255,255);
  textSize(35);
  textFont(font);
  text('YOU KNOW WHAT THAT MEANS!', 50,390);
  describe('FISH');
}