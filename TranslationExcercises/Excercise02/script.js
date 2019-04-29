let numOfTiles = 30;
let tileWidth;
let angle = 30;
let actRandomSeed = 1000;
let actStrokeCap;

// Setup canvas
function setup() {
  canvas = createCanvas(600, 600);
  angleMode(DEGREES);
  tileWidth = width / numOfTiles;
  background(255);
  actStrokeCap = ROUND;
}

// Draw function
function draw() {
  clear();
  strokeCap(actStrokeCap);
  randomSeed(actRandomSeed);

  // For the length of the canvas
  for (i = 0; i < numOfTiles; i++) {
    for (ii = 0; ii < numOfTiles; ii++) {
      fill(0);
      push();
        // Translate to co create slanting lines
        translate(i * tileWidth + tileWidth / 2, ii * tileWidth  + tileWidth / 2);
        // Random strokeweight to begin with
        var toggle = Math.floor(random(2));
        // Mouse position will decide thickness of tiles, tileWidth is really the length of each tile
        if (toggle == 0) {
          strokeWeight(mouseX / 20);
          line(-tileWidth / 2, tileWidth/2, tileWidth / 2, -tileWidth / 2);
        }
        else {
          strokeWeight(mouseY / 20);
          line(-tileWidth / 2, -tileWidth / 2, tileWidth / 2, tileWidth / 2);
        }
      pop();
    }
  }
};
// Generate new pattern of tiles
function mousePressed() {
  actRandomSeed = random(100000);
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') actStrokeCap = ROUND;
  if (key == '2') actStrokeCap = SQUARE;
  if (key == '3') actStrokeCap = PROJECT;
}