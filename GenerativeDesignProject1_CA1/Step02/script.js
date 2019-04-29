// Triangle
var num = 3;

function setup() {
  canvas = createCanvas(1240, 1748);
  pixelDensity(1);
  reset();
}

function draw() {
  loadPixels();
}

function keyReleased() {
  // save as PNG
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  // Triangle
  if (key == '3') {
    num = 3;
    reset();
  }

  // Square
  if (key == '4') {
    num = 4;
    reset();
  }
  // Pentagon
  if (key == '5') {
    num = 5;
    reset();
  }
  // Hexagon
  if (key == '6') {
    num = 6;
    reset();
  }
}

// Reset canvas
function reset() {
  clear();
  background(0);

  // Triangle Shape
  if (num === 3) {
    stroke(255);
    // Begin shape, draw triangle using vertexes, different colours for each side
    beginShape(LINES);
      vertex(width/2, 437);
      vertex(310, 1311);
    endShape();
    stroke(0, 255, 0);
    beginShape(LINES);
      vertex(310, 1311);
      vertex(930, 1311);
    endShape();
    stroke(0, 0, 255);
    beginShape(LINES);
      vertex(930, 1311);
      vertex(width/2, 437);
    endShape();
  }
}