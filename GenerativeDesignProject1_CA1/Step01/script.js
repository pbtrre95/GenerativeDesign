// Triangle
var num = 3;

function setup() {
  canvas = createCanvas(1240, 1748);
  pixelDensity(1);
}

function draw() {
  background(0);
  loadPixels();
}

function keyReleased() {
  // save as PNG
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  // Triangle
  if (key == '3') {
    reset();
    num = 3;
  }

  // Square
  if (key == '4') {
    reset();
    num = 4;
  }
  // Pentagon
  if (key == '5') {
    reset();
    num = 5;
  }
  // Hexagon
  if (key == '6') {
    reset();
    num = 6;
  }
}

// Reset canvas
function reset() {
  clear();
}