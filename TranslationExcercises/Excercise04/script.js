let numOfTiles;
let tileWidth;
let minStroke = 1;
let maxStroke = 10;
let minRad = 1;
let maxRad = 10;
let strokeColour;
let actRandomSeed = 1000;
let img;
let colour1;
let colour2;
let x = 0;
let y = 0;

// Setup canvas with slider for inputting tile amount
function setup() {
  canvas = createCanvas(500, 500);
  mySlider = createSlider(10, 50, 20);
  mySlider.style('width', '180px');

  angleMode(DEGREES);
  strokeColour = color(125, 0, 125, 225);
}


function draw() {
  // Number of tiles
  numOfTiles = mySlider.value();
  tileWidth = width / numOfTiles;
  randomSeed(actRandomSeed);
  // Move each icon to the center of the tile
  translate(tileWidth/2, tileWidth/2);
  background(255);
  // For each tile
  for (ii = 0; ii < numOfTiles; ii++) {
    for (i = 0; i < numOfTiles; i++) {
      // Create a new tile for a new icon
      gridX = i * tileWidth;
      gridY = ii * tileWidth;

      // The less tiles the larger the icons will be, as they fit the tile width
      x = map(constrain(mouseY, 0, height), 0, height, random(-10, 10), random(-10, 10));
      y = map(constrain(mouseX, 0, width), 0, width, random(-10, 10), random(-10, 10));

      // Create tile icon
      colour1 = color(255, 0, 0);
      push();
        fill(0);
        strokeWeight(10);
        stroke(0);
        ellipse(gridX, gridY, 1, 1);
      pop();
    }
  }
}