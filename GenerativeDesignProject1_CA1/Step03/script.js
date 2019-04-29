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

  // Triangle Shape
  if (num === 3) {
    background(0);
    // Begin shape, draw triangle using vertexes, different colours for each side
    stroke(255, 0, 0);
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

  // Square Shape
  if (num === 4) {
    background(0);
    // Begin shape, draw square using vertexes, different colours for each side
    stroke(255, 0, 0);
    beginShape();
      vertex(310, 437);
      vertex(930, 437);
    endShape();
    stroke(0, 255, 0);
    beginShape();
      vertex(930, 437);
      vertex(930, 1311);
    endShape();
    stroke(0, 0, 255);
    beginShape();
      vertex(930, 1311);
      vertex(310, 1311);
    endShape();
    stroke(255, 255, 0);
    beginShape();
      vertex(310, 1311);
      vertex(310, 437);
    endShape(CLOSE);
  }

  // Pentagon Shape
  if (num === 5) {
    background(0);
    // Begin shape, draw pentagon using vertexes, different colours for each side
    stroke(255, 0, 0);
    beginShape();
      vertex(width/2, 347);
      vertex(1140, 645);
    endShape();
    stroke(0, 255, 0);
    beginShape();
      vertex(1140, 645);
      vertex(930, 1311);
    endShape();
    stroke(0, 0, 255);
    beginShape();
      vertex(930, 1311);
      vertex(310, 1311);
    endShape();
    stroke(255, 255, 0);
    beginShape();
      vertex(310, 1311);
      vertex(100, 645);
    endShape();
    stroke(255, 255, 0);
    beginShape();
      vertex(100, 645);
      vertex(width/2, 347);
    endShape(CLOSE);
  }

  // Hexagon Shape
  if (num === 6) {
    background(0);
    stroke(255, 0, 0);
    // Begin shape, draw hexagon using vertexes, different colours for each side
    beginShape();
      vertex(width/2, 347);
      vertex(1140, 523);
    endShape();
    stroke(0, 255, 0);
    beginShape();
      vertex(1140, 523);
      vertex(1140, 1225);
    endShape();
    stroke(255);
    beginShape();
      vertex(1140, 1225);
      vertex(width/2, 1401);
    endShape();
    stroke(255, 255, 0);
    beginShape();
      vertex(width/2, 1401);
      vertex(100, 1225);
    endShape();
    stroke(0, 0, 25554);
    beginShape();
      vertex(100, 1225);
      vertex(100, 523);
    endShape();
     stroke(150, 125, 0);
    beginShape();
      vertex(100, 523);
      vertex(width/2, 347);
    endShape(CLOSE);
  }
}